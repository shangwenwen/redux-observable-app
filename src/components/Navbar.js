import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const Navbar = () => (
  <div>
    <ul className="nav navbar-nav">
      <li><NavLink to="/all" activeClassName='active'>all</NavLink></li>
      <li><NavLink to="/ask" activeClassName='active'>ask</NavLink></li>
    </ul>
  </div>
)

Navbar.propTypes = {
  location: PropTypes.any
}

export default Navbar
