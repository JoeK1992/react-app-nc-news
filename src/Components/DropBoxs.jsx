import React from "react";

export const DropBoxTopic = (props) => {
  return (
    <select
      className="DropBox"
      onChange={props.handleTopicChange}
      id="Articles by topic"
      name="Articles by topic"
    >
      <option>All</option>
      <option value="coding">Coding</option>
      <option value="cooking">Cooking</option>
      <option value="football">Football</option>
    </select>
  );
};

export const DropBoxSort = (props) => {
  return (
    <select
      className="DropBox"
      onChange={props.handleSort}
      id="Sort Articles"
      name="Sort Articles"
    >
      <option value="created_at">Date created desc</option>
      <option value="created_at&order=asc">Date created asc</option>
      <option value="votes">Votes desc</option>
      <option value="votes&order=asc">Votes asc</option>
      <option value="comment_count">Comment count desc</option>
      <option value="comment_count&order=asc">Comment count asc</option>
    </select>
  );
};
