import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import YouTube from 'react-youtube';

class ModalComponent extends Component {
  constructor(props){
    super(props);
    this.state = { show: false };
    this._handleHide = this._handleHide.bind(this);
    this._handleShow = this._handleShow.bind(this);
    this._onStart    = this._onStart.bind(this);
}
  _handleHide() {
    this.setState({ show: false });
  }

  _handleShow() {
    this.setState({ show: true });
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
    );
  }

}

export default ModalComponent;
