import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://joe-nc-news-app.herokuapp.com/api",
});

export const getArticles = (topic) => {
  return ncNewsApi.get("/articles", { params: { topic } }).then((res) => {
    return res.data.articles;
  });
};

export const getSortedArticles = (sortOption) => {
  console.log("in get sorted articles");
  return ncNewsApi.get(`/articles?sort_by=${sortOption}`).then((res) => {
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

export const postComment = (article_id, body, username) => {
  return ncNewsApi
    .post(`/articles/${article_id}/comments`, {
      body: body,
      username: username,
    })
    .then((res) => {
      return res.data.comment;
    });
};

export const removeComment = (comment_id) => {
  return ncNewsApi.delete(`/comments/${comment_id}`);
};
