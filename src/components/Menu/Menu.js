import React, { PureComponent } from 'react';
import Layout from './Layout';
import BtnWithPopover from '../UI/Buttons/BtnWithPopover';

import FormCard from '../Card/Form/Form';

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
        <BtnWithPopover
          handleToggleVisibility={this.togglePopover}
          visibility={this.state.popoverOpen}
          textInBtn='Card'
          icon='plus'
          position='bottomLeft'
          btnStyle='dashed'
        >
          <FormCard 
            handleNewCard={this.props.addCard}
            togglePopover={this.togglePopover}
          />
        </BtnWithPopover>
      </Layout>
    )
  }
}

export default MenuContainer;
