import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class PrivateRoute extends PureComponent {

	render() {

		return (
			<div className="">
				<h1>PrivateRoute</h1>
			</div>
		)
	}
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);

