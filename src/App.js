import React, { Component } from 'react';
import './App.css';
import customers from './components/customers.js';
import FirstCustomerModal from './components/FirstCustomerModal';
import CustomerModal from './components/CustomerModal';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={data:customers, customerfilter:" "};
    //this._handleClick = this._handleClick.bind(this);
}

  _handleClick(value){
    this.setState({
      customerfilter: value
    });
  };

  render() {
    let industry = this.state.customerfilter;
    let customers;
    if (industry===" ") {
      customers = this.state.data;
    } else {
     customers = this.state.data.filter(word => word.industry === industry);
    }
    let updateCustomer = customers.map(customer=>{
        if (customers.indexOf(customer)===0) {
          return <FirstCustomerModal key={customer.id} customer={customer}/>;
        } else {
          return <CustomerModal key={customer.id} customer={customer}/>;
        }

      }
    )

    return (
      <div className="App ">
          <nav className="navbar navbar-default">
            <div >
              <div>
                <button onClick={() => this._handleClick(" ")} id="travel" className="btn btn-default navbar-btn">ALL</button>
                <button onClick={() => this._handleClick("ecommerce")} id="ecommerce" className="btn btn-default navbar-btn">ECOMMERCE</button>
                <button onClick={() => this._handleClick("finance")} id="finance" className="btn btn-default navbar-btn">FINANCE</button>
                <button onClick={() => this._handleClick("travel")} id="travel" className="btn btn-default navbar-btn">TRAVEL</button>
             </div>
            </div>
          </nav>
        <div className="row-all-modal">
           {updateCustomer}
        </div>
      </div>
    );
  }
}

export default App;
