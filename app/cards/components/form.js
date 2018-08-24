import React, { PureComponent } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import './styles/form.sass'
import { BlockPicker } from 'react-color';
// import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';


class CardForm extends PureComponent {

  state = {
    input: '',
    color: ''
  }

  handleSubmit = (e) => {
    let newCard = {
      // css: `linear-gradient(to top, #fff 0%, ${this.colorInput.input.value} 100%)`,
      name: this.cardInput.input.value
    }
    console.log(this.colorInput)
    // this.colorInput.input.value = '#000'
    // this.cardInput.input.value = ''
    this.props.handleNewCard(newCard)
    this.props.togglePopover()
    e.preventDefault();
  }

  handleChange = (color, e) => {
    console.log(color)
    this.setState({
      color: color.hex
    })
  }

  render(){
    return (
      <div id="card-form">
        <Form className="form-horizontal" onSubmit={this.handleSubmit}>
          <Input 
            placeholder="" 
            ref={input => this.cardInput = input} 
          />
          <BlockPicker value={ this.state.color } onChange={ this.handleChange } />  
          {/* <input type="submit"/> */}
          {/* <Input type="color" ref={input => this.colorInput = input} /> */}
        </Form>
      </div>
    )
  }
}

export default CardForm;
