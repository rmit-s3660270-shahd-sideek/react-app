import React from 'react'
import { Link } from 'gatsby'
import './header.css'
const Header = ({ siteTitle }) => (
  <div className="Header">
  <div className="Nav">
  <Link to="/"><img src={require('../images/logo-designcode.svg')}width="30"/></Link>
  <Link to="/buy">Showcase</Link>
  </div>
  </div>
)

export default Header
