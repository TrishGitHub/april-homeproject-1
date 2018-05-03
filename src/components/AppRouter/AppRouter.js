import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import PrivateRoute from '../PrivateRoute';
import Login from '../Login';
import UserPage from '../UserPage';

import './AppRouter.css';

class AppRouter extends PureComponent {
	render() {
		return (
			<div className="content">
				<Switch>
					<Route path="/login"
					       exact component={ Login }/>
					<PrivateRoute
						path="/user/:name"
						component={ UserPage }/>
					<Redirect to="/login" />
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {};

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(AppRouter)
);