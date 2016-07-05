import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Hello, Mundo!</h1>
        <ul role='nav'>
          <li><NavLink to='/About'>About</NavLink></li>
          <li><NavLink to='/Repos'>Repos</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
