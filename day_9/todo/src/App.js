import React, { Component } from 'react';
import Task from './component/task/task.component';
import { Row, Col, Space} from 'antd';
import { AddTaskPage} from './component/addTask/addTask.component';

import './App.css';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading : true,
      // todoTasks : [{
      //   id: 25,
      //   title: "todo",
      //   description: "asdas",
      //   progress: "todo"
      // }], 
      todoTasks : [],
      doneTasks : []
    };
  }

  rerender = (id,done) => {
    // console.log("here");
    // console.log(id,done);

    // update todoTasks and doneTasks
    if(done){
      // find task with id inside doneTasks
      this.state.doneTasks.forEach((element,index) => {
        // console.log(element);
        if(element.id === id){
          var spliced = this.state.doneTasks.splice(index,1);
          // console.log("spliced: ",spliced);
           this.setState({
            doneTasks: this.state.doneTasks,
            todoTasks: [...this.state.todoTasks,spliced[0]]
          })
        }
      });
      
    }else{
      // find task with id inside todoTasks
      this.state.todoTasks.forEach((element,index) => {
        // console.log(element);
        if(element.id === id){
          var spliced = this.state.todoTasks.splice(index,1);
          // console.log("spliced: ",spliced);
          this.setState({
              todoTasks: this.state.todoTasks,
              doneTasks: [...this.state.doneTasks,spliced[0]]
            })
        }
      });
    }
  }

  fetchTodoTasks = () => {
    var todoTasks = [];
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(res) {
      const response = this.responseText;
      if(res.target.status === 201){
        todoTasks = JSON.parse(response).tasks[0];   
      }
    };

    xhttp.open("GET", "http://todoapi/read.php?progress=todo",false);
    xhttp.send();
    return todoTasks;
  }

  fetchDoneTasks = () => {
    var doneTasks = [];
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(res) {
      const response = this.responseText;
      if(res.target.status === 201){
        doneTasks = JSON.parse(response).tasks[0];   
      }
    };

    xhttp.open("GET", "http://todoapi/read.php?progress=done",false);
    xhttp.send();
    return doneTasks;
  }

  componentDidMount(){
    // fetch all todo tasks api here
    var todoTasks = this.fetchTodoTasks();
    // console.log(todoTasks);
    
    // fetch all done tasks api here
    var doneTasks = this.fetchDoneTasks();
    // console.log(doneTasks);

    this.setState({
      todoTasks: todoTasks,
      doneTasks: doneTasks,
      isLoading: false
    });
}

pushTask = (task) => {
  this.setState({
    todoTasks: [...this.state.todoTasks,task]
  })
}

addTask = (data) => {
  // fetch('http://todoapi/create.php',{
  //     method: 'POST',
  //     // mode : 'cors',
  //     body: JSON.stringify(data)
  //   })
  //     .then((res)=>{
  //         return(res.json());
  //     })
  //     .then((res)=>{
  //         if(res.status < 300){
  //           // re render frame
  //           return(res)
  //         }
  //     })
  //     .catch((err)=>{
  //       console.log(err);
  //     })
    var xhttp = new XMLHttpRequest();
    var newTask = {};
    xhttp.onreadystatechange = function(res) {
      const response = this.responseText;
      if(res.target.status === 200){
        var id = JSON.parse(response).Data; 
        newTask = {
          id: id,
          title: data.title,
          description: data.description
        }
      }
    };

    xhttp.open("POST", "http://todoapi/create.php",false);
    xhttp.send(JSON.stringify(data));
    this.pushTask(newTask);
  }

  render() {
    // console.log("Todo tasks");
    // console.log(this.state.todoTasks);
    // console.log("Done tasks");
    // console.log(this.state.doneTasks);
    return (
      this.state.isLoading?<Space>Loading ...</Space>:
      <div className='task-container'>
          <h1>React TODO App</h1>
          <AddTaskPage addTask={this.addTask}></AddTaskPage>
          <Row>
            <Col span={11}>
              <h1>Todo tasks</h1>
              {
                this.state.todoTasks.map((element)=>{
                    return (
                        <Task onDone={this.rerender} done={false} title={element.title} description={element.description} id={element.id} ></Task>
                    )
                })
              }
            </Col>
            <Col span={2}>
              <div className="divider">

              </div>
            </Col>
            <Col span={11} >
              <h1>Completed tasks</h1>
              {
                this.state.doneTasks.map((element)=>{
                    return (
                        <Task onDone={this.rerender} done={true} title={element.title} description={element.description} id={element.id} ></Task>
                    )
                })
              }
            </Col>
          </Row>
      </div>
    );
  }
}

export default App;
