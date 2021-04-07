import "./App.css";
import React from "react";
import { Router } from "@reach/router";
import Home from "../src/Components/Home";
import ArticlesPage from "./Components/ArticlesPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <ArticlesPage path="/articles" />
      </Router>
    </div>
  );
}

export default App;
