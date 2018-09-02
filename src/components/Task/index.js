import React, { PureComponent } from 'react';
import data from '../../api.js';

import { Checkbox, Form } from 'antd';
// import { , Input, Button, Radio } from 'antd';

const FormItem = Form.Item;

class Tasks extends PureComponent {

  state = {
    tasks: []
  }

  componentDidMount(){
    this.setState({
      tasks: data.tasks
    })
  }

  handleChecked = (taskId) => {
    // var tasksCopy = this.state.tasks;

    var copy = this.state.tasks.map(task => {
      if(task.id == taskId){
        var newTask = {
          id: task.id,
          name: task.name,
          group_id: task.group_id,
          completed: !task.completed
        }
        return newTask
      }
      return task
      // task.id == taskId
    })
    this.setState({
      tasks: copy
    })
    // task.completed = !task.completed;
  }

  render(){
    const tasks = this.state.tasks.filter(task => task.group_id == this.props.groupId)
    return (
      <Form layout='horizontal'>
        {
          tasks.map(task => {
            return (
              <FormItem>
                <Checkbox
                  key={task.id}
                  checked={task.completed}
                  onClick={() => this.handleChecked(task.id)}
                >
                  {task.name}
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