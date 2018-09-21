import React, { Component } from 'react';

const SingleCustomer = (props) =>(
  <div>
  <div className="col-md-4">
    <div className="thumbnail">
        <img key={props.customer.id} src={props.customer.video} className="img-rounded" alt="customer" />
        <div className="caption">
          <p>{props.customer.quotes}</p>
        </div>
    </div>
  </div>
  </div>
)

export default SingleCustomer;
