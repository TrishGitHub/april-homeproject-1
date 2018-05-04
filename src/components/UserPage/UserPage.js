import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import './UserPage.css';

class UserPage extends PureComponent {

	render() {

		return (
			<div className="">
				<h1>UserPage</h1>
			</div>
		)
	}
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
