import React from "react";

import { postComment } from "../utils/functions";

class CommentAdder extends React.Component {
  state = {
    comment: "",
  };

  handlePostComment = (event) => {
    event.preventDefault();
    postComment(this.props.article_id, this.state.comment, "jessjelly").then(
      (comment) => {
        this.props.addComment(comment);
      }
    );
  };

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({ comment: value }, () => {});
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handlePostComment}>
          <label>
            Add a comment: <input type="text" onChange={this.handleChange} />
          </label>
          <button
            className="Submit-Comment"
            disabled={this.state.comment.length === 0}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default CommentAdder;
