import React from "react";

export const DropBox = (props) => {
    return (
    <select onChange= {props.handleTopicChange} id= "Articles by topic" name= "Articles by topic"> 
    <option>All</option>
    <option value= "coding">Coding</option>
    <option value= "cooking">Cooking</option>
    <option value= "football">Football</option>
    </select>
    )
}