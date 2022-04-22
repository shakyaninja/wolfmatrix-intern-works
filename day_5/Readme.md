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

## PHP Callback functions



## PHP JSON



## PHP Exceptions



## PHP OOP



## PHP Classes/Objects



## PHP Filters



## PHP Constructors



## PHP Destructors



## PHP Interfaces



## PHP Namespace



## PHP Iterables



# MySQL Database Basics