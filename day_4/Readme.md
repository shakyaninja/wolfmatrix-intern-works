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

## Date/Time

The PHP ``date()`` function is used to format a date and/or a time.

syntax : ``date(format,timestamp)``

where: 

* **format** - Required. Specifies the format of the timestamp
* **timestamp** - Optional. Specifies a timestamp. Default is the current date and time

* A timestamp is a sequence of characters, denoting the date and/or time at which a certain event occurred.

The required format parameter of the ``date()`` function specifies how to format the date (or time).

Here are some characters that are commonly used for dates:

* ``d`` - Represents the day of the month (01 to 31)
* ``m`` - Represents a month (01 to 12)
* ``Y`` - Represents a year (in four digits)
* ``l`` (lowercase 'L') - Represents the day of the week

Other characters, like ``/``, ``.``, or ``-`` can also be inserted between the characters to add additional formatting.

```
<?php
echo "Today is " . date("Y/m/d") . "<br>"; //Today is 2022/04/21
echo "Today is " . date("Y.m.d") . "<br>"; // Today is 2022.04.21
echo "Today is " . date("Y-m-d") . "<br>"; // Today is 2022-04-21
echo "Today is " . date("l"); // Today is Thursday
?>
```

Here are some characters that are commonly used for times:

* ``H`` - 24-hour format of an hour (00 to 23)
* ``h`` - 12-hour format of an hour with leading zeros (01 to 12)
* ``i`` - Minutes with leading zeros (00 to 59)
* ``s`` - Seconds with leading zeros (00 to 59)
* ``a`` - Lowercase Ante meridiem and Post meridiem (am or pm)

```
<?php
echo "The time is " . date("h:i:sa");
?>
```

For time zone:

after setting default time zone.
```
<?php
date_default_timezone_set("America/New_York");
echo "The time is " . date("h:i:sa");
?>
```

Creating date:

The PHP ``mktime()`` function returns the Unix timestamp for a date. The Unix timestamp contains the number of seconds between the ``Unix Epoch (January 1 1970 00:00:00 GMT)`` and the time specified.

syntax : ``mktime(hour, minute, second, month, day, year)``

example:
```
<?php
$d=mktime(11, 14, 54, 8, 12, 2014);
echo "Created date is " . date("Y-m-d h:i:sa", $d);
?>
```

Create a Date From a String :

The PHP ``strtotime()`` function is used to convert a human readable date string into a Unix timestamp (the number of seconds since ``January 1 1970 00:00:00 GMT``).

syntax : ``strtotime(time, now)``

```
<?php
$d=strtotime("tomorrow");
echo date("Y-m-d h:i:sa", $d) . "<br>"; //2022-04-22 12:00:00am

$d=strtotime("next Saturday");
echo date("Y-m-d h:i:sa", $d) . "<br>"; //2022-04-23 12:00:00am

$d=strtotime("+3 Months");
echo date("Y-m-d h:i:sa", $d) . "<br>"; //2022-07-21 09:12:40am
?>
```

## File Handling

File handling can be done by the read and write operations in file.

``readfile("webdictionary.txt")``

Here, ``readfile()`` is useful for opening the file and reading its contents.

Also, we can use ``fopen()`` which will give more options for handling a file.

Files can be opened in following modes:

* r - Open a file for read only. File pointer starts at the beginning of the file
* w - Open a file for write only. Erases the contents of the file or creates a new file if it doesn't exist. File pointer starts at the beginning of the file
* a - Open a file for write only. The existing data in file is preserved. File pointer starts at the end of the file. Creates a new file if the file doesn't exist
* x - Creates a new file for write only. Returns FALSE and an error if file already exists
* r+ - Open a file for read/write. File pointer starts at the beginning of the file
* w+ - Open a file for read/write. Erases the contents of the file or creates a new file if it doesn't exist. File pointer starts at the beginning of the file
* a+ - Open a file for read/write. The existing data in file is preserved. File pointer starts at the end of the file. Creates a new file if the file doesn't exist
* x+ - Creates a new file for read/write. Returns FALSE and an error if file already exists

```
<?php
$myfile = fopen("webdictionary.txt", "r") or die("Unable to open file!");
echo fread($myfile,filesize("webdictionary.txt"));
fclose($myfile);
?>
```

* ``fgets()`` - used to read a single line from a file.
* ``feof()`` - checs if the "end-of-file"(EOF) has been reached. (used for looping through data of unknown length)

```
while(!feof($myfile)) {
  echo fgets($myfile) . "<br>";
}
```

* ``fgetc()`` - used for reading a single character from a file.

```
while(!feof($myfile)) {
  echo fgetc($myfile);
}
```

Creation of file:

The ``fopen()`` function is also used to create a file. Maybe a little confusing, but in PHP, a file is created using the same function used to open files.
Here, it will create a new file called "testfile.txt".

``$myfile = fopen("testfile.txt", "w")``

Writing a file:

``fwrite()`` is the function used to write a file with two parameters:
1. Name of the file to write to 
2. String to be written

```
<?php
$myfile = fopen("newfile.txt", "w") or die("Unable to open file!");
$txt = "John Doe\n";
fwrite($myfile, $txt);
$txt = "Jane Doe\n";
fwrite($myfile, $txt);
fclose($myfile);
?>
```

* Overwriting the file is don by opening the file in ``"w"`` write mode from ``fopen()``.

Uploading file with PHP in server:

* With PHP, it is easy to upload files to the server.

However, **with ease comes danger, so always be careful when allowing file uploads!**

* Configure The "php.ini" File:

1. First, ensure that PHP is configured to allow file uploads.
2. In your "php.ini" file, search for the file_uploads directive, and set it to On as: 
``file_uploads = On``

Some rules to follow for the HTML form above:

* Make sure that the form uses method="post"
* The form also needs the following attribute: ``enctype="multipart/form-data"``. ( It specifies which content-type to use when submitting the form )

Then, Create The Upload File PHP Script
The "upload.php" file contains the code for uploading a file:
```
<?php
$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
  $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
  if($check !== false) {
    echo "File is an image - " . $check["mime"] . ".";
    $uploadOk = 1;
  } else {
    echo "File is not an image.";
    $uploadOk = 0;
  }
}
?>
```

Here, following thing are:
* ``$target_dir = "uploads/"`` - specifies the directory where the file is going to be placed
* ``$target_file`` specifies the path of the file to be uploaded
* ``$uploadOk=1`` is not used yet (will be used later)
* ``$imageFileType`` holds the file extension of the file (in lower case)
* Next, check if the image file is an actual image or a fake image

To check if the file already exists we can do it by:

``file_exists(__targetedFile__)`` function checks if there is already file with targeted name or not. Where ``__targetedFile__`` is the full path of image from server root to filename. 

```
// Check if file already exists
if (file_exists($target_file)) {
  echo "Sorry, file already exists.";
  $uploadOk = 0;
}
```

To Limit the uploading file size we can do it by:

``$_FILES["__finename__"][size]`` contains the file size .

```
// Check file size
if ($_FILES["fileToUpload"]["size"] > 500000) {
  echo "Sorry, your file is too large.";
  $uploadOk = 0;
}
```

To Limit the upload file types to certain extensions only:

Also we can define array of allowed file types as:

```
// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
  echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
  $uploadOk = 0;
}
```

``$ALLOWED_FILES = array('jpg','png','gif'...)``

then, check if the extension of uploaded file is in array or not.

Complete script for the proper upload of file is:

```
<?php
$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
  $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
  if($check !== false) {
    echo "File is an image - " . $check["mime"] . ".";
    $uploadOk = 1;
  } else {
    echo "File is not an image.";
    $uploadOk = 0;
  }
}

// Check if file already exists
if (file_exists($target_file)) {
  echo "Sorry, file already exists.";
  $uploadOk = 0;
}

// Check file size
if ($_FILES["fileToUpload"]["size"] > 500000) {
  echo "Sorry, your file is too large.";
  $uploadOk = 0;
}

// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
  echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
  $uploadOk = 0;
}

// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
  echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
  if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
    echo "The file ". htmlspecialchars( basename( $_FILES["fileToUpload"]["name"])). " has been uploaded.";
  } else {
    echo "Sorry, there was an error uploading your file.";
  }
}
?>
```