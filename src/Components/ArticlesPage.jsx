import React from "react";

import { getArticles, getSortedArticles } from "../utils/functions";

import UserAvatar from "../Components/UserAvatar";

import NavBarHome from "./NavBarHome";

import { DropBoxTopic, DropBoxSort } from "./DropBoxs";

import { Link } from "@reach/router";

import { Loader } from "./Loader";

import ArticleVoter from "./ArticleVoter";

class ArticlesPage extends React.Component {
  state = {
    articles: [],
    isLoading: true,
  };

  componentDidMount() {
    getArticles().then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  }

  handleTopicChange = (event) => {
    if (event.target.value === "All") {
      event.target.value = undefined;
    }
    getArticles(event.target.value).then((articles) => {
      this.setState({ articles });
    });
  };

  handleSort = (event) => {
    getSortedArticles(event.target.value).then((articles) => {
      this.setState({ articles });
    });
  };

  render() {
    const { articles, isLoading } = this.state;

    if (isLoading) {
      return <Loader className="Loader" />;
    }

    return (
      <main className="Articles">
        <NavBarHome />
        <h1 className="Header-Text">Articles</h1>
        Filter articles by topic:{" "}
        <DropBoxTopic handleTopicChange={this.handleTopicChange} />
        Sort articles by: <DropBoxSort handleSort={this.handleSort} />
        <ul className="Articles-List">
          {articles.map(({ article_id, title, topic, author, votes }) => (
            <li className="Article-List-Item" key={article_id}>
              <Link to={`/articles/${article_id}`}>
                <h2 className="Article-Title">{title}!</h2>
              </Link>
              <h3 className="Article-Topic"> {topic}</h3>
              <h3>by {author}</h3>
              <UserAvatar username={author} className="Image" />
              <ArticleVoter article_id={article_id} votes={votes} />
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

export default ArticlesPage;
