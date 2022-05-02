import React from 'react'
import {getInvoices} from '../data.js';
import {NavLink, useLocation ,Outlet ,useSearchParams} from 'react-router-dom';
import {Search} from 'antd';
function QueryNavLink({ to, ...props }) {
    let location = useLocation();
    return <NavLink to={to + location.search} {...props} />;
  }

function Invoices() {

    let invoices = getInvoices();
    let [searchParams, setSearchParams] = useSearchParams();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        <input
          value={searchParams.get("filter") || ""}
          placeholder={'input search term'}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />

        {invoices
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
        ))}
      </nav>
      <Outlet />
    </div>
  )
}

export default Invoices;