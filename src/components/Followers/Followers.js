import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { getFollowers, getFetching } from "../../ducks/followers";
import { fetchFollowersRequest } from "../../actions/followers";
import Spinner from 'react-svg-spinner';
import Follower from "../Follower";

import "./Followers.css";

class Followers extends PureComponent {

	componentDidMount() {
		const name = this.props.user;
		this.props.fetchFollowersRequest(name);
	}

	render() {
		const { followers, fetching } = this.props;
		return (
			<div className="followers-list">
				{ fetching ? ( <Spinner size="64px" color="fuchsia" gap={5} /> ) : (
					<div>
						{!followers || followers.length === 0 ? (
							<div>Подписчиков нет</div>
						) : (
							followers.map(follower => (
								<Follower
									key={ follower.id }
									avatar={ follower.avatar_url }
									name={ follower.login }

								/>
							))
						)}
					</div>
				)}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	followers: getFollowers(state),
	fetching: getFetching(state),
});

const mapDispatchToProps = {
	fetchFollowersRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Followers);

