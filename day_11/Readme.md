Day 11 (2079-01-18|| Monday) 
---

# React Router 

For Installation of react router dom:

``npm i -D react-router-dom``

Folder structure:

```
-src
    -routes
        * expenses.jsx
        * invoices.jsx
    * App.js
    * index.js
* package.json
```
``BrowserRouter`` must wrap around the whole app to get the Url from browser and then redirect to that url path and render the specific component.

inside the ``index.js`` we must specify as:

```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Invoice from './routes/invoices';
import Expense from './routes/expenses';
import {
  BrowserRouter ,
  Routes,
  Route
} from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path='/'element={<App/>}/>
    <Route path='/invoices' element={<Invoice/>}/>
    <Route path='/expenses'element={<Expense/>}/>
  </Routes>
  </BrowserRouter>
  ,
  document.getElementById('root')
);
```


``Link`` can be specified as: ``<Link to="/invoices">Invoices</Link>``

inside ``App.js``:

```
import React, { Component } from 'react';
import './App.css';
import {Link , Outlet} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Bookkeeper</h1>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Link to="/invoices">Invoices</Link> |{" "}
          <Link to="/expenses">Expenses</Link>
        </nav>
        <Outlet/>
      </div>
    );
  }
}

export default App;
```

* ``Outlet`` in the parent route (App.js) persists while the ``<Outlet>`` swaps between the two child routes (``<Invoices>`` and ``<Expenses>``)!


inside ``invoices.jsx``:

```
import React from 'react'

function Invoice() {
  return (
    <div>invoices</div>
  )
}

export default Invoice;
```

inside ``expenses.jsx``:

```
import React from 'react'

function Expense() {
  return (
    <div>expenses</div>
  )
}

export default Expense;
```

Note:
Inside the router page we must nest the route with nesting element inside ``<Route>`` ``</Route>`` element
```
    <Route path='/'element={<App/>}>
      <Route path='/invoices' element={<Invoice/>}/>
      <Route path='/expenses'element={<Expense/>}/>
    </Route>
```

The nested route to individual invoice:

``
let params = useParams();
``
and 
``
let invoice = getInvoice(Number(params.id));
``

then, rendering the invoice information detail as :

```
 <main style={{ padding: "1rem" }}>
    <h2>Total Due: {invoice.amount}</h2>
    <p>
        {invoice.name}: {invoice.number}
    </p>
    <p>Due Date: {invoice.due}</p>
    <p>
        <button
        onClick={() => {
            deleteInvoice(invoice.number);
            navigate("/invoices" + location.search);
        }}
        >
        Delete
        </button>
    </p>
</main>
```

use of ``useSearchParams`` in invoices page.
They can be used as:

```
let [searchParams, setSearchParams] = useSearchParams();

 //add input for search params

 <input
    value={searchParams.get("filter") || ""}
    onChange={(event) => {
    let filter = event.target.value;
    if (filter) {
        setSearchParams({ filter });
    } else {
        setSearchParams({});
    }
    }}
/>

//then filtering out the search terms:

invoices
.filter((invoice) => {
    let filter = searchParams.get("filter");
    if (!filter) return true;
    let name = invoice.name.toLowerCase();
    return name.startsWith(filter.toLowerCase());
})
.map((invoice) => (
    <QueryNavLink
    style={({ isActive }) => {
    return {
        display: "block",
        margin: "1rem 0",
        color: isActive ? "red" : "",
    };
    }}
    to={`/invoices/${invoice.number}`}
    key={invoice.number}
>
    {invoice.name}
</QueryNavLink>
))
```



# React Redux

Redux is a pattern and library for managing and updating application state, using events called "actions". It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion.

The patterns and tools provided by Redux make it easier to understand when, where, why, and how the state in your application is being updated, and how your application logic will behave when those changes occur. Redux guides you towards writing code that is predictable and testable, which helps give you confidence that your application will work as expected.

Redux helps you deal with shared state management, but like any tool, it has tradeoffs. There are more concepts to learn, and more code to write. It also adds some indirection to your code, and asks you to follow certain restrictions. It's a trade-off between short term and long term productivity.

Redux is more useful when:

* You have large amounts of application state that are needed in many places in the app
* The app state is updated frequently over time
* The logic to update that state may be complex
* The app has a medium or large-sized codebase, and might be worked on by many people

The Redux Store
The center of every Redux application is the store. A "store" is a container that holds your application's global state.

A store is a JavaScript object with a few special functions and abilities that make it different than a plain global object:

* You must never directly modify or change the state that is kept inside the Redux store
* Instead, the only way to cause an update to the state is to create a plain action object that describes "something that happened in the application", and then dispatch the action to the store to tell it what happened.
* When an action is dispatched, the store runs the root reducer function, and lets it calculate the new state based on the old state and the action
* Finally, the store notifies subscribers that the state has been updated so the UI can be updated with the new data.

State, Actions, and Reducers

![Data flow] (https://d33wubrfki0l68.cloudfront.net/01cc198232551a7e180f4e9e327b5ab22d9d14e7/b33f4/assets/images/reduxdataflowdiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif "Data flow in react redux")