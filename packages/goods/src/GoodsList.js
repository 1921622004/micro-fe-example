import React, { lazy, Suspense, useState, useCallback } from "react";
import { Table, Modal, Button } from "antd";

import "antd/dist/antd.css";
import "./index.css";

const TableColumn = Table.Column;

const data = [
  {
    code: '裤子测试001',
    period: '2020-08-05',
    id: 1
  },
  {
    code: '裤子测试002',
    period: '2020-08-06',
    id: 2
  },
  {
    code: '裤子测试003',
    period: '2020-08-07',
    id: 3
  }
]

const SharedTable = lazy(() => import('settings/SharedTable'));

const TableWrapper = () => {
  return (
    <Suspense fallback={(<div>loading</div>)}>
      <SharedTable />
    </Suspense>
  )
}


const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const showModal = useCallback(() => setModalVisible(true), []);
  const selectionChangeHandler = useCallback((val) => setSelectedRowKeys(val),[])

  return (
    <>
      <Button onClick={showModal}>导出主图</Button>
      <Table dataSource={data} rowKey="id" rowSelection={{selectedRowKeys, onChange: selectionChangeHandler}}>
        <TableColumn title="货号" dataIndex="code"/>
        <TableColumn title="期数" dataIndex="period"/>
      </Table>
      <Modal title="导出主图" visible={modalVisible} onCancel={() => setModalVisible(false)}>
        <TableWrapper ids={setSelectedRowKeys}/>
      </Modal>
    </>
  )
}

export default App;