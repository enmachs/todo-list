import React from 'react';

const Logo = (props) => (
  <div className="logo">
    <img 
      width={props.size}
      src={props.url}
      // "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
    />
  </div>
)

export default Logo;
