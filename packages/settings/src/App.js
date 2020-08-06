import React, { lazy, Suspense, useState, useCallback } from "react";
import { Button, Table, Modal } from "antd";

import "antd/dist/antd.css";
import "./index.css";

import SharedTable from './components/SharedTable'

const TableColumn = Table.Column;

const data = [
  {
    id: 1,
    platform: '天猫',
    name: '111',
    data: [
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
      }
    ]
  },
  {
    id: 2,
    platform: '京东',
    name: '222',
    data: [
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
      }
    ]
  }
]

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentRecord, setCurrentRecord] = useState(null);

  const closeModalHandler = useCallback(() => {
    setModalVisible(false);
    setCurrentRecord(null);
  }, []);
  const operRenderer = useCallback((_t, record) => {
    return (
      <Button
        type="text"
        onClick={() => {
          setModalVisible(true)
          setCurrentRecord(record.data)
        }}
      >
        编辑
      </Button>
    )
  }, [])

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span>主图导出规则</span>
        <Button onClick={() => setModalVisible(true)}>新增</Button>
      </div>
      <Table dataSource={data} rowKey="id">
        <TableColumn dataIndex="name" />
        <TableColumn dataIndex="platform" />
        <TableColumn render={operRenderer} />
      </Table>
      <Modal visible={modalVisible} onCancel={closeModalHandler} >
        <SharedTable data={currentRecord} />
      </Modal>
    </>
  )
}

export default App;