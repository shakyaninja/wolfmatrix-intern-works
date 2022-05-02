import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Invoices from './routes/invoices';
import Expense from './routes/expenses';
import 'antd/dist/antd.css';
import {
  BrowserRouter ,
  Routes,
  Route
} from 'react-router-dom';
import Invoice from './routes/invoice';


ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path='/'element={<App/>}>
      <Route path='invoices' element={<Invoices/>}>
        <Route
          index
          element={
            <main style={{ padding: "1rem" }}>
              <p>Select an invoice</p>
            </main>
          }
        />
        <Route path=':id' element={<Invoice/>}/>
      </Route>
      <Route path='expenses'element={<Expense/>}/>
    </Route>
    {/* Adding a No match route */}
    <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
  </Routes>
  </BrowserRouter>
  ,
  document.getElementById('root')
);
