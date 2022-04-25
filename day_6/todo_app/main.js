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
                console.log(element);
                var taskTitle = element.title;
                var taskDesc = element.description;
                const taskElement = '<div class="task d-flex column align-items-center justify-content-around m-2 p-4 border rounded" ><div><h3 class="task-title">'+taskTitle+'</h3><p class="task-desc">'+taskDesc+'</p></div><input onchange="check('+element.id+','+ element.title+','+element.description+',true);" type="checkbox" name="done" class="done"></div>'
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
            console.log('DONE tasks');
            // console.log(tasks)
            tasks.forEach(element => {
                console.log(element);
                var taskTitle = element.title;
                var taskDesc = element.description;
                const taskElement = '<div class="task d-flex column align-items-center justify-content-around m-2 p-4 border rounded" ><div><h3 class="task-title">'+taskTitle+'</h3><p class="task-desc">'+taskDesc+'</p></div><input onclick="check('+element.id+','+ element.title+','+element.description+',false);" type="checkbox" checked name="done" class="done"></div>'
                document.getElementById('doneTaskBox').innerHTML += taskElement
            });
      });
}


// add todo tasks:

document.getElementById('submit').addEventListener('onclick',(e) => {
    e.preventDefault();
    var data = {};
    data.title = document.getElementById('title').value;
    data.description = document.getElementById('description').value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        const response = this.responseText;
        console.log(response);
    };
    xhttp.open("POST", "http://todoapi/create.php");
    xhttp.send(data);
})

function load(){
    fetchTodo();
    fetchDone();
}
// window.on('load',(()=>{
//     fetchTodo();
//     fetchDone();
// }))

function check(id,title,desc,checked){
    console.log("here");
    var data = {
        title: title,
        description: desc
    }
    if(checked){
        data.progress = 'done'
    }else{
        data.progress = 'todo'
    }
    // data = JSON.encode(data);
    console.log(data);
    // toggle task progress
    // $.ajax({
    //     async: false,
    //     url: "http://todoapi/update.php?id="+element.id,
    //     type: "POST",
    //     contentType:  application/json,
    //     data: 
    //   }).done(function(response) {
    //         console.log(response);
    //         location.reload();
    //   });
}