import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { authorize } from "../../actions/auth";

import './Login.css';

class Login extends PureComponent {
	state = {
		token: ""
	};

	onChangeHandle = e => {
		this.setState({ token: e.target.value });
	};
	onKeyDownHandle = e => {
		if (e.keyCode === 13) {
			this.props.authorize(this.state.token);
		}
	};

	render() {

		return (
			<div className="login">
				Получить токен нужно на своей странице github, перейдите по{' '}
				<a href="https://github.com/settings/tokens" target="_blank" rel="noopener noreferrer">
					адресу
				</a>{' '}
				и создайте себе токен.
				<p>Запишите куда-нибудь токен, так как после создания доступ к нему будет только один раз. </p>

				<input className="form-field"
					type="text"
					placeholder="auth_token"

					value={ this.state.token }
					onChange={ this.onChangeHandle }
					onKeyDown={ this.onKeyDownHandle }
				/>
				<span>После ввода нажмите Enter</span>
			</div>
		)
	}
}

const mapDispatchToProps = {
	authorize
};

export default connect(null, mapDispatchToProps)(Login);
