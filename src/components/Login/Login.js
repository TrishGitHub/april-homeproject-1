import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import './Login.css';

class Login extends PureComponent {

	render() {

		return (
			<div className="login">
				Получить токен нужно на своей странице github,
				перейдите по{' '}
				<a href="https://github.com/settings/tokens" target="_blank" rel="noopener noreferrer">
					адресу
				</a>{' '}
				и создайте себе токен.
				<p>Запишите куда-нибудь токен, так как после создания доступ к нему будет только один раз. </p>

				<input className="form-field"
					type="text"
					placeholder="auth_token"

					// value={ this.state.token }
					// onChange={ this.handleOnChange }
					// onKeyDown={ this.handleOnKeyDown }
				/>
				<span>После ввода нажмите Enter</span>
			</div>
		)
	}
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
