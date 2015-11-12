import app from 'ampersand-app'
import React from 'react'
import Router from 'ampersand-router'
import Layout from './pages/layout'
import MessagePage from './pages/message'
import HomePage from './pages/home'
import ApplesPage from './pages/apples'
import OrangesPage from './pages/oranges'
import YamsPage from './pages/yams'
import EggplantsPage from './pages/eggplants'

export default Router.extend({

  renderPage(page, opts = {layout: true}) {
    if(opts.layout) {
      page = (
        <Layout>
        {page}
        </Layout>
      );
    }
    React.render(page, document.body)
  },

  routes: {
    '': 'home',
    'home': 'home',
    'fruits/apples': 'apples',
    'fruits/oranges': 'oranges',
    'vegetables/yams': 'yams',
    'vegetables/eggplants': 'eggplants',
  },

  home () {
    this.renderPage(<HomePage />)
  },

  apples () {
    this.renderPage(<ApplesPage />)
  },

  oranges () {
    this.renderPage(<OrangesPage />)
  },

  yams () {
    this.renderPage(<YamsPage />)
  },

  eggplants () {
    this.renderPage(<EggplantsPage />)
  },

  fourOhFour () {
    this.renderPage(<MessagePage title='Page not found' />)
  }

});
