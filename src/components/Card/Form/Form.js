import React, { PureComponent } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import './Form.scss'
import { GithubPicker, TwitterPicker, BlockPicker } from 'react-color';
// import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';


class CardForm extends PureComponent {

  state = {
    title: '',
    color: '#000000',
    displayColorPicker: false
  }

  handleSubmit = (e) => {
    let newCard = {
      // css: `linear-gradient(to top, #eee 0%, ${this.state.color} 100%)`,
      name: this.state.title
    }
    this.props.handleNewCard(newCard)
    this.props.togglePopover()
    this.handleClearInput()
    e.preventDefault();
  }

  handleTogglePicker = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClosePicker = () => {
    this.setState({ displayColorPicker: false })
  };

  handleClearInput = () => {
    this.setState({
      // color: '#000000',
      title: ''
    })
  }

  handleChangePicker = (color, ev) => {
    // console.log(color)
    this.setState({
      color: color.hex
    })
    this.handleClosePicker();
  }

  handleChangeInput = (ev) => {
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }

  render(){
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input 
          placeholder="Title"
          name="title"
          value={this.state.title}
          onChange={this.handleChangeInput}
          // ref={input => this.cardInput = input} 
        />
        {/* <div className="picker">
          <div className="swatch" onClick={ this.handleTogglePicker }>
            <div 
              className="color"
              style={{background: this.state.color}}
            />
          </div>
          { 
            this.state.displayColorPicker ? 
            <div className="popover">
              <div className="cover" onClick={ this.handleClosePicker }/>
              <TwitterPicker color={ this.state.color } onChange={ this.handleChangePicker } />
            </div> : null
          }
        </div> */}
        <Input type="submit" value="Crear"/>
      </Form>
    )
  }
}

export default CardForm;
