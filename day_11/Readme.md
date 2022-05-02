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