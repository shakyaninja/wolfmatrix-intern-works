Day 5 (2079-01-09 || Friday) 
---
# Core PHP (Hypertext Preprocessor)

## Cookies

A cookie is often used to **identify** a user. A cookie is a small file that the server embeds on the user's computer. Each time the same computer requests a page with a browser, it will send the cookie too. With PHP, you can both create and retrieve cookie values.

cookie can be set using the following code:

``setcookie(name, value, expire, path, domain, secure, httponly);``

Where: 

* name - represents name of a cookie
* value - value of a cookie
* other parameters are **optional**

Creating and retrieving the cookie can be done as: 

```
<?php
$cookie_name = "user";
$cookie_value = "John Doe";
setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/"); // 86400 = 1 day
?>
<html>
<body>

<?php
if(!isset($_COOKIE[$cookie_name])) {
  echo "Cookie named '" . $cookie_name . "' is not set!";
} else {
  echo "Cookie '" . $cookie_name . "' is set!<br>";
  echo "Value is: " . $_COOKIE[$cookie_name];
}
?>

</body>
</html>
```

**Note**: The ``setcookie()`` function must appear BEFORE the ``<html>`` tag.

To modify a cookie again ``setcookie()`` an be run again.

To delete cookie, use the setcookie() function with an expiration date in the past:

```
<?php
// set the expiration date to one hour ago
setcookie("user", "", time() - 3600);
?>
<html>
<body>

<?php
echo "Cookie 'user' is deleted.";
?>

</body>
</html>
```

* For checking if cookies are enabled or not we must set a test cookie then count the no. of cookies after that inside ``$_COOKIE`` suparglobal variable.

## Session

A session is a way to store information (in variables) to be used across multiple pages.

* Unlike a cookie, the information is not stored on the users computer.

When we work with an application, we open it, do some changes, and then we close it. This is much like a Session. The computer knows who we are. It knows when we start the application and when we end. But on the internet there is one problem: the web server does not know who we are or what we do, because the HTTP address doesn't maintain state.

Session variables solve this problem by storing user information to be used across multiple pages (e.g. username, favorite color, etc). By default, session variables last until the user closes the browser.

So; Session variables hold information about one single user, and are available to all pages in one application.

A session is started with the ``session_start()`` function.

Session variables are set with the PHP global variable: ``$_SESSION``.

* **Note**: The session_start() function must be the very first thing in your document. Before any HTML tags.

```
<?php
session_start();
?>
<!DOCTYPE html>
<html>
<body>

<?php
print_r($_SESSION);
$_SESSION["favcolor"] = "green";
$_SESSION["favanimal"] = "cat";

// remove all session variables
session_unset();

// destroy the session
session_destroy();
?>

</body>
</html>
```

## PHP Filters

* Validating data = Determine if the data is in proper form.

* Sanitizing data = Remove any illegal character from the data.

PHP filters are used to validate and sanitize external input.

The PHP filter extension has many of the functions needed for checking user input, and is designed to make data validation easier and quicker.

The ``filter_list()`` function can be used to list what the PHP filter extension offers:

```
<table>
  <tr>
    <td>Filter Name</td>
    <td>Filter ID</td>
  </tr>
  <?php
  foreach (filter_list() as $id =>$filter) {
    echo '<tr><td>' . $filter . '</td><td>' . filter_id($filter) . '</td></tr>';
  }
  ?>
</table>
```

As many web applications receive external input. External input/data can be:

* User input from a form
* Cookies
* Web services data
* Server variables
* Database query results

The ``filter_var()`` function both validate and sanitize data.

The ``filter_var()`` function filters a single variable with a specified filter. It takes two pieces of data:

* The variable you want to check
* The type of check to use

Sanitizing a string

```
<?php
$str = "<h1>Hello World!</h1>";
$newstr = filter_var($str, FILTER_SANITIZE_STRING);
echo $newstr;
?>
```

Validating Integer

```
<?php
$int = 100;

if (!filter_var($int, FILTER_VALIDATE_INT) === false) {
  echo("Integer is valid");
} else {
  echo("Integer is not valid");
}
?>
```

Validating email

```
<?php
$email = "john.doe@example.com";

// Remove all illegal characters from email
$email = filter_var($email, FILTER_SANITIZE_EMAIL);

// Validate e-mail
if (!filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
  echo("$email is a valid email address");
} else {
  echo("$email is not a valid email address");
}
?>
```

Valiidating IP

```
<?php
$ip = "127.0.0.1";

if (!filter_var($ip, FILTER_VALIDATE_IP) === false) {
  echo("$ip is a valid IP address");
} else {
  echo("$ip is not a valid IP address");
}
?>
```

Sanitize and validate URLs

```
<?php
$url = "https://www.example.com";

// Remove all illegal characters from a url
$url = filter_var($url, FILTER_SANITIZE_URL);

// Validate url
if (!filter_var($url, FILTER_VALIDATE_URL) === false) {
  echo("$url is a valid URL");
} else {
  echo("$url is not a valid URL");
}
?>
```

## PHP Callback functions

A callback function (often referred to as just "callback") is a function which is passed as an argument into another function.

Any existing function can be used as a callback function. To use a function as a callback function, pass a string containing the name of the function as the argument of another function:

```
<?php
$strings = ["apple", "orange", "banana", "coconut"];
$lengths = array_map( function($item) { return strlen($item); } , $strings);
print_r($lengths);
?>
```

## PHP JSON

PHP has some built-in functions to handle JSON.

JSON operations in PHP are following two functions:

* ``json_encode()`` - used to encode a value to JSON format.
* ``json_decode()`` - used to decode a JSON value to PHP object or Associative array.

JSON encoding:

```
<?php
$age = array("Peter"=>35, "Ben"=>37, "Joe"=>43);

echo json_encode($age);
?>
```

JSON decoding into PHP object:

```
<?php
$jsonobj = '{"Peter":35,"Ben":37,"Joe":43}';

$obj = json_decode($jsonobj);

echo $obj->Peter;
echo $obj->Ben;
echo $obj->Joe;
?>
```

JSON decoding into associative array:

```
<?php
$jsonobj = '{"Peter":35,"Ben":37,"Joe":43}';

$arr = json_decode($jsonobj, true);

echo $arr["Peter"];
echo $arr["Ben"];
echo $arr["Joe"];
?>
```

## PHP Exceptions

An exception is an object that describes an error or unexpected behaviour of a PHP script. Exceptions are thrown by many PHP functions and classes.User defined functions and classes can also throw exceptions. Exceptions are a good way to stop a function when it comes across data that it cannot use.

Usage of Try, catch, finally block can be useful.

```
try {
  code that can throw exceptions
} catch(Exception $e) {
  code that runs when an exception is caught
} finally {

}

```

for example:

```
<?php
function divide($dividend, $divisor) {
  if($divisor == 0) {
    throw new Exception("Division by zero");
  }
  return $dividend / $divisor;
}

try {
  echo divide(5, 0);
} catch(Exception $e) {
  echo "Unable to divide. ";
} finally {
  echo "Process complete.";
}
?>
```

Exception Object

The Exception Object contains information about the error or unexpected behaviour that the function encountered.

Syntax:

``new Exception(message, code, previous)``

parameters:

* message - Optional. A string describing why the exception was thrown
* code - Optional. An integer that can be used used to easily distinguish this exception from others of the same type
* previous - Optional. If this exception was thrown in a catch block of another exception, it is recommended to pass that exception into this parameter

possible methods:

* ``getMessage()``	Returns a string describing why the exception was thrown
* ``getPrevious()``	If this exception was triggered by another one, this method returns the previous exception. If not, then it returns null
* ``getCode()``	Returns the exception code
* ``getFile()``	Returns the full path of the file in which the exception was thrown
* ``getLine()``	Returns the line number of the line of code which threw the exception

```
<?php
function divide($dividend, $divisor) {
  if($divisor == 0) {
    throw new Exception("Division by zero", 1);
  }
  return $dividend / $divisor;
}

try {
  echo divide(5, 0);
} catch(Exception $ex) {
  $code = $ex->getCode();
  $message = $ex->getMessage();
  $file = $ex->getFile();
  $line = $ex->getLine();
  echo "Exception thrown in $file on line $line: [Code $code]
  $message";
}
?>
```

## PHP OOP



## PHP Classes/Objects




## PHP Constructors



## PHP Destructors



## PHP Interfaces



## PHP Namespace



## PHP Iterables



# MySQL Database Basics