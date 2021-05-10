import Header from "./Header";

import React from "react";

import { Link } from "@reach/router";

import NavBarArticlesPage from "./NavBarArticlesPage";

import { getSortedArticles } from "../utils/functions";

import UserAvatar from "../Components/UserAvatar";

import ArticleVoter from "../Components/ArticleVoter";

class Home extends React.Component {
  state = {
    topThreeArticles: [],
  };

  componentDidMount() {
    getSortedArticles("votes", "3").then((articles) => {
      this.setState({ topThreeArticles: articles });
    });
  }

  render() {
    const articles = this.state.topThreeArticles;
    return (
      <main>
        <NavBarArticlesPage />
        <Header />
        <h2>Trending Articles</h2>
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

export default Home;
