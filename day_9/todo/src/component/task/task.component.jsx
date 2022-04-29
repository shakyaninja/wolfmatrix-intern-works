import React from 'react'
import { Button, Collapse, Space} from 'antd';
import { CheckOutlined,StopOutlined,EditOutlined } from '@ant-design/icons';
import {AddTaskForm} from '../addTask/addTask.component';
const { Panel } = Collapse;

import './task.css';


const edit = (props) =>{
    // console.log(props);
    // var values = {
    //     title: props.title,
    //     description: props.description
    // }
}

const done = (props) =>{
    // console.log(props);
    props.onDone(props.id,props.done);

    var values = {
        title: props.title,
        description: props.description
    }
    // toggle progress
    if(props.done){
        // update to todo
        values.progress = 'todo';
        fetch('http://todoapi/update.php?id='+props.id,{
            method: 'POST',
            mode : 'cors',
            body: JSON.stringify(values)
            })
            .then((res)=>{
                if(res.status === 201){
                    // re render frame
                    // console.log(res);
                }
            })
            .catch((err)=>{
                console.log(err);
            })
    }else{
        // update to done
        values.progress = 'done';
        fetch('http://todoapi/update.php?id='+props.id,{
            method: 'POST',
            mode : 'cors',
            body: JSON.stringify(values)
          })
            .then((res)=>{
                if(res.status === 201){
                  // re render frame
                //   console.log(res);
                }
            })
            .catch((err)=>{
              console.log(err);
            })
    }
}


function Task(props) {
  return (
    <div className='task'>
        <Space direction="vertical">
            <Collapse >
                <Panel header={props.title} >
                    <p>{props.description}</p>
                    <Space>
                        <Button type="default" icon={<EditOutlined />}  onClick={() => {edit(props)}}>Edit</Button>
                        <Button type="primary" icon={props.done?<StopOutlined />:<CheckOutlined />}  onClick={() => {done(props)}}>{props.done?"Not Done":"Done"}</Button>
                    </Space>
                </Panel>
            </Collapse>
        </Space>
        <AddTaskForm></AddTaskForm>
    </div>
  )
}

export default Task;