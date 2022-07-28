import type { RouteLocationRaw } from 'vue-router'
import { useRouter, useRoute } from 'vue-router'
import { useTagViewStore } from '@/store/tagView'

export function useGo() {
  const { push } = useRouter()
  function go(opt: string | RouteLocationRaw) {
    if (!opt) return
    push(opt)
  }
  return go
}

export function useBack() {
  const { fullPath } = useRoute()
  const { back } = useRouter()
  const tagView = useTagViewStore()
  function goBack() {
    tagView.removeTagView(fullPath, false)
    back()
  }
  return goBack
}

/**
 * reload current tagview
 * @returns Function
 */
export function useReload() {
  return () => {
    const tagView = useTagViewStore()
    tagView.reload = true
    setTimeout(() => {
      tagView.reload = false
    }, 0)
  }
}
