import React from 'react'
import navbarHelper from '../helpers/bootstrap-navbar'

export default React.createClass({

    displayName: 'NavBar',

    componentDidMount () {
      navbarHelper.init()
    },

    render () {
      return (
        <nav className="navbar">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="/"><i className='fa fa-html5'></i> StaticWeb</a>
            </div>
            <div className="collapse navbar-collapse" id="navbar">
              <ul className="nav navbar-nav">
                <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Fruits <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="/fruits/apples">Apples</a></li>
                    <li><a href="/fruits/oranges">Oranges</a></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Vegetables <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="/vegetables/yams">Yams</a></li>
                    <li><a href="/vegetables/eggplants">Eggplants</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )
    }
});
