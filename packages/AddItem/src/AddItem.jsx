import React from "react";
import ReactDOM from "react-dom";
import { Form, Input, Button } from "antd";
import singleSpaReact from "single-spa-react";

window.__react_2 = React;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const AddItem = () => {
  return (
    <Button>test</Button>
  )

  return (
    <Form {...layout}>
      <Form.Item required label="title" name="title">
        <Input />
      </Form.Item>
      <Form.Item required label="content" name="content">
        <Input />
      </Form.Item>
    </Form>
  )
}

const addItemLifeCycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: AddItem
});

export const bootStrap = addItemLifeCycles.bootstrap;
export const mount = addItemLifeCycles.mount;
export const unmount = addItemLifeCycles.unmount;

export default AddItem;