import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import {Space} from 'antd';
// import { toast } from 'react-toastify';
const Createpost = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
    fetch(
      'http://127.0.0.1:8000/api/post',
      {
        method:'POST',
        body:JSON.stringify({
            "title": values.title,
            "content": values.content
        }),
        mode: 'cors',
        headers:{
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+localStorage.getItem('token')
        }
      }

    ).then((response)=>{
      return response.json();
    })
    .then((res)=>{
      console.log(res.message);
      // toast.success(res.message);
    })
    .catch((err)=>{
      console.log("error:",err);
    })
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Space>
        <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >
            <Form.Item
                label="title"
                name="title"
                rules={[{ required: true, message: 'Please input your title for the post!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="content"
                name="content"
                rules={[{ required: true, message: 'Please input your content for the post!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                Add post
                </Button>
            </Form.Item>
        </Form>
    </Space>
  );
};

export default Createpost;