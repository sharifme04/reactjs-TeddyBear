import React, { Component } from 'react';
import ModalComponent from './ModalComponent';
import playimage from '../images/play-button-md.png';

class FirstCustomerModal extends Component {
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
      <div className="row top-modal">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-6">
            <img key={customer.id} src={customer.video} onClick={this._onClick} className="img-rounded first-modal-image" alt="customer" />
            <img className="playimage" src={playimage} onClick={this._onClick} alt="playimage"/>
            </div>
            <div className="col-md-6">
              <div className="row quotes-row">
                <div className="col-md-12 text-left quotes-first-modal">
                   <p>{customer.quotes}</p>
                </div>
                </div>
                <div className="row">
                <div className="col-md-6 text-left quotes-name-both">
                    <p className="person-name">{customer.name}</p>
                    <p className="person-position">{customer.position}</p>
                 </div>
                 <div className="col-md-6 text-right">
                      <img key={customer.id} src={customer.icon}  className="first-modal-icon" alt="icon" />
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

export default FirstCustomerModal;
