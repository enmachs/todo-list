import React, { Component } from 'react';
import GroupLayout from '../components/GroupLayout';
import SingleGroup from '../components/SingleGroup';
import data from '../../api';
import { Collapse } from 'antd';

const Panel = Collapse.Panel;

class GroupContainer extends Component {
  state = { 
    groups: data.groups
  }
  render() {
    const card = this.props.card
    const groups = this.state.groups.filter(group => group.card_id == card.id)
    return (
      <GroupLayout>
        <Collapse bordered={false}>
          {
            groups.map(group => {
              return (
                <Panel header={group.name} key={group.id}>
                  <SingleGroup 
                    group={group}
                  />
                </Panel>
              )
            })
          }
        </Collapse>
      </GroupLayout>
    );
  }
}

export default GroupContainer;
