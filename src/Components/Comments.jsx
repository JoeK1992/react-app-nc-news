import React from "react";

import {getCommentsByArticleID} from "../utils/functions";

import CommentsVoter from "../Components/CommentsVoter";

class Comments extends React.Component {
    state = {
        comments: []
    }

    componentDidMount () {
        getCommentsByArticleID(this.props.article_id).then((comments) => {
            this.setState({comments});
        });
    }

    render() {

        const comments = this.state.comments;
       
        return (
             <ul className= "Comments-List">
                {comments.map(({author, body, created_at, votes, comment_id}) => (
                    <li className= "Comments-List-Item" key= {comment_id}>                        
                        <h3>{author}</h3>
                        <p>{body}</p>
                        <h3>{created_at}</h3>
                       <CommentsVoter comment_id= {comment_id} votes= {votes}/>
                    </li>
                ))}
            </ul>
        )

    }
}

export default Comments;