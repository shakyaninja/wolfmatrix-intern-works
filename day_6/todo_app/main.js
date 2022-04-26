// fetch all todo lists:

// function fetchAll(){
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         const jsonData = this.responseText;
//         const data = JSON.parse(jsonData);
//         var tasks = data.tasks[0];
//         tasks.forEach(element => {
//             var taskTitle = element.title;
//             var taskDesc = element.description;
//             const taskElement = '<div class="task d-flex column align-items-center justify-content-around m-2 p-4 border rounded" ><div><h3 class="task-title">'+taskTitle+'</h3><p class="task-desc">'+taskDesc+'</p></div><input type="checkbox" name="done" id="done"></div>'
//             document.getElementById('taskBox').innerHTML += taskElement
//         });
//     };
//     xhttp.open("GET", "http://todoapi/read.php");
//     xhttp.send();
// }



function fetchTodo(){
    $.ajax({
        async: false,
        url: "http://todoapi/read.php?progress=todo",
        type: "GET"
      }).done(function(response) {
            const jsonData = response;
            var tasks = jsonData.tasks[0];
            console.log('TODO tasks');
            tasks.forEach(element => {
                // console.log(element);
                var taskTitle = element.title;
                var taskDesc = element.description;
                const taskElement = '<div class="task-todo d-flex column align-items-center justify-content-around m-2 p-4 border rounded" onclick="update('+ element.id +')" ><div><h3 class="task-title">'+taskTitle+'</h3><p class="task-desc">'+taskDesc+'</p></div><input onchange="check('+element.id+',true);" type="checkbox" name="done" class="done"/></div>'
                document.getElementById('todoTaskBox').innerHTML += taskElement
            });
      });
}

function fetchDone(){
    $.ajax({
        async: false,
        url: "http://todoapi/read.php?progress=done",
        type: "GET"
      }).done(function(response) {
            const jsonData = response;
            var tasks = jsonData.tasks[0];
            // console.log('DONE tasks');
            // console.log(tasks)
            tasks.forEach(element => {
                // console.log(element);
                var taskTitle = element.title;
                var taskDesc = element.description;
                const taskElement = '<div class="task-done d-flex column align-items-center justify-content-around m-2 p-4 border rounded" ><div><h3 class="task-title">'+taskTitle+'</h3><p class="task-desc">'+taskDesc+'</p></div><input onclick="check('+element.id+',false);" type="checkbox" checked name="done" class="done"/></div>'
                document.getElementById('doneTaskBox').innerHTML += taskElement
            });
      });
}


// add todo tasks:
function addTask(){
    console.log("add task here");
    var data = {};
    data.title = document.getElementById('title').value;
    data.description = document.getElementById('description').value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(res) {
        const response = this.responseText;
        if(res.target.status == 200){
            location.reload();
            document.getElementById('actHeader').innerText = 'Add Task';
        }
    };
    xhttp.open("POST", "http://todoapi/create.php");
    xhttp.send(JSON.stringify(data));
}

function load(){
    fetchTodo();
    fetchDone();
}
// window.on('load',(()=>{
//     fetchTodo();
//     fetchDone();
// }))

function check(id,checked){
    // fetch data for given id
    var data = {
        title: '',
        description: ''
    }

    $.ajax({
        async: false,
        url: "http://todoapi/read.php?id="+id,
        type: "GET"
      }).done(function(response) {
            const jsonData = response.task[0][0];
           data.title = jsonData.title;
           data.description = jsonData.description;
      });

   
    if(checked){
        data.progress = 'done'
    }else{
        data.progress = 'todo'
    }
    // console.log(JSON.stringify(data));
    // toggle task progress
    $.ajax({
        async: false,
        url: "http://todoapi/update.php?id="+id,
        type: "POST",
        // contentType:  'application/json',
        data: JSON.stringify(data)
      }).done(function(response) {
            console.log(response);
      });

    location.reload();
}

function update(id){
    // fetch data for updation
    var data = {
        title: '',
        description: ''
    }

    $.ajax({
        async: false,
        url: "http://todoapi/read.php?id="+id,
        type: "GET"
      }).done(function(response) {
            const jsonData = response.task[0][0];
           data.title = jsonData.title;
           data.description = jsonData.description;
      });

    document.getElementById('actHeader').innerText = 'Update Task';
    document.getElementById('title').value = data.title;
    document.getElementById('description').value = data.description;
}

function showActForm(){
    document.getElementById('form').style.display = "block";
}

function hideActForm(){
    document.getElementById('form').style.display = "none";
}

hideActForm();