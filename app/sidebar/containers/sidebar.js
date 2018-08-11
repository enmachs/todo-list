import React, { PureComponent } from 'react';
import Layout from '../components/layout';

// import data from '../../api.json';

class SidebarContainer extends PureComponent {

  render(){
    return (
      <Layout>
        <button 
          type="button"
          class="btn btn-regular"
          data-toggle="modal" 
          data-target="#modal"
          // onClick={this.props.addCard}
        >
          Primary
        </button>
      </Layout>
    )
  }
}

export default SidebarContainer;
