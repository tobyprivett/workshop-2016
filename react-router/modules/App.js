import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Hello, Mundo!</h1>
        <ul role='nav'>
          <li><Link to='/About'>About</Link></li>
          <li><Link to='/Repos'>Repos</Link></li>
        </ul>
      </div>
    )
  }
})
