import React from 'react'
import { Avatar, Card } from 'antd';

function Post(props) {
  return (
    <Card 
        title={<div><Avatar src="https://joeschmoe.io/api/v1/random" /><p>{props.user.username}</p></div>} 
        bordered={true}  
        style={{ width: 500 }}
    >
        <h2>{props.title}</h2>
        <p>{props.user.posted_at}</p>
        <p>{props.content}</p>
    </Card>
  )
}

export default Post