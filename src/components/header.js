import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const MainNav = [
  {
    name: 'Home',
    link: '/'
  }, {
    name: 'Work',
    link: '/work'
  },{
    name: 'Contact Me',
    link: '/contact'
  },
]

const Header = ({ siteTitle }) => (
  <header id="header" className="header">
    <div className="header_logo">
      <a href="/"><img src='/globals/rb_logo_dark.png' alt="Ryan Bott" /></a>
    </div>
	</header>

)

export default Header
