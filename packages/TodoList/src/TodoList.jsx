import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Form, Input, Button } from "antd";

window.__react_2 = React;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const AddItem = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Button onClick={() => setCount(count + 1)}>test</Button>
      <b>{count}</b>
    </>
  )
}

export default AddItem;