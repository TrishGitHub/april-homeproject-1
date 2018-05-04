import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { fetchUserRequest, fetchTokenRequest } from "../../actions/users";
import { getUserData, getIsFetching } from "../../ducks/users";
import Followers from "../Followers";
import Spinner from 'react-svg-spinner';

import './UserPage.css';

class UserPage extends PureComponent {

	componentDidMount() {
		const name = this.props.match.params.name;
		name == null ? this.props.fetchTokenRequest() : this.props.fetchUserRequest(name);
	}
	componentWillReceiveProps(nextProps) {
		if (this.props.match.params.name !== nextProps.match.params.name) {
			this.props.fetchUserRequest(nextProps.match.params.name);
		}
	}

	render() {
		const { data, fetching } = this.props;
		return (
			<React.Fragment>
				{fetching ? ( <Spinner size="64px" color="fuchsia" gap={5} /> ) : (
					<React.Fragment>
						{!data ? ( <div className="error">Пользователя не существует</div> ) : (
							<div className="user-item">
								<div className="user">
									<div className="user-img">
										<img src={ data.avatar_url } alt="" />
									</div>
									<div className="user-desc">
										<div className="user-name">{ data.login }</div>
										<div className="user-info">
											Followers: { data.followers }
										</div>
										<div className="user-info">
											Public repos: { data.public_repos }
										</div>
									</div>
								</div>
								<Followers user={ data.login } />
							</div>
						)}
					</React.Fragment>
				)}
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => ({
	data: getUserData(state),
	fetching: getIsFetching(state)
});

const mapDispatchToProps = {
	fetchUserRequest,
	fetchTokenRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
