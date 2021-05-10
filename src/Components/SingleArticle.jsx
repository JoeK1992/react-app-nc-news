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
      return <Loader />;
    }

    return (
      <main className="Main">
        <NavBarArticlesPage />
        <h1>{title}</h1>,<h2>{author}</h2>,<UserAvatar username={author} />
        <p>{body}</p>
        <ArticleVoter article_id={article_id} votes={votes} />
        <CommentAdder
          addComment={this.addComment}
          article_id={article_id}
          className="Comment-Adder"
        />
        <ul className="Comments-List">
          {comments.map(({ author, body, created_at, votes, comment_id }) => (
            <li className="Comments-List-Item" key={comment_id}>
              <h3>{author}</h3>
              <UserAvatar username={author} />
              <p>{body}</p>
              <h3>{created_at}</h3>
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
