import XEUtils from 'xe-utils'
import { App } from 'vue'
import { VXETable, Column, Table, Colgroup, Grid, Tooltip, Toolbar, Pager } from 'vxe-table'

import zhCN from 'vxe-table/es/locale/lang/zh-CN'

VXETable.setup({
  i18n: (key, args) => XEUtils.toFormatString(XEUtils.get(zhCN, key), args)
})

function useTable(app: App) {
  app.use(Column).use(Table).use(Colgroup).use(Grid).use(Tooltip).use(Toolbar).use(Pager)
  // 给 vue 实例挂载内部对象，例如：
  app.config.globalProperties.$XModal = VXETable.modal
  app.config.globalProperties.$XPrint = VXETable.print
  app.config.globalProperties.$XSaveFile = VXETable.saveFile
  app.config.globalProperties.$XReadFile = VXETable.readFile
}
export default useTable
