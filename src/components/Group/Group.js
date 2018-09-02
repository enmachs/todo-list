import React, { Component } from 'react';
import Layout from './Layout/Layout';
// import SingleGroup from '../components/SingleGroup';
import data from '../../api';
import { Collapse, Checkbox } from 'antd';

import Tasks from '../Task';

const Panel = Collapse.Panel;

class GroupContainer extends Component {
  state = { 
    groups: data.groups
  }
  render() {
    const card = this.props.card
    const groups = this.state.groups.filter(group => group.card_id == card.id)
    const customPanelStyle = {
      background: '#f7f7f7',
      borderRadius: 4,
      marginBottom: 24,
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
      </Layout>
    );
  }
}

export default GroupContainer;
