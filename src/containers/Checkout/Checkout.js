import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import ChecoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
// import * as actions from '../../store/actions/index';

class Checkout extends Component {
	checkoutCancelHandler = () => {
		this.props.history.goBack();
	};

	checkoutContinueHandler = () => {
		this.props.history.replace('/checkout/contact-data');
	};

	render() {
		console.log(this.props);
		let summary = <Redirect to='/' />;
		if (this.props.ings) {
			const purchasedRedirect = this.props.purchased ? (
				<Redirect to='/' />
			) : null;
			summary = (
				<div>
					{purchasedRedirect}
					<ChecoutSummary
						ingredients={this.props.ings}
						checkoutCancelled={this.checkoutCancelHandler}
						checkoutContinued={this.checkoutContinueHandler}
					/>
					<Route
						path={this.props.match.path + '/contact-data'}
						component={ContactData}
					/>
				</div>
			);
		}
		return summary;
	}
}

const mapStateToProps = state => {
	return {
		ings: state.burgerBuilder.ingredients,
		purchased: state.order.purchased,
	};
};

export default connect(mapStateToProps)(Checkout);
