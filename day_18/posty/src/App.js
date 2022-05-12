import React, { useState } from 'react';
import Post from './components/post/post.component';
import './App.css';
import { Space } from 'antd';
import {useEffect} from 'react';
import Login from './components/login/login.component';
import Createpost from './components/createpost/createpost.component';
// import { ToastContainer } from 'react-toastify';
const App = () => {
  const [posts,setPosts] = useState([]);
  const [isLoggedIn,setIsLoggedIn] = useState(false);

  const toggleLoginState = () => {
    // console.log("toggled");   
    setIsLoggedIn(true);
  }
    useEffect(()=>{
      const token = localStorage.getItem('token') ? localStorage.getItem('token'): '';

      if(token == ''){
        setIsLoggedIn(false);
      }else{
        setIsLoggedIn(true);
        fetch(
          'http://127.0.0.1:8000/api/post',
          {
            method:'GET',
            mode: 'cors',
            headers:{
              Authorization: 'Bearer '+token
            }
          }
  
        ).then((response)=>{
          return response.json();
        })
        .then((res)=>{
          setPosts(res.data);
        })
        .catch((err)=>{
          console.log("error:",err);
        })
      }
      // fetch posts here
      
    },[])

    return (
      <div className="App">
        {/* <ToastContainer></ToastContainer> */}
        <h1>Posty</h1>
        <Space 
        direction='vertical' 
        size="middle" 
        style={{ 
          display: 'flex',
          marginLeft: '50px', 
          marginRight: '50px' 
          }}>
          {isLoggedIn?
            posts.map((element,key)=>(
            <Post 
              key={key}
              title={element.title}
              content={element.content}
              user={{
                username: element.addedBy.username,
                posted_at: '2022 March 12 12:14 AM'
              }}
              />
              ))
          :(<Login onLogin={toggleLoginState}></Login>)}
          {/* <Createpost></Createpost> */}
        </Space>
      </div>
    );
}

export default App;