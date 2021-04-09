import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://joe-nc-news-app.herokuapp.com/api",
});

export const filterArticlesByNumber = (array, start, end) => {
  return array.slice(start, end);
};

export const getArticles = (start, end, topic) => {
  return ncNewsApi.get("/articles", { params: { topic } }).then((res) => {
    return filterArticlesByNumber(res.data.articles, start, end);
  });
};

export const getSortedArticles = (sortOption) => {
  console.log("in get sorted articles");
  return ncNewsApi.get(`/articles?sorted_by=${sortOption}`).then((res) => {
    console.log(res.data.articles);
    return res.data.articles;
  });
};

export const getArticleByID = (article_id) => {
  return ncNewsApi.get(`/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};

export const getCommentsByArticleID = (article_id) => {
  return ncNewsApi.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const changeArticleVotes = (article_id, increment) => {
  return ncNewsApi.patch(`/articles/${article_id}`, { inc_votes: increment });
};

export const changeCommentVotes = (comment_id, increment) => {
  return ncNewsApi.patch(`/comments/${comment_id}`, { inc_votes: increment });
};
