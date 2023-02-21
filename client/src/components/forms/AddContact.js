import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Form, Input } from "antd";

const AddContact = () => {
  const [id] = useState(uuidv4());

  return (
    <Form
      name="add-contact-form"
      layout="inline"
      size="large"
      style={{ marginBottom: "40px" }}
    >
      <Form.Item
        name="firstName "
        rules={[{ required: true, message: "Please enter your first name!" }]}
      >
        <Input placeholder="i.e. John"></Input>
      </Form.Item>
      <Form.Item
        name="lastName "
        rules={[{ required: true, message: "Please enter your last name!" }]}
      >
        <Input placeholder="i.e. Smith"></Input>
      </Form.Item>
      <Form.Item shouldUpdate={true}></Form.Item>
    </Form>
  );
};

export default AddContact;
