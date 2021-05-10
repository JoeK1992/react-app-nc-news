import React from "react";

import { postComment } from "../utils/functions";

class CommentAdder extends React.Component {
  state = {
    text: "",
  };

  handlePostComment = (event) => {
    event.preventDefault();
    postComment(this.props.article_id, this.state.text, "jessjelly").then(
      (comment) => {
        this.setState({ text: "" });
        this.props.addComment(comment);
      }
    );
  };

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({ text: value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handlePostComment}>
          <label>
            Add a comment:{" "}
            <input
              value={this.state.text}
              type="text"
              onChange={this.handleChange}
            />
          </label>
          <button
            className="Submit-Comment"
            disabled={this.state.text.length === 0}
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
