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

Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.

### useState hook

The React useState Hook allows us to track state in a function component. State generally refers to data or properties that need to be tracking in an application.

```
import { useState } from "react";
```

We initialize our state by calling useState in our function component.

useState accepts an initial state and returns two values:
* The current state.
* A function that updates the state.

```
import { useState } from "react";

function FavoriteColor() {
  const [color, setColor] = useState("");
}
```

The ``useState`` Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!

We could create multiple state Hooks to track individual values.

### useEffect hook

The useEffect Hook allows you to perform side effects in your components.

Some examples of side effects are: 
* fetching data, 
* directly updating the DOM, and timers.

useEffect accepts two arguments. The second argument is optional.

``useEffect(<function>, <dependency>)``

Dependency can be made as:

1. No dependency passed:
```
useEffect(() => {
  //Runs on every render
});
```
2. An empty array:
```
useEffect(() => {
  //Runs only on the first render
}, []);
```
3. Props or state values:
```
useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state]);
```

Some effects require cleanup to reduce memory leaks.Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.
We do this by including a return function at the end of the useEffect Hook.

```
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
    setCount((count) => count + 1);
  }, 1000);

  return () => clearTimeout(timer)
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);
```
### useContext hook

React Context is a way to manage state globally. It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.

Problem with this is:

* State should be held by the highest parent component in the stack that requires access to the state.

* To illustrate, we have many nested components. The component at the top and bottom of the stack need access to the state.

* To do this without Context, we will need to pass the state as "props" through each nested component. This is called "prop drilling"

```
import { useState } from "react";
import ReactDOM from "react-dom/client";

function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
    </>
  );
}

function Component2({ user }) {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 user={user} />
    </>
  );
}

function Component3({ user }) {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 user={user} />
    </>
  );
}

function Component4({ user }) {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 user={user} />
    </>
  );
}

function Component5({ user }) {
  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Component1 />);
```

Therfore, we define a context at the parent component and then share that context without props drilling.

```
import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Component1 />);
```

### useCallback hook

The React ``useCallback`` Hook returns a memorized callback function.

Think of memorization as caching a value so that it does not need to be recalculated.

This allows us to isolate resource intensive functions so that they will not automatically run on every render.

The ``useCallback`` Hook only runs when one of its dependencies update.

This can improve performance.

``index.js``

```
import { useState, useCallback } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./Todos";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

``Todo.js``

```
import { memo } from "react";

const Todos = ({ todos, addTodo }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

export default memo(Todos);
```


### useMemo hook

The React ``useMemo`` Hook returns a memoized value.

Think of memoization as caching a value so that it does not need to be recalculated.

The ``useMemo`` Hook only runs when one of its dependencies update.

This can improve performance.

The ``useMemo`` and ``useCallback`` Hooks are similar. The main difference is that ``useMemo`` returns a memorized value and ``useCallback`` returns a memorized function.

The ``useMemo`` Hook can be used to keep expensive, resource intensive functions from needlessly running.

In this example, we have an expensive function that runs on every render.

When changing the count or adding a todo, you will notice a delay in execution.

```
import { useState, useMemo } from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

### useRef hook

The ``useRef`` Hook allows you to persist values between renders.

It can be used to store a mutable value that does not cause a re-render when updated.

It can be used to access a DOM element directly.

``useRef()`` only returns one item. It returns an Object called current.

```

```

When we initialize useRef we set the initial value: ``useRef(0)``.

It's like doing this: ``const count = {current: 0}``. We can access the count by using count.current.

### useReducer hook





