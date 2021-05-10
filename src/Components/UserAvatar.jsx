import React from "react";

import { getUserAvatarURL } from "../utils/functions";

class UserAvatar extends React.Component {
  state = {
    avatar_url: "",
  };

  componentDidMount() {
    getUserAvatarURL(this.props.username).then((avatar_url) => {
      this.setState({ avatar_url });
    });
  }

  render() {
    return <img className="Image" src={this.state.avatar_url} alt="img" />;
  }
}

export default UserAvatar;
