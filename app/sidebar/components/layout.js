import React from 'react';
import './styles/layout.sass'

const SidebarLayout = (props) => (
  <div className="col-lg-1">
    <div className="sidebar-layout container-fluid">
      { props.children }
    </div>
  </div>
)

export default SidebarLayout
