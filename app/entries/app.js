import React from 'react'
import ReactDOM from 'react-dom'

import $ from 'jquery';
window.$ = $;
import 'antd/dist/antd.css';
// import Popper from 'popper.js/dist/popper.js'

// import 'bootstrap/scss/bootstrap.scss';

// import 'bootstrap/dist/js/bootstrap.js';
// Popper.Defaults.modifiers.computeStyle.gpuAcceleration = !(window.devicePixelRatio < 1.5 && /Win/.test(navigator.platform));

// Import app styles
// require('./scss/style.scss');

// Import component
import Home from './../home/containers/home';

// $('#creatingCard')
// $(function () {
//   $('[data-toggle="popover"]').popover();
// })

ReactDOM.render(<Home />, document.getElementById('app'));
