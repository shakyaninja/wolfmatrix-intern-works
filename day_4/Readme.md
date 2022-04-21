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



## File Handling


## Session


## Cookies


## PHP Callback functions


## PHP Filters


## PHP JSON


## PHP Exceptions


## PHP OOP


## PHP Classes/Objects


## PHP Constructors


## PHP Destructors


## PHP Interfaces


## PHP Namespace


## PHP Iterables



# MySQL Database Basics