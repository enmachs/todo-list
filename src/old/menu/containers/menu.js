import React, { PureComponent } from 'react';
import Layout from '../components/layout';
import NewCard from '../../buttons/components/newCard';

import Form from '../../cards/components/form';

class MenuContainer extends PureComponent {
  state = {
    popoverOpen: false
  }
  togglePopover = () => {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }
  render(){
    return (
      <Layout>
        <NewCard
          handleToggleClick={this.togglePopover}
          OpenPopover={this.state.popoverOpen}
        >
          <Form 
            handleNewCard={this.props.addCard}
            togglePopover={this.togglePopover}
          />
        </NewCard>
      </Layout>
    )
  }
}

export default MenuContainer;
