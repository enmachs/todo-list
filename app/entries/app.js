import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/scss/bootstrap.scss';

// Import app styles
// require('./scss/style.scss');

// Import component
import Home from './../home/containers/home';

ReactDOM.render(<Home />, document.getElementById('app'));
