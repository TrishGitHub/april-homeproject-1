import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import './Login.css';

class Login extends PureComponent {

	render() {

		return (
			<div className="login">
				Получить токен нужно на своей странице github,
				перейдите по{' '}
				<a href="https://github.com/settings/tokens">
					адресу
				</a>{' '}
				и создайте себе токен. Запишите куда-нибудь токен,
				так как после создания доступ к нему будет только
				один раз.
			</div>
		)
	}
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
