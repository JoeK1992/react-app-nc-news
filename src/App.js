import "./App.css";
import React from "react";
import { Router } from "@reach/router";
import Home from "../src/Components/Home";
import ArticlesPage from "./Components/ArticlesPage";
import SingleArticle from "./Components/SingleArticle";
import Login from "./Components/LoginPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Login path="/" />
        <Home path="/Home" />
        <ArticlesPage path="/articles" />
        <SingleArticle path="/articles/:article_id" />
      </Router>
    </div>
  );
}

export default App;
