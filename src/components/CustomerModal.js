import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import YouTube from 'react-youtube';
import playimage2 from '../images/play-buttons-sm.png';

class CustomerModal extends Component {
  constructor(props){
    super(props);
    this.state = { show: false };
    this._handleHide = this._handleHide.bind(this);
}
  _handleHide() {
    this.setState({ show: false });
  }

  _onStart(event) {
    event.target.pauseVideo();
  }
  render() {
    let customer = this.props.customer;
    const opts = {
        height: '500',
        width: '840',
        playerVars: { autoplay: 1  }
    };
    return (
      <div className="customer-modal">
      <div className="col-md-4 text-center customer-modal-shadow">
          <div className="thumbnail">
            <img key={customer.id} src={customer.video} onClick={() => this.setState({ show: true })} className="image-customer" alt="customer" />
            <img className="playimage2" src={playimage2} onClick={() => this.setState({ show: true })} alt="playimage2"/>
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
        <div className="modal-container" style={{ height: 200 }}>
          <Modal
            show={this.state.show}
            onHide={this._handleHide}
            container={this}
            aria-labelledby="contained-modal-title"
          >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
             <YouTube
               videoId= {customer.youtube}
               opts={opts}
               onReady={this._onStart}
             />

            </Modal.Body>
          </Modal>
        </div>
      </div>
      </div>
    );
  }

}

export default CustomerModal;
