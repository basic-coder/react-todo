import React from 'react';
import PropTypes from 'prop-types';
import {
  Link
} from "react-router-dom";
import '../index.css'

export default function Header(props) {
    return (
        <>
        <nav className="header">
        <div className="header-container">
          <Link className="brand" to="/">
           {props.title}
          </Link>
            <ul>
              <li>
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
             {/* <li>
                <Link className="nav-link" to="/About">
                 About
                </Link>
              </li> */}
            </ul>
        </div>
      </nav>
            
        </>
    );
}

Header.propTypes = {
    title: PropTypes.string
}
