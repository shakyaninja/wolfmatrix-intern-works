import React, { useState } from 'react';
import { Button, Modal, Form, Input } from 'antd';
import { EditOutlined } from '@ant-design/icons';

const UpdateTaskForm = ({ visible, onUpdate, onCancel ,data}) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Update a Task"
      okText="Update"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onUpdate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[
            {
              required: true,
              message: 'Please input the title of Task!',
            },
          ]}
        >
          <Input 
              defaultValue={data.title}
          />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input type="textarea" defaultValue={data.description}/>
        </Form.Item>
      </Form>
    </Modal>
  );
};

const UpdateTaskPage = (props) => {
  const [visible, setVisible] = useState(false);

  const onUpdate = (values) => {
    // props.addTask(values);
    // console.log("onUpdate called values:",values,props.data.id);
    var updatedData = {
      title: values.title,
      description: values.description
    }
    // fetch api here to update data 
    props.updateTask(props,props.data.id,updatedData);

    setVisible(false);
  };

  return (
    <div>
      <Button
        type="default"
        onClick={() => {
          setVisible(true);
        }}
        icon={<EditOutlined />}
      >

        Edit
      </Button>
      <UpdateTaskForm
        visible={visible}
        onUpdate={onUpdate}
        onCancel={() => {
          setVisible(false);
        }}
        data={props.data}
      />
    </div>
  );
};

export {
  UpdateTaskPage,
  UpdateTaskForm
} 