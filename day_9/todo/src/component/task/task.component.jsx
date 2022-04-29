import React from 'react'
import { Button, Collapse, Space} from 'antd';
import { CheckOutlined,StopOutlined,DeleteFilled } from '@ant-design/icons';
import { UpdateTaskPage } from '../updateTask/updateTask.component';
const { Panel } = Collapse;

import './task.css';


const edit = (props,id,data) =>{
    console.log(props);
    fetch('http://todoapi/update.php?id='+id,{
        method: 'POST',
        mode : 'cors',
        body: JSON.stringify(data)
        })
        .then((res)=>{
            if(res.status === 201){
                // re render frame
                // console.log(res);
                props.data.onUpdate(id,data,props.data.done);
            }
        })
        .catch((err)=>{
            console.log(err);
        })
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

const remove = (props) => {
    props.onDelete(props.id,props.done);
    // fetch to delete task with id
    fetch('http://todoapi/delete.php?id='+props.id,{
            method: 'GET',
            mode : 'cors'
          })
            .then((res)=>{
                if(res.status === 201){
                  // re render frame
                //   console.log(res);
                    props.onDelete(props.id,props.done);
                }
            })
            .catch((err)=>{
              console.log(err);
            })
}

function Task(props) {
  return (
    <div className='task'>
        <Space direction="vertical">
            <Collapse >
                <Panel header={props.title} >
                    <p>{props.description}</p>
                    <Space>
                        <UpdateTaskPage data={props} updateTask={edit}></UpdateTaskPage>
                        <Button type="primary" icon={props.done?<StopOutlined />:<CheckOutlined />}  onClick={() => {done(props)}}>{props.done?"Not Done":"Done"}</Button>
                        <Button type="danger" icon={<DeleteFilled />}  onClick={() => {remove(props)}}>Delete</Button>
                    </Space>
                </Panel>
            </Collapse>
        </Space>
    </div>
  )
}

export default Task;