//./node_modules/.bin/eslint
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { HashRouter as Router} from 'react-router-dom';
import { App } from "./app.js"
import './index.css';

ReactDOM.render((<Router>
  <App /></Router>), document.getElementById('root'));

registerServiceWorker();


