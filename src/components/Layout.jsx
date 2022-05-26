import { Outlet, Link } from "react-router-dom";
// import styled from "@emotion/styled";
// import { CssBaseline } from '@material-ui/core';
import '../App.css';

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sr_code">SR Code</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;
