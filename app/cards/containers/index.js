import React, { Component } from 'react';
import data from '../../api.json';
import CardsLayout from './../components/layout';
import Card from './../components/card';
import { Icon, List } from 'antd'

import { Grid, Slug, Fade } from 'mauerwerk';

const Cell = ({ toggle, name, height, description, css, maximized }) => (
  <div
    className="cell"
    style={{ backgroundImage: css, cursor: !maximized ? 'pointer' : 'auto' }}
    onClick={!maximized ? toggle : undefined}>
    <Fade show={maximized} delay={maximized ? 400 : 0}>
      <div className="details">
        <Slug delay={600}>
          <div style={{ height: '100%', overflowY: 'auto' }}>
            <div className="circle" style={{ background: css }} />
            <div className="close">
              <Icon type="close" style={{ cursor: 'pointer' }} onClick={toggle} />
            </div>
            <h1>{name}</h1>
            <p>{description}</p>

            <List
              header={<div>Header</div>}
              footer={<div>Footer</div>}
              bordered
              dataSource={data}
              renderItem={item => (<List.Item>{item}</List.Item>)}
            />
            <List
              header={<div>Header</div>}
              footer={<div>Footer</div>}
              bordered
              dataSource={data}
              renderItem={item => (<List.Item>{item}</List.Item>)}
            />
            <List
              header={<div>Header</div>}
              footer={<div>Footer</div>}
              bordered
              dataSource={data}
              renderItem={item => (<List.Item>{item}</List.Item>)}
            />
            <List
              header={<div>Header</div>}
              footer={<div>Footer</div>}
              bordered
              dataSource={data}
              renderItem={item => (<List.Item>{item}</List.Item>)}
            />
            <List
              header={<div>Header</div>}
              footer={<div>Footer</div>}
              bordered
              dataSource={data}
              renderItem={item => (<List.Item>{item}</List.Item>)}
            />
            <List
              header={<div>Header</div>}
              footer={<div>Footer</div>}
              bordered
              dataSource={data}
              renderItem={item => (<List.Item>{item}</List.Item>)}
            />
          </div>
          
        </Slug>
      </div>
    </Fade>
    <Fade
      show={!maximized}
      from={{ opacity: 0, transform: 'translate3d(0,140px,0)' }}
      enter={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
      leave={{ opacity: 0, transform: 'translate3d(0,-50px,0)' }}
      delay={maximized ? 0 : 400}>
      <div className="default">{name}</div>
    </Fade>
  </div>
)
class CardsContainer extends Component {
  state = {
    open: true,
    data: [
      {
        name: 'Rare Wind',
        description: '#a8edea → #fed6e3',
        css: 'linear-gradient(to top, #a8edea 0%, #fed6e3 100%)',
        height: 200
      },
      {
        name: 'Saint Petersburg',
        description: '#f5f7fa → #c3cfe2',
        css: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        height: 400
      },
      {
        name: 'Deep Blue',
        description: '#e0c3fc → #8ec5fc',
        css: 'linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)',
        height: 400
      },
      {
        name: 'Ripe Malinka',
        description: '#f093fb → #f5576c',
        css: 'linear-gradient(120deg, #f093fb 0%, #f5576c 100%)',
        height: 400
      },
      {
        name: 'Perfect White',
        description: '#fdfbfb → #ebedee',
        css: 'linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%)',
        height: 400
      },
      {
        name: 'Near Moon',
        description: '#5ee7df → #b490ca',
        css: 'linear-gradient(to top, #5ee7df 0%, #b490ca 100%)',
        height: 400
      },
      {
        name: 'Wild Apple',
        description: '#d299c2 → #fef9d7',
        css: 'linear-gradient(to top, #d299c2 0%, #fef9d7 100%)',
        height: 200
      },
      {
        name: 'Ladoga Bottom',
        description: '#ebc0fd → #d9ded8',
        css: 'linear-gradient(to top, #ebc0fd 0%, #d9ded8 100%)',
        height: 400
      },
      {
        name: 'Sunny Morning',
        description: '#f6d365 → #fda085',
        css: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
        height: 200
      },
      {
        name: 'Lemon Gate',
        description: '#96fbc4 → #f9f586',
        css: 'linear-gradient(to top, #96fbc4 0%, #f9f586 100%)',
        height: 400
      },
      {
        name: 'Salt Mountain',
        description: ' #FFFEFF → #D7FFFE',
        css: 'linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%)',
        height: 200
      },
      {
        name: 'New York',
        description: ' #fff1eb → #ace0f9',
        css: 'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)',
        height: 400
      },
      {
        name: 'Soft Grass',
        description: ' #c1dfc4 → #deecdd',
        css: 'linear-gradient(to top, #c1dfc4 0%, #deecdd 100%)',
        height: 400
      },
      {
        name: 'Japan Blush',
        description: ' #ddd6f3 → #faaca8',
        css: 'linear-gradient(-20deg, #ddd6f3 0%, #faaca8 100%, #faaca8 100%)',
        height: 200
      }
    ]
    
  }

  render(){
    return (
      <CardsLayout>
        <Grid
          className="grid"
          // Arbitrary data, should contain keys, possibly heights, etc.
          data={this.state.data}
          // Key accessor, instructs grid on how to fet individual keys from the data set
          keys={d => d.name}
          // Can be a fixed value or an individual data accessor
          heights={200}
          lockScroll={true}
          // Number of columns
          columns={4}>
          
          {(data, maximized, toggle) => (
            <Cell {...data} maximized={maximized} toggle={toggle} />
          )}
        </Grid>
      </CardsLayout>
    )
  }
}

export default CardsContainer;
