import React from "react";

export const DropBoxTopic = (props) => {
    return (
    <select className= "DropBox" onChange= {props.handleTopicChange} id= "Articles by topic" name= "Articles by topic"> 
    <option>All</option>
    <option value= "coding">Coding</option>
    <option value= "cooking">Cooking</option>
    <option value= "football">Football</option>
    </select>
    )
}

export const DropBoxSort = (props) => {
    return (
        <select className= "DropBox" onChange= {props.handleSort} id= "Sort Articles" name= "Sort Articles">
            <option value= "created_at">Date created</option>
            <option value= "votes">Votes</option>
            <option value= "comment_count">Comment count</option>
        </select>
    )
}