import React from "react";

import { removeComment } from "../utils/functions";

class DeleteButton extends React.Component {
  handleDeleteComment = () => {
    removeComment(this.props.comment_id).then(() => {
      this.props.deleteComment(this.props.comment_id);
    });
  };

  render() {
    return <button onClick={this.handleDeleteComment}>Delete</button>;
  }
}

export default DeleteButton;
