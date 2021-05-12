import React from "react";

import { getArticleByID, getCommentsByArticleID } from "../utils/functions";

import NavBarArticlesPage from "./NavBarArticlesPage";

import CommentsVoter from "../Components/CommentsVoter";

import ArticleVoter from "./ArticleVoter";

import { Loader } from "../Components/Loader";

import CommentAdder from "../Components/CommentAdder";

import DeleteComment from "./DeleteComment";

import UserAvatar from "../Components/UserAvatar";

class SingleArticle extends React.Component {
  state = {
    article: [],
    comments: [],
    isLoading: true,
  };

  componentDidMount() {
    const { article_id } = this.props;

    Promise.all([
      getArticleByID(article_id),
      getCommentsByArticleID(article_id),
    ]).then(([article, comments]) => {
      this.setState({ article, comments, isLoading: false });
    });
  }

  addComment = (newComment) => {
    this.setState((currentState) => {
      return { comments: [newComment, ...currentState.comments] };
    });
  };

  deleteComment = (comment_id) => {
    this.setState((currentState) => {
      const newComments = currentState.comments.filter((comment) => {
        return comment.comment_id !== comment_id;
      });
      return { comments: newComments };
    });
  };

  render() {
    const { title, author, body, votes } = this.state.article;
    const { isLoading, comments } = this.state;
    const { article_id } = this.props;

    if (isLoading) {
      return <Loader className="Loader" />;
    }

    return (
      <main className="Main">
        <NavBarArticlesPage />
        <h1 style={{ fontFamily: "cursive" }}>{title}</h1>
        <h2 style={{ fontFamily: "cursive" }}>by {author}</h2>
        <UserAvatar username={author} />
        <p style={{ fontSize: "1.5em", fontFamily: "cursive" }}>{body}</p>
        <ArticleVoter article_id={article_id} votes={votes} />
        <CommentAdder
          addComment={this.addComment}
          article_id={article_id}
          className="Comment-Adder"
        />
        <ul className="Comments-List" style={{ fontFamily: "cursive" }}>
          {comments.map(({ author, body, created_at, votes, comment_id }) => (
            <li className="Comments-List-Item" key={comment_id}>
              <h3 style={{ fontSize: "2em" }}>{author}</h3>
              <UserAvatar username={author} />
              <p style={{ fontSize: "1.5em" }}>{body}</p>
              <h3 style={{ fontSize: "0.7em" }}>{created_at}</h3>
              <CommentsVoter comment_id={comment_id} votes={votes} />
              <div>
                {author === "jessjelly" && (
                  <DeleteComment
                    comment_id={comment_id}
                    deleteComment={this.deleteComment}
                  />
                )}
              </div>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

export default SingleArticle;
