import app from 'ampersand-app'
import icons from '../node_modules/font-awesome/css/font-awesome.css';
import styles from './styles/main.styl'
import Router from './router'

// add a favicon to images/
// require("file?name=favicon.ico!./images/favicon.ico")

//expose 'app' to browser console for debugging
// window.app = app;

app.extend({
  init () {
    this.router = new Router()
    this.router.history.start()
  }
});

app.init()
