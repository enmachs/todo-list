import React from 'react';
import './styles/layout.sass'

const MenuLayout = (props) => (
  <div className="sidebar-layout container-fluid">
    { props.children }
  </div>
)

export default MenuLayout
