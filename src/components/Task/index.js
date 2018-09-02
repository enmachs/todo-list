import React, { PureComponent } from 'react';
import data from '../../api.js';

import { Checkbox, Form } from 'antd';
// import { , Input, Button, Radio } from 'antd';

const FormItem = Form.Item;

class Tasks extends PureComponent {

  state = {
    tasks: data.tasks
  }

  componentDidMount(){

    // this.setState({
    //   tasks: data.tasks
    // })
    // console.table(this.state.tasks)
  }

  handleChecked = (taskId) => {
    // var tasksCopy = this.state.tasks;

    var copy = this.state.tasks.map(task => {
      if(task.id == taskId){
        // debugger
        return {
          id: task.id,
          name: task.name,
          group_id: task.group_id,
          completed: !task.completed
        }
      }
      return task
    })
    this.setState({
      tasks: copy
    })

    console.table(copy)
  }

  render(){
    const tasks = this.state.tasks.filter(task => task.group_id == this.props.groupId)
    return (
      <Form 
        layout='horizontal'
        style={{ paddingLeft: '24px' }}
      >
        {
          tasks.map(task => {
            return (
              <FormItem
                key={ task.id }
                labelCol={{span: 3}}
                wrapperCol={{ span: 14 }}
                style={{ marginBottom: '6px' }}
              >
                <Checkbox
                  checked={ task.completed }
                  onClick={() => this.handleChecked(task.id)}
                >
                  { task.name }
                </Checkbox>
              </FormItem>
            )
          })
        }
      </Form>
    )
  }
}

export default Tasks;
