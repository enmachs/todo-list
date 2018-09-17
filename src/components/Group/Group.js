import React, { Component } from 'react';
import Layout from './Layout/Layout';
// import SingleGroup from '../components/SingleGroup';
import data from '../../api';
import { Collapse, Checkbox, Button } from 'antd';

import GroupForm from './Form/Form';

import Tasks from '../Task';

const Panel = Collapse.Panel;

class GroupContainer extends Component {
  state = { 
    groups: data.groups,
    showGroupForm: false
  }

  addGroup = (newGroup) => {
    // const that = this;
    
    // newCard.id = that.state.cards.length + 1
    this.setState({
      groups: [
        ...this.state.groups,
        newGroup
      ]
    });
    this.toggleGroupForm()
  }

  toggleGroupForm = () => {
    this.setState({
      showGroupForm: !this.state.showGroupForm
    })
  }
  componentWillUnmount() {
    console.log('componentWillUnmount - Group')
  }

  componentDidMount() {
    // this.setState({
    //   showGroupForm: false
    // })
    console.log('componentDidMount - Group')
  }
  componentWillUpdate(nextProps, nextState){
    // this.setState({
    //   showGroupForm: false
    // })
    console.log(nextState)
  }

  render() {
    const card = this.props.card
    const groups = this.state.groups.filter(group => group.card_id == card.id)
    const customPanelStyle = {
      background: '#f7f7f7',
      borderRadius: 2,
      marginBottom: 12,
      border: 0,
      overflow: 'hidden',
    };
    return (
      <Layout>
        <Collapse bordered={false}>
          {
            groups.map(group => {
              return (
                <Panel 
                  header={group.name}
                  key={group.id}
                  forceRender={true}
                  style={customPanelStyle}
                >
                  <Tasks 
                    groupId={group.id}
                  />
                </Panel>
              )
            })
          }
        </Collapse>
        {
          !this.state.showGroupForm ? (
            <Button type='dashed' onClick={this.toggleGroupForm}>
              Add group
            </Button>
          ) : (
            <GroupForm 
              handleToggleForm={this.toggleGroupForm}
              cardId={card.id}
              handleAddGroup={this.addGroup}
            />
          )
        }
      </Layout>
    );
  }
}

export default GroupContainer;
