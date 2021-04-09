import React from "react";

import {changeCommentVotes} from "../utils/functions";

class CommentsVoter extends React.Component {
    state = {
        voteChanges: 0
    };

    updateCommentVotes = (comment_id, increment) => {
            this.setState((currentState) => {
            return {
            voteChanges: currentState.voteChanges + increment,
            } 
        })
        changeCommentVotes(comment_id, increment)        
    }

    render () {

        const {comment_id, votes} = this.props              
        
        return (
            <div>
            <button className= "Votes-Button" onClick= {() => {this.updateCommentVotes(comment_id, 1)}}>+</button>
            <p>Votes: {this.state.voteChanges + votes}</p>
            <button className= "Votes-Button" onClick= {() => {this.updateCommentVotes(comment_id, -1)}}>-</button>
            </div>
        )
    }
}

export default CommentsVoter;