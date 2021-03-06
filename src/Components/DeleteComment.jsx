import React from "react";

import { removeComment } from "../utils/functions";

class DeleteComment extends React.Component {
  handleDeleteComment = () => {
    removeComment(this.props.comment_id).then(() => {
      this.props.deleteComment(this.props.comment_id);
    });
  };

  render() {
    return (
      <button className="Delete-Button" onClick={this.handleDeleteComment}>
        Delete
      </button>
    );
  }
}

export default DeleteComment;
