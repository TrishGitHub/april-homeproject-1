import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

import "./Follower.css";

class Follower extends PureComponent {
	render() {
		const { avatar, name } = this.props;
		return (
			<div className="follower">
				<div className="follower-img">
					<img src={avatar} alt="" />
				</div>
				<div className="follower-name">
					<Link to={`/user/${name}`}>{ name }</Link>
				</div>
			</div>
		);
	}
}

export default Follower;
