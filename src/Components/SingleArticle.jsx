import React from "react";

import { getArticleByID, getCommentsByArticleID} from "../utils/functions";

import NavBarArticlesPage from "./NavBarArticlesPage";

import CommentsVoter from "../Components/Comments";

import ArticlesVoter from "./ArticlesVoter";

import {Loader} from "../Components/Loader";

import CommentAdder from "../Components/CommentAdder";



class SingleArticle extends React.Component {
    state = {
      article: [],
      comments:[],
      isLoading: true
      };     
  
    componentDidMount() {
      const { article_id} = this.props;
      
      Promise.all([getArticleByID(article_id), getCommentsByArticleID(article_id)])      
      .then(([article, comments]) => {
       this.setState({ article, comments, isLoading: false });
      });
    }

    render() {     
            
            const {title, author, body, votes} = this.state.article
            const {isLoading, comments} = this.state;                   
            const { article_id} = this.props;

            if (isLoading) {
              return <Loader/>
            }
                    
        return (
            <main>
            <NavBarArticlesPage/>   
            <h1>{title}</h1>,
            <h2>{author}</h2>,
            <p>{body}</p>
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
            <ArticlesVoter article_id= {article_id} votes= {votes}/>
            <CommentAdder className= "Comment-Adder"/>                              
            </main>
        )
    
}
    }

export default SingleArticle;
    