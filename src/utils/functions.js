import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://joe-nc-news-app.herokuapp.com",
});

export const getAllArticles = () => {
  return ncNewsApi.get("/api/articles").then((res) => {
    console.log(res.data);
    return res.data.articles;
  });
};
