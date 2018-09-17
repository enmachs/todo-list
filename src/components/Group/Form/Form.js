import React, { PureComponent } from 'react';
import { Button, Form, Input, Icon } from 'antd';
const FormItem = Form.Item;

class GroupForm extends PureComponent {

  state = {
    name: ''
  }

  handleSubmit = (ev) => {
    var newGroup = {
      id: Math.floor((Math.random() * 999999) + 1),
      name: this.state.name,
      card_id: this.props.cardId
    }
    this.props.handleAddGroup(newGroup)
    ev.preventDefault();
  }

  inputRef = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  componentWillUnmount() {
    console.log('componentWillUnmount - Form')
  }

  componentDidMount() {
    console.log('componentDidMount - Form')
  }

  componentWillUpdate(){
    console.log('componentWillUpdate - Form')
  }

  render(){
    return (
      <div>
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <FormItem>
            <Input placeholder="Group name" onChange={this.inputRef} />
          </FormItem>
          <FormItem>
            <Button type='danger' onClick={this.props.handleToggleForm}>
              <Icon type="close"></Icon>
            </Button>
          </FormItem>
          <FormItem>
            <Button type='dashed' onClick={this.props.handleSubmit}>
              guardar
            </Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}

export default GroupForm
