import React, { Component, Fragment } from "react";
import "./App.scss";
import { PaymentInfoCard1 } from './components/InfoCard1/PaymentInfoCard1';
import { DownPaymentInfoCard1 } from './components/InfoCard1/DownPaymentInfoCard1';
import { Party } from './components/InfoCard1/Party';

const payment = {
	from: "2019-12-12",
	to: "2020-05-12",
	cost: "200 USD"
  };
  
  const monthlyPayment = {
	from: "2019-12-12",
	to: "2020-05-12",
	cost: "200 USD",
	monthlyCost: "33 USD"
  };

class App extends Component {
	render() {
		return (
			<Fragment>
				<div>
					<h1 className = "h1">Generic</h1>
					<PaymentInfoCard1 payment={payment} />
					<DownPaymentInfoCard1 payment={monthlyPayment} />
					<Party />
				</div>
			</Fragment>
		);
	}
}

export default App;
