import React from 'react';

import { Form, Input, Button, Checkbox, Space } from 'antd';
import './login.component.css';
import { useNavigate } from 'react-router';
import { toast } from 'react-toast';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

const Login
 = (props) => {
   const navigate = useNavigate();
  const onFinish = (values) => {
    // fetch the login user to get token
    fetch(
        'http://127.0.0.1:8000/api/login_check',
        {
          method:'POST',
          body:JSON.stringify({
              "username": values.username,
              "password": values.password
          }),
          mode: 'cors',
          headers:{
            'Content-Type': 'application/json'
        //     Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTIzNDMzNTUsImV4cCI6MTY1MjQyOTc1NSwicm9sZXMiOlsiYWRtaW4iLCJST0xFX1VTRVIiXSwidXNlcm5hbWUiOiJsdWphc2hha3lhIn0.J2o0DBEGUP3XOTVuT0I7-J15tAsbrAH-QGVKImstbEniT7IQgQKHFwbdVxShMpqLubXsv6SLerRneqQeq6YcwHrsqMdymY77D3OX3N6ZB9tGTXdCR_IybFeoipRhl69r1PqA-Bfo5xRTj92fwyM-Zb21HtDuMQbD_dwMvFCfzcj-IQEYAYZ10HiQcOeAY4fFifynus7hx4pSQtMHDVu26I110Z4jxg4QClCFd-pkc0shUGvxHUv-jESTiyJ4-5HvL8UPxXQLyJE1csoyV3kWksUfXnoGz3dlcwLpWiBcDcz3-P1JjlUpLH5sz6E7hnegRnMP2g4wnWZFQFFKUSYzfQ'
          }
        }

      ).then((response)=>{
        return response.json();
      })
      .then((res)=>{
        localStorage.setItem('token',res.token);
        navigate('/');
        toast.success('User Logged in');
    })
      .catch((err)=>{
        toast.error(err);
      })
  };

  const onFinishFailed = (errorInfo) => {
    toast.error(errorInfo);
  };

  return (
    <div className='flex-block w-100 h-100 bg-login'>
      <h1>Login</h1>
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
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
      </Form>
    </div>
  );
};

export default Login
;