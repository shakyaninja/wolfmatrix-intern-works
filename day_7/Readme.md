Day 7 (2079-01-13 || Tuesday) 
---

# React (JS Library)

React is a JavaScript library for building user interfaces. React is used to build single-page applications. React allows us to create reusable UI components.

* React creates a VIRTUAL DOM in memory.

* Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.

* React only changes what needs to be changed!

* React finds out what changes have been made, and changes only what needs to be changed.

## ES6 importance in react

### Arrow function

### Handling of this in Arrow function

* The handling of this is also different in arrow functions compared to regular functions.

* In short, with arrow functions there is no binding of this.

* In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever.

* With arrow functions, the this keyword always represents the object that defined the arrow function.

* Let us take a look at two examples to understand the difference.

* Both examples call a method twice, first when the page loads, and once again when the user clicks a button.

* The first example uses a regular function, and the second example uses an arrow function.

* The result shows that the first example returns two different objects (window and button), and the second example returns the Header object twice

First Example, With a regular function, ``this`` represents the object that called the function:

```
class Header {
  constructor() {
    this.color = "Red";
  }

//Regular function:
  changeColor = function() {
    document.getElementById("demo").innerHTML += this;
  }
}

const myheader = new Header();

//The window object calls the function:
window.addEventListener("load", myheader.changeColor);

//A button object calls the function:
document.getElementById("btn").addEventListener("click", myheader.changeColor);
```

Second example, With an arrow function, ``this`` represents the Header object no matter who called the function:

```
class Header {
  constructor() {
    this.color = "Red";
  }

//Arrow function:
  changeColor = () => {
    document.getElementById("demo").innerHTML += this;
  }
}

const myheader = new Header();


//The window object calls the function:
window.addEventListener("load", myheader.changeColor);

//A button object calls the function:
document.getElementById("btn").addEventListener("click", myheader.changeColor);
```

### Declaring variables

Before ES6 there was only one way of defining your variables: with the ``var`` keyword. If you did not define them, they would be assigned to the global object. Unless you were in strict mode, then you Wwould get an error if your variables were undefined.

Now, with ES6, there are three ways of defining your variables: ``var``, ``let``, and ``const``.

### Array methods

There are many JavaScript array methods.

One of the most useful in React is the .map() array method.

The .map() method allows you to run a function on each item in the array, returning a new array as the result.

In React, map() can be used to generate lists.

```
const myArray = ['apple', 'banana', 'orange'];

const myList = myArray.map((item) => <p>{item}</p>)
```

### Destructuring

To illustrate destructuring, we'll make a sandwich. Do you take everything out of the refrigerator to make your sandwich? No, you only take out the items you would like to use on your sandwich.

Destructuring is exactly the same. We may have an array or object that we are working with, but we only need some of the items contained in these.

Destructuring makes it easy to extract only what is needed.

```
const vehicles = ['mustang', 'f-150', 'expedition'];

const [car, truck, suv] = vehicles;
```

Note: Here, the order of variables denoted while destructuring from array is important. 

### Spreading

The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

```
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
```

Generally used in combination with desctructuring:

```
const numbers = [1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = numbers;
```

When spread is used to update the properties of objects then the matching parameter of object is replaced by the last object passed.

```
const myVehicle = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

const updateMyVehicle = {
  type: 'car',
  year: 2021, 
  color: 'yellow'
}

const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
```

### Modules

JavaScript modules allow you to break up your code into separate files.

This makes it easier to maintain the code-base.

ES Modules rely on the ``import`` and ``export`` statements.

* You can export a function or variable from any file.

Let us create a file named ``person.js``, and fill it with the things we want to export.

There are two types of exports: Named and Default.

#### Named Exports
You can create named exports two ways. In-line individually, or all at once at the bottom.

In-line individually:
``person.js``

```
export const name = "Jesse"
export const age = 40
```

All at once at the bottom:
``person.js``

```
const name = "Jesse"
const age = 40

export { name, age }
```

#### Default Exports

Let us create another file, named ``message.js``, and use it for demonstrating default export.

You can only have one default export in a file.

```
const message = () => {
  const name = "Jesse";
  const age = 40;
  return name + ' is ' + age + 'years old.';
};

export default message;
```

You can import modules into a file in two ways, based on if they are named exports or default exports.

``Named exports`` must be ``destructured`` using curly braces. ``Default exports`` do not.

Importing Named exported:

```
import {Component} from 'component';
```

Importing Default exported:

```
import Component from 'component';
```

### Ternary Operator

The ternary operator is a simplified conditional operator like if / else.

Syntax: 

``condition ? <expression if true> : <expression if false>``

```
authenticated ? renderApp() : renderLogin();
```

## React JSX

* JSX stands for JavaScript XML.
* JSX allows us to write HTML in React.
* JSX makes it easier to write and add HTML in React.

* The HTML code must be wrapped in ONE top level element. So, if you like to write two paragraphs, you must put them inside a parent element, like a ``div`` element.

* Attribute ``class`` = ``className``

## React component

Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.

Components come in two types, Class components and Function components


### React Class Component

A class component must include the ``extends React.Component`` statement. This statement creates an inheritance to ``React.Component``, and gives your component access to ``React.Component``'s functions.

The component also requires a ``render()`` method, this method returns HTML.

```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

If there is a ``constructor()`` function in your component, this function will be called when the component gets initiated.

The constructor function is where you initiate the component's properties.

In React, component properties should be kept in an object called ``state``.

The constructor function is also where you honor the inheritance of the parent component by including the ``super()`` statement, which executes the parent component's constructor function, and your component has access to all the functions of the parent component (``React.Component``).

```
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color: "red"};
  }
  render() {
    return <h2>I am a {this.state.color} Car!</h2>;
  }
}
```

Incase of props in the component , ``props`` should always be passed to ``super()`` inside ``constructor()`` function of class component.

### React Functional Component

A Function component also returns HTML, and behaves much the same way as a Class component, but Function components can be written using much less code, are easier to understand.

```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

## React Event Handling

React events are written in camelCase syntax:

``onClick`` instead of ``onclick``.

React event handlers are written inside curly braces:

``onClick={shoot}``  instead of ``onClick="shoot()"``

In React, You must call ``preventDefault`` explicitly. 

```
function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
```

Where ``e`` is synthetic event.

Here, in React the events must be `bind` as:

```
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
```

Without binding we can also do it like this:

```
class LoggingButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}
```
