import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://joe-nc-news-app.herokuapp.com",
});

export const filterArticlesByNumber = (array, start, end) => {
  return array.slice(start, end);
};

export const getArticles = (start, end, topic) => {
  return ncNewsApi.get("/api/articles", { params: { topic } }).then((res) => {
    return filterArticlesByNumber(res.data.articles, start, end);
  });
};
