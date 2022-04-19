// init function
window.addEventListener('load',function(){
    loadDocument();
})

// Fetch requests
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json()) 
  .then(json => console.log(json))


// XMLHttpRequest() => AJAX call
function loadDocument(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){      //callback function
        var doc = document.createElement('P');
        var heading = document.createElement('h2');
        heading.innerText = "GET XMLHttp Request example"
        doc.innerText += this.responseText;
        document.body.append(heading)
        document.body.append(doc)
    }
    xhttp.open('GET',"https://jsonplaceholder.typicode.com/todos/1", true);
    xhttp.send();
}

document.getElementById('form').addEventListener('onsubmit',function(e){
    // e.preventDefault();
    console.log(e);
})

function postDocument(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){      //callback function
        window.alert("Thank you for posting the info !")
    }
    xhttp.open('POST',"https://jsonplaceholder.typicode.com/posts", true);
    xhttp.send("");
}


// REST API requests


