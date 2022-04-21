Day 4 (2079-01-08 || Thursday) 
---
# Core PHP (Hypertext Preprocessor)

## Variable Scope

PHP has three different variable scopes:

### Local scope

```
<?php
function myTest() {
  $x = 5; // local scope
  echo "<p>Variable x inside function is: $x</p>";
}
myTest();

// using x outside the function will generate an error
echo "<p>Variable x outside function is: $x</p>";
?>
```

The global keyword is used to access a global variable from within a function.

To do this, use the global keyword before the variables (inside the function):

```
<?php
$x = 5;
$y = 10;

function myTest() {
  global $x, $y;
  $y = $x + $y;
}

myTest();
echo $y; // outputs 15
?>
```

### Global scope

```
<?php
$x = 5; // global scope

function myTest() {
  // using x inside this function will generate an error
  echo "<p>Variable x inside function is: $x</p>";
}
myTest();

echo "<p>Variable x outside function is: $x</p>";
?>
```

PHP also stores all global variables in an array called ``$GLOBALS[index]``. The index holds the name of the variable. This array is also accessible from within functions and can be used to update global variables directly.

### Static scope

Normally, when a function is completed/executed, all of its variables are deleted. However, sometimes we want a local variable NOT to be deleted. We need it for a further job.

To do this, use the ``static`` keyword when you first declare the variable:

```
<?php
function myTest() {
  static $x = 0;
  echo $x;
  $x++;
}

myTest();   //0
myTest();   //1
myTest();   //2
?>
```

## RegEx

A regular expression is a sequence of characters that forms a search pattern. When you search for data in a text, you can use this search pattern to describe what you are searching for.

A regular expression can be a single character, or a more complicated pattern.

Regular expressions can be used to perform all types of text search and text replace operations.

In PHP, regular expressions are **strings** composed of **delimiters**, a **pattern** and **optional modifiers**.

``$exp = "/luja/i";``

Here, 
* ``/`` is a delimeter
* ``luja`` is a pattern
* ``i`` is a modifier that makes search **case-insensitive**

Regular Expression Functions
PHP provides a variety of functions that allow you to use regular expressions. The ``preg_match()``, ``preg_match_all()`` and ``preg_replace()`` functions are some of the most commonly used ones:

* ``preg_match()`` - Returns 1 if the pattern was found in the string and 0 if not

```
<?php
$str = "Visit W3Schools";
$pattern = "/w3schools/i";
echo preg_match($pattern, $str); // Outputs 1
?>
```

* ``preg_match_all()`` - Returns the number of times the pattern was found in the string ,which may also be 0

```
<?php
$str = "The rain in SPAIN falls mainly on the plains.";
$pattern = "/ain/i";
echo preg_match_all($pattern, $str); // Outputs 4
?>
```

* ``preg_replace()`` - Returns a new string where matched patterns have been replaced with another string

```
<?php
$str = "Visit Microsoft!";
$pattern = "/microsoft/i";
echo preg_replace($pattern, "W3Schools", $str); // Outputs "Visit W3Schools!"
?>
```

### Regular Expression Modifiers

Modifiers can change how a search is performed.

* ``i`` - Performs a case-insensitive search
* ``m`` - Performs a multline search
* ``u`` - Enables correct matching of UTF-8 encoded patterns

### Regular Expression Patterns
Brackets are used to find a range of characters:

* [abc] - Find one character from the options between the brackets
* [^abc] - Find any character NOT between the brackets
* [0-9] - Find one character from the range 0 to 9

### Metacharacters

Metacharacters are characters with a special meaning:

* ``|`` - Find a match for any one of the patterns separated by | as in: cat|dog|fish
* ``.`` - Find just one instance of any character
* ``^`` - Finds a match as the beginning of a string as in: ^Hello
* ``$`` - Finds a match at the end of the string as in: World$
* ``\d`` - Find a digit
* ``\s`` - Find a whitespace character
* ``\b`` - Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b
* ``\uxxxx`` - Find the Unicode character specified by the hexadecimal number xxxx

### Quantifiers

Quantifiers define quantities:

* ``n+`` - Matches any string that contains at least one n
* ``n*`` - Matches any string that contains zero or more occurrences of n
* ``n?`` - Matches any string that contains zero or one occurrences of n
* ``n{x}`` - Matches any string that contains a sequence of X n's
* ``n{x,y}`` - Matches any string that contains a sequence of X to Y n's
* ``n{x,}`` - Matches any string that contains a sequence of at least X n's

### Grouping
We can use parentheses ``( )`` to apply quantifiers to entire patterns. They also can be used to select parts of the pattern to be used as a match.

```
<?php
$str = "Apples and bananas.";
$pattern = "/ba(na){2}/i";
echo preg_match($pattern, $str); // Outputs 1
?>
```

## Forms

GET vs. POST
---
Both GET and POST create an array (e.g. array( key1 => value1, key2 => value2, key3 => value3, ...)). This array holds key/value pairs, where keys are the names of the form controls and values are the input data from the user.

Both GET and POST are treated as $_GET and $_POST. These are superglobals, which means that they are always accessible, regardless of scope - and you can access them from any function, class or file without having to do anything special.

``$_GET`` is an array of variables passed to the current script via the URL parameters.

``$_POST`` is an array of variables passed to the current script via the HTTP POST method.

* ``$_SERVER["PHP_SELF"]`` is a super global variable that returns the filename of the currently executing script.

```
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
```
So, the ``$_SERVER["PHP_SELF"]`` sends the submitted form data to the page itself, instead of jumping to a different page. This way, the user will get error messages on the same page as the form.

* The ``htmlspecialchars()`` function converts special characters to HTML entities. This means that it will replace HTML characters like ``<`` and ``>``with ``&lt;`` and ``&gt;``. This prevents attackers from exploiting the code by injecting HTML or Javascript code (Cross-site Scripting attacks) in forms.

__**NOTE**__:

* The ``$_SERVER["PHP_SELF"]`` variable can be used by hackers!

If PHP_SELF is used in your page then a user can enter a slash (/) and then some Cross Site Scripting (XSS) commands to execute.

Cross-site scripting (XSS) is a type of computer security vulnerability typically found in Web applications. XSS enables attackers to inject client-side script into Web pages viewed by other users. 

* ``$_SERVER["PHP_SELF"]`` exploits can be avoided by using the ``htmlspecialchars()`` function

### Form Validation

First of all data from the form fields can be validated and preprocessed by trimming stripslashes and htmlspecialchars as:

```
function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
```
Then only the POST request values are assigned to variables as :

```
$name = $email = $gender = $comment = $website = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = test_input($_POST["name"]);
  $email = test_input($_POST["email"]);
  $website = test_input($_POST["website"]);
  $comment = test_input($_POST["comment"]);
  $gender = test_input($_POST["gender"]);
}
```

* check for empty variable by ``empty()``.
* check for unset variable by ``isset()``.

Validate Email:

```
$email = test_input($_POST["email"]);
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  $emailErr = "Invalid email format";
}
```

Validate URL:

```
$website = test_input($_POST["website"]);
if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i",$website)) {
  $websiteErr = "Invalid URL";
}
```

## File Handling




## Date/Time




## Session



## Cookies


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