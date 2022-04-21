Day 3 (2079-01-07 || Wednesday) 
---
# Core PHP (Hypertext Preprocessor)

## Intro
* PHP is an acronym for "PHP: Hypertext Preprocessor"
* PHP is a widely-used, open source scripting language
* PHP scripts are executed on the server
* PHP is free to download and use
* PHP can generate dynamic page content
* PHP can create, open, read, write, delete, and close files on the server
* PHP can collect form data
* PHP can send and receive cookies
* PHP can add, delete, modify data in your database
* PHP can be used to control user-access
* PHP can encrypt data

## Installation

## Syntax

``<?php ...  ?>``

## Variables

Loosely Declared variables type
declared as:
``$...``
eg. ``$name``

```
$txt = "Hello world!";
$x = 5;
$y = 10.5;
```

* all variable names are case-sensitive!

## Data Types

* String
* Integer
* Float (floating point numbers - also called double)
* Boolean
* Array
* Object
* NULL ``null``
* Resource

The special resource type is not an actual data type. It is the storing of a reference to functions and resources external to PHP.
A common example of using the resource data type is a database call.

## Constants

Declared as :
``$<FULL_CAPITALIZED>`` 
eg. ``$COOKIE``

## Operators

* Arithmetic operators

(+ , - , * , / , % , ** )

* Assignment operators

(x=y , x+=y , x-=y , x*=y , x/=y , x%=y )

* Comparison operators

(== , === [ Identical ] , != , <> [Not equal to] , !== [Not Identical] , > , < , >= , <= , $x <=> $y[(Spaceship) Returns an integer less than, equal to, or greater than zero, depending on if $x is less than, equal to, or greater than $y. Introduced in PHP 7.])

* Increment/Decrement operators

(++$x , $x++ , --$x , $x--)

* Logical operators

(and , or , xor , && , || , !)

* String operators

(. , .= [Concatenation assignment (appends second operand to first one) ])

* Array operators

    * Used to compare arrays

    (+ [ Union ] , == [ Equality ] , === [ Identity ] , != [ Inequality ] , <> [ Inequality ] , !== [ Non-identity ])

* Conditional assignment operators

( $x = expression?val1:val2 [ Ternary ] , $x = expr1??expr2 [ Null coalescing ( $x is expr1 if expr1 exists and not null else is expr2 ) ])


## Loops

In PHP, we have the following loop types:

* ``while`` - loops through a block of code as long as the specified condition is true

```
<?php
$x = 1;

while($x <= 5) {
  echo "The number is: $x <br>";
  $x++;
}
?>
```

* ``do...while`` - loops through a block of code once, and then repeats the loop as long as the specified condition is true

```
<?php
$x = 1;

do {
  echo "The number is: $x <br>";
  $x++;
} while ($x <= 5);
?>
```

* ``for - loops`` - through a block of code a specified number of times

```
<?php
for ($x = 0; $x <= 10; $x++) {
  echo "The number is: $x <br>";
}
?>
```

* ``foreach`` - loops through a block of code for each element in an array

```
<?php
$colors = array("red", "green", "blue", "yellow");

foreach ($colors as $value) {
  echo "$value <br>";
}
?>
```

## Functions

* PHP has more than 1000 built-in functions

A user-defined function declaration starts with the word function:

```
<?php
function writeMsg() {
  echo "Hello world!";
}

writeMsg(); // call the function
?>
```

To specify strict we need to set declare(strict_types=1);. This must be on the very first line of the PHP file.

```
<?php declare(strict_types=1); // strict requirement

function addNumbers(int $a, int $b) {
  return $a + $b;
}
echo addNumbers(5, "5 days");
// since strict is enabled and "5 days" is not an integer, an error will be thrown
?>
```

Default arguements:

```
<?php declare(strict_types=1); // strict requirement
function setHeight(int $minheight = 50) {
  echo "The height is : $minheight <br>";
}

setHeight(350);
setHeight(); // will use the default value of 50
setHeight(135);
setHeight(80);
?>
```

Return Statement

Type declaration can be done in return statement as:

``return (int)($a + $b);``

### Passing Arguments by Reference
In PHP, arguments are usually passed by value, which means that a copy of the value is used in the function and the variable that was passed into the function cannot be changed.

When a function argument is passed by reference, changes to the argument also change the variable that was passed in. To turn a function argument into a reference, the & operator is used:

```
<?php
function add_five(&$value) {
  $value += 5;
}

$num = 2;
add_five($num);
echo $num;
?>
```

## Arrays

An array is a special variable, which can hold more than one value at a time.
* In PHP, the array() function is used to create an array:

``$cars = array("Volvo", "BMW", "Toyota");``
* for counting ``echo count($cars)``

Array in PHP are of types:

* Indexed Array

The index can be assigned automatically (index always starts at 0), like this:

``$cars = array("Volvo", "BMW", "Toyota");``

or the index can be assigned manually:

```
$cars[0] = "Volvo";
$cars[1] = "BMW";
$cars[2] = "Toyota";
```

* Associative Array

Associative arrays are arrays that use named keys that you assign to them.

There are two ways to create an associative array: 

``$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");``

or:

```
$age['Peter'] = "35";
$age['Ben'] = "37";
$age['Joe'] = "43";
```

* ``foreach`` is mostly use for this array type.

* Multidimensional Array

PHP - Multidimensional Arrays
A multidimensional array is an array containing one or more arrays.

PHP supports multidimensional arrays that are two, three, four, five, or more levels deep. 

eg.

```
$cars = array (
  array("Volvo",22,18),
  array("BMW",15,13),
  array("Saab",5,2),
  array("Land Rover",17,15)
);
```

## Superglobals

Superglobals were introduced in PHP 4.1.0, and are built-in variables that are always available in all scopes.

Some predefined variables in PHP are "superglobals", which means that they are always accessible, regardless of scope - and you can access them from any function, class or file without having to do anything special.

The PHP superglobal variables are:

* $GLOBALS
* $_SERVER
* $_REQUEST
* $_POST
* $_GET
* $_FILES
* $_ENV
* $_COOKIE
* $_SESSION

