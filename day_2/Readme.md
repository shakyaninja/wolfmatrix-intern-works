# Fetch Request
The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network.

Fetch provides a better alternative that can be easily used by other technologies such as Service Workers.

Fetch also provides a single logical place to define other HTTP-related concepts such as CORS and extensions to HTTP.

The Promise returned from fetch() won't reject on HTTP error status even if the response is an HTTP 404 or 500. Instead, as soon as the server responds with headers, the Promise will resolve normally (with the ok property of the response set to false if the response isn't in the range 200–299), and it will only reject on network failure or if anything prevented the request from completing.

for Example:

fetch GET API call:
```
fetch('http://example.com/movies.json',{
    method: 'GET',
    mode: 'cors'
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch((error) => {
      console.log(error);
  })
```

fetch POST API call:
```
fetch('https://example.com/profile', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
```

fetch call uploading file:
```
const formData = new FormData();
const fileField = document.querySelector('input[type="file"]');

formData.append('username', 'abc123');
formData.append('avatar', fileField.files[0]);

fetch('https://example.com/profile/avatar', {
  method: 'PUT',
  body: formData
})
.then(response => response.json())
.then(result => {
  console.log('Success:', result);
})
.catch(error => {
  console.error('Error:', error);
});
```

fetch call uploading multiple files:
Also make input type as ``<input type="file" multiple />``
```
const formData = new FormData();
const photos = document.querySelector('input[type="file"][multiple]');

formData.append('title', 'My Vegas Vacation');
for (let i = 0; i < photos.files.length; i++) {
  formData.append(`photos_${i}`, photos.files[i]);
}

fetch('https://example.com/posts', {
  method: 'POST',
  body: formData,
})
.then(response => response.json())
.then(result => {
  console.log('Success:', result);
})
.catch(error => {
  console.error('Error:', error);
});
```

# Async , Await 

Special syntax to work with promises in a more comfortable fashion.

``async`` & ``await``

async ensures that the function returns a promise, and wraps non-promises in it. 

The keyword await makes JavaScript wait until that promise settles and returns its result.

for example:

```
async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // wait until the promise resolves (*)

  alert(result); // "done!"
}

f();
```
* Here we can replace ``.then`` from promise with the proper order of ``async`` and ``await`` correspondingly.

# xhttp Request (AJAX)

AJAX = Asynchronous JavaScript And XML.

AJAX is not a programming language.

AJAX just uses a combination of:

A browser built-in XMLHttpRequest object (to request data from a web server)
JavaScript and HTML DOM (to display or use the data)

![Working of AJAX](https://www.w3schools.com/js/pic_ajax.gif "Working of AJAX")

The keystone of AJAX is the XMLHttpRequest object.

* Create an XMLHttpRequest object
* Define a callback function
* Open the XMLHttpRequest object
* Send a Request to a server

```
// XMLHttpRequest() => AJAX call
function loadDocument(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){      //callback function
        var doc = document.createElement('P');
        doc.innerText = this.responseText;
        console.log(doc);
        document.write(doc.innerText);
    }
    xhttp.open('GET',"https://jsonplaceholder.typicode.com/todos/1", true);
    xhttp.send();
}
```

# ES5 and ES6

## ECMAScript 5 

ES5 is also known as ECMAScript 2009 as it is released in 2009. It is a function contractors focus on how the objects are instantiated. For ES5 you have to write function keyword and return, to be used to define the function, like normal general JavaScript language. 

* only one way to define the variables by using the var keyword.
* lower performance
* Object manipulation is time-consuming
* both function and return keywords are used
* larger range of community supports

## ECMAScript 6 

ES6 is also known as ECMAScript 2015 as it is released in 2015. Its class allows the developers to instantiate an object using the new operator, using an arrow function, in case it doesn’t need to use function keyword to define the function, also return keyword can be avoided to fetch the computer value. 

* define the variables by using the let , const , var keyword.
* higher performance
* Object manipulation is less time-consuming
* function and return keywords are not required (has arrow function support)
* smaller range of community supports

# REST API

(**REpresentational State Transfer**)

A REST API (also known as RESTful API) is an application programming interface (API or web API) that conforms to the constraints of REST architectural style and allows for interaction with RESTful web services.

REST is a set of architectural constraints, not a protocol or a standard. API developers can implement REST in a variety of ways.

API is a more general set of protocols and is deployed over the software to help it interact with some other software. REST is only geared towards web applications. And mostly deals with HTTP requests and responses.

## GET request

Used for fetching data from API.
example:
```
 function getReq(id){
            objId = id;
            edit.style.display = "block";
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var data = JSON.parse(this.responseText);
                    document.getElementById('edit-name').value = data.name;
                    document.getElementById('edit-crn').value = data.CRN;
                    document.getElementById('edit-address').value = data.address;
                    document.getElementById('edit-age').value = data.age;
                }
            };
            xhttp.open("GET", "https://intranetlab-9c605-default-rtdb.firebaseio.com/testObj/"+id+".json", true);
            xhttp.send();
        }
```

## POST request

Used for posting data through API in server.
example:
```
const submitForm = function(){
            var formData = {
                name: document.getElementById('name').value,
                age: document.getElementById('age').value,
                address: document.getElementById('address').value,
                CRN: document.getElementById('crn').value
            }
            console.log(formData);
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    // console.log("Success");
                    alert("POSTED data to database.")
                }
            };
            xhttp.open("POST", "https://intranetlab-9c605-default-rtdb.firebaseio.com/testObj.json");
            // xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhttp.send(JSON.stringify(formData));
        }
```

## PUT request

Used for modifying or updating data through API in server.
example:
```
function editDoc(id = objId){
            // display edit form with data to edit on.
            // getReq(objId);
            var formData = {
                name: document.getElementById('edit-name').value,
                age: document.getElementById('edit-age').value,
                address: document.getElementById('edit-address').value,
                CRN: document.getElementById('edit-crn').value
            }
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    edit.style.display = "none";
                    console.log("PUT successfull");
                }
            };
            xhttp.open("PUT", "https://intranetlab-9c605-default-rtdb.firebaseio.com/testObj/"+objId+".json", true);
            xhttp.send(JSON.stringify(formData));
        }
```

## DELETE request

Used for deleting data through API in server.
example:
```
function deleteDoc(id){
            var objId = id;
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    console.log("DELETE successfull");
                }
            };
            xhttp.open("DELETE", "https://intranetlab-9c605-default-rtdb.firebaseio.com/testObj/"+objId+".json");
            xhttp.send();
        }
```

# JSON

JSON stands for JavaScript Object Notation

JSON is a text format for storing and transporting data

JSON is "self-describing" and easy to understand

``'{"name":"John", "age":30, "car":null}'``

The JSON format is syntactically similar to the code for creating JavaScript objects. Because of this, a JavaScript program can easily convert JSON data into JavaScript objects.

Since the format is text only, JSON data can easily be sent between computers, and used by any programming language.

JavaScript has a built in function for converting JSON strings into JavaScript objects:

``JSON.parse()``

JavaScript also has a built in function for converting an object into a JSON string:

``JSON.stringify()``

JSON Files:

* The file type for JSON files is ".json"
* The MIME type for JSON text is "application/json"

# CORS (Cross-Origin Resource Sharing)

Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.

Example of a cross-origin request:

The ``front-end`` JavaScript code served from ``https://domain-a.com`` uses ``XMLHttpRequest`` to make a request for ``https://domain-b.com/data.json``.

![working of CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/cors_principle.png "CORS working")


# JS maps integration works

map can be integrated in web application using any of the provided APIs from:

* Google Maps
* Microsoft Bing
* Open layers
* Mapfit
* Mapbox

can be done as:

* Directions API
* Maps Embeded API
* Maps JavaScript API
* Maps SDK for Android
* Places API
* Distance Matrix API
* Maps Elevation API
* Geocoding API
* Geolocation API
* Roads API
* Maps SDK for IOS
* Timezone API
* Maps Static API
* Street View Static API
