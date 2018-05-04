import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import PrivateRoute from '../PrivateRoute';
import Login from '../Login';
import UserPage from '../UserPage';

import { getIsAuthorized } from "../../ducks/auth";
import { getNetworkErrors, getErrorMessage } from "../../ducks/network";
import { logout } from "../../actions/auth";

import './AppRouter.css';

class AppRouter extends PureComponent {

	logoutHandle = () => {
		this.props.logout();
	};

	render() {
		const { error, message, isAuthorized } = this.props;

		return (
			<div className="content">
				{isAuthorized && (
					<button onClick={ this.logoutHandle } className="btn">
						Выйти
					</button>
				)}

				{error && <div className="error">{ message }</div>}

				<Switch>
					<Route path="/login"
					       exact component={ Login }/>
					<PrivateRoute
						path="/user/me"
						component={ UserPage }/>
					<PrivateRoute path="/user/:name"
					              component={ UserPage }/>
					{ !isAuthorized && <Route path="/login" component={ Login } />}
					<Redirect to="/user/me" />
				</Switch>
			</div>
		);
	};
}

const mapStateToProps = state => ({
	error: getNetworkErrors(state),
	message: getErrorMessage(state),
	isAuthorized: getIsAuthorized(state),
});

const mapDispatchToProps = {
	logout,
};

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(AppRouter)
);