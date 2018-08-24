import React, { Component } from 'react';
// import data from '../../api';
import CardsLayout from './../components/layout';
import Card from './../components/card';
// import { Icon, List } from 'antd'

import { Grid } from 'mauerwerk';

class CardsContainer extends Component {
  state = {
    open: true
  }

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
            <Card {...data} maximized={maximized} toggle={toggle} />
          )}
        </Grid>
      </CardsLayout>
    )
  }
}

export default CardsContainer;
