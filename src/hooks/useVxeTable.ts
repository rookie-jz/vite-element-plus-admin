import type { VxeGridProps } from 'vxe-table'

export const getGridOptions = (options: VxeGridProps) => {
  const gridOption: VxeGridProps = {
    border: true,
    maxHeight: 650,
    align: 'center',
    size: 'small',
    emptyText: '没有符合条件的数据...',
    highlightCurrentRow: true,
    columnConfig: {
      resizable: true
    },
    toolbarConfig: {
      slots: {
        buttons: 'toolbar_buttons'
      }
    },
    pagerConfig: {
      pageSize: 20,
      pageSizes: [5, 10, 15, 20, 50, 100, 200, 500, 1000]
    },
    ...options
  }
  return gridOption
}
