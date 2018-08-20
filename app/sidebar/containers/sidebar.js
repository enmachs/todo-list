import React, { PureComponent } from 'react';
import Layout from '../components/layout';
import NewCardButton from '../components/buttons/new-card';

import Form from '../../cards/components/form';

class SidebarContainer extends PureComponent {
  // renderForm = () => {
  //   let form = new Form()
  //   return form.render()
  // }
  state = {
    popoverOpen: false
  }

  togglePopover = () => {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }
  componentDidMount(){
    // console.log(this.props.addCard)
  }
  render(){
    return (
      <Layout>
        <NewCardButton
          handleToggleClick={this.togglePopover}
          OpenPopover={this.state.popoverOpen}
        >
          <Form 
            handleNewCard={this.props.addCard}
            togglePopover={this.togglePopover}
          />
        </NewCardButton>
      </Layout>
    )
  }
}

export default SidebarContainer;
