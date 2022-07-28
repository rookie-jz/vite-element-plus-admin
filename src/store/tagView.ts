import router from '@/router'
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const useTagViewStore = defineStore({
  id: 'tagView',
  state: () => {
    const tagViews: tagViewItem[] = reactive([])
    const homeItem: tagViewItem = {
      fullPath: '/index',
      title: '首页'
    }
    tagViews.push(homeItem)
    return {
      tagViews,
      active: '/index',
      reload: ref(false)
    }
  },
  actions: {
    addTagView(tagItem: tagViewItem) {
      const hasItem = this.tagViews.find((ele) => {
        return ele.fullPath === tagItem.fullPath
      })
      if (!hasItem) {
        this.tagViews.push(tagItem)
      }
      this.active = tagItem.fullPath
    },
    activeTagView(path: string) {
      this.active = path
    },
    removeTagView(fullPath: string, back = true) {
      const isCurrent = this.active === fullPath
      const index = this.tagViews.findIndex((item: tagViewItem) => {
        return fullPath === item.fullPath
      })
      this.tagViews.splice(index, 1)
      // back to near tag
      if (isCurrent && back) {
        this.active = this.tagViews[index - 1].fullPath
        router.push(this.active)
      }
    },
    renameTagView(tagItem: tagViewItem) {
      const item = this.tagViews.find((ele: tagViewItem) => {
        return tagItem.fullPath === ele.fullPath
      })
      if (item) item.title = tagItem.title
    }
  }
})
