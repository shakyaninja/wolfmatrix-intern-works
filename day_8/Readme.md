Day 8 (2079-01-14 || Wednesday) 
---

# React (JS Library)

## React state and props

* Props are arguments passed into React components.

* Props are passed to components via HTML attributes.

* ``props`` stands for properties.

React Props are like function arguments in JavaScript and attributes in HTML.

To send props into a component, use the same syntax as HTML attributes:

```
const myElement = <Car brand="Ford" />;
```
similar to:
```
function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}
```

React Class components have a built-in state object.

You might have noticed that we used state earlier in the component constructor section.

The state object is where you store property values that belongs to the component.

When the state object changes, the component re-renders.

state can be defined as:

```
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  render() {
    return (
      <div>
        <h1>My Car</h1>
      </div>
    );
  }
}
```
To change a value in the state object, use the ``this.setState()`` method.

When a value in the state object changes, the component will re-render, meaning that the output will change according to the new value(s).

```
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  changeColor = () => {
    this.setState({color: "blue"});
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}.
        </p>
        <button
          type="button"
          onClick={this.changeColor}
        >Change color</button>
      </div>
    );
  }
}
```

## React Component Lifecycle

Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.

The three phases are: 
1. Mounting 
2. Updating
3. Unmounting

* Mounting means putting elements into the DOM.

React has four built-in methods that gets called, in this **order**, when mounting a component:

1. ``constructor()``
2. ``getDerivedStateFromProps()``
3. ``render()``
4. ``componentDidMount()``

The ``render()`` method is required and will always be called, the others are optional and will be called if you define them.

The ``constructor()`` method is called before anything else, when the component is initiated, and it is the natural place to set up the initial state and other initial values.

The ``constructor()`` method is called with the props, as arguments, and you should always start by calling the super(props) before anything else, this will initiate the parent's constructor method and allows the component to inherit methods from its parent (React.Component).

The next phase in the lifecycle is when a component is updated.

A component is updated whenever there is a change in the component's state or props.

React has five built-in methods that gets called, in this order, when a component is updated:

* ``getDerivedStateFromProps()``
* ``shouldComponentUpdate()``
* ``render()``
* ``getSnapshotBeforeUpdate()``
* ``componentDidUpdate()``

The ``render()`` method is required and will always be called, the others are optional and will be called if you define them.

## React hooks





