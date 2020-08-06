import React, { useCallback } from "react";
import { Table, Checkbox } from "antd";

const TableColumn = Table.Column;
const CheckboxGroup = Checkbox.Group;

const defaultData = [
  {
    id: 1,
    platform: '淘宝',
    types: [
      {
        label: '电脑端宝贝图',
        value: '1'
      },
      {
        label: '颜色图',
        value: '2'
      }
    ]
  },
  {
    id: 2,
    platform: '京东',
    types: [
      {
        label: '产品展示图',
        value: '1'
      },
      {
        label: '透明素材图',
        value: '2'
      }
    ]
  },
  {
    id: 3,
    platform: '天猫',
    types: [
      {
        label: '商品图片',
        value: '1'
      },
      {
        label: '商品长图',
        value: '2',
      },
      {
        label: '素材图',
        value: '3'
      }
    ]
  }
]

const SharedTable = ({ data }) => {
  const typeRenderer = useCallback((_t, record, index) => {
    return (
      <CheckboxGroup options={record.types} dataSource={record.types}></CheckboxGroup>
    )
  })
  return (
    <Table dataSource={data || defaultData} rowKey="id">
      <TableColumn title="平台" dataIndex="platform" />
      <TableColumn title="图片类型" render={typeRenderer} />
    </Table>
  )
}

export default SharedTable