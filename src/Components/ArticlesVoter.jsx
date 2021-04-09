import React from "react";

import {changeArticleVotes} from "../utils/functions";

class ArticlesVoter extends React.Component {
    state = {
        voteChanges: 0
    };

    updateArticleVotes = (article_id, increment) => {
        this.setState((currentState) => {
            return {
            voteChanges: currentState.voteChanges + increment,
            } 
        })
        changeArticleVotes(article_id, increment)        
    }

    render () {

        const {article_id, votes} = this.props              
        
        return (
            <div className= "Articles-Voter">
            <button className= "Votes-Button" onClick= {() => {this.updateArticleVotes(article_id, 1)}}>+</button>
            <p>Votes: {this.state.voteChanges + votes}</p>
            <button className= "Votes-Button" onClick= {() => {this.updateArticleVotes(article_id, -1)}}>-</button>
            </div>
        )
    }
}

export default ArticlesVoter