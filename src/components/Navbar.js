import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => (
  <div>
    <ul className="nav navbar-nav">
      <li><NavLink to="/topics/all" activeClassName='active'>all</NavLink></li>
      <li><NavLink to="/topics/ask" activeClassName='active'>ask</NavLink></li>
    </ul>
  </div>
)

export default Navbar
