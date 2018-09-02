import React, { Component } from 'react';
// import data from '../../api';
import CardsLayout from './../components/layout';
import Card from './../components/card';
// import { Icon, List } from 'antd'

// Groups
import GroupContainer from "../../groups/containers/GroupContainer";

import { Grid } from 'mauerwerk';
// import GroupLayout from '../../groups/components/GroupLayout';

class CardsContainer extends Component {
  render(){
    return (
      <CardsLayout>
        <Grid
          className="grid"
          // Arbitrary data, should contain keys, possibly heights, etc.
          data={this.props.cards}
          // Key accessor, instructs grid on how to fet individual keys from the data set
          keys={d => d.name}
          // Can be a fixed value or an individual data accessor
          heights={200}
          margin={30}
          lockScroll={true}
          // Number of columns
          columns={5}>
          
          {(data, maximized, toggle) => (
            <Card {...data} maximized={maximized} toggle={toggle} >
              <GroupContainer 
                card={data}
              />
            </Card>
          )}
        </Grid>
      </CardsLayout>
    )
  }
}

export default CardsContainer;
