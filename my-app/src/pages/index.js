import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Header from '../components/header'

const IndexPage = () => (
  <div>
    <Header/>
    <div className="Hero">
      <div className="HeroGroup">
    <h1>FEED THE CONTENT BEAST</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    </div>
    </div>
  </div>
)

export default IndexPage
