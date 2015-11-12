import React from 'react'
import NavHelper from '../components/nav-helper'
import NavBar from '../components/nav-bar'

export default React.createClass({

  displayName: 'Layout',

  render () {

    return (
      <NavHelper>
        <NavBar />
        <div className='container'>
          { this.props.children }
        </div>
      </NavHelper>
    )
  }
})
