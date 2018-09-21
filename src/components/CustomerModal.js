import React, { Component } from 'react';
import ModalComponent from './ModalComponent';
import playimage2 from '../images/play-buttons-sm.png';

class CustomerModal extends Component {
  constructor(props){
    super(props);
    this.child = React.createRef();
}

_onClick = () => {
  this.child.current._handleShow();
};

  render() {
    let customer = this.props.customer;
    return (
      <div className="customer-modal">
      <div className="col-md-4 text-center customer-modal-shadow">
          <div className="thumbnail">
            <img key={customer.id} src={customer.video} onClick={this._onClick} className="image-customer" alt="customer" />
            <img className="playimage2" src={playimage2} onClick={this._onClick} alt="playimage2"/>
            <div className="caption">
            <div className="quotes-row-customer-modal">
              <div className="col-md-12 text-center quotes-customer-modal">
                 <p className="text-left quota-customer-text">{customer.quotes}</p>
              </div>
              <div className="col-md-6 text-left quotes-name-both ">
                  <p className="person-name">{customer.name}</p>
                  <p className="person-position">{customer.position}</p>
               </div>
               <div className="col-md-6 text-right">
                    <img key={customer.id} src={customer.icon}  className="customer-modal-icon" alt="icon" />
                </div>
            </div>
            </div>
          </div>
          <ModalComponent ref={this.child}  customer={customer}/>
      </div>
      </div>
    );
  }

}

export default CustomerModal;
