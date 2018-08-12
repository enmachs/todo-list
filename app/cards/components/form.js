import React, { PureComponent } from 'react';
import './styles/form.sass'
// import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';


class CardForm extends PureComponent {
  handleSubmit = (e) => {
    let newCard = {
      id: 23,
      title: this.input.value,
      color: '#000',
      playlist: []
    }
    // console.log(newCard)

    this.props.handleNewCard(newCard)
    this.props.togglePopover()
    e.preventDefault();
    // alert('The value is: ' + this.input.value);
  }
  render(){
    return (
      <div id="new-card-form">
        <div id="card-form">
          <form className="form-horizontal" onSubmit={this.handleSubmit}>
            <input type="text" className="form-control" ref={(input) => this.input = input}/>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    )
  }
}

export default CardForm;
