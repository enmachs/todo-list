import React from 'react'
import './layout.sass'

class MyComponent extends React.Component {

  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className="audioplayer">
        <h1>Hi! I'm a React Component</h1>
      </div>
    )
  }
}

export default MyComponent
