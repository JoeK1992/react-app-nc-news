import React from "react";

import { getArticleByID} from "../utils/functions";

import NavBarArticlesPage from "../Components/NavBarHome";

import Comments from "../Components/Comments";

import ArticlesVoter from "./ArticlesVoter";

class SingleArticle extends React.Component {
    state = {
      article: [],
      };     
  
    componentDidMount() {
      const { article_id} = this.props;      
      
      getArticleByID(article_id).then((article) => {
       this.setState({ article });
      });
    }

    render() {     
            
            const {title, author, body, votes} = this.state.article                    
            const { article_id} = this.props;
                    
        return (
            <main>
            <NavBarArticlesPage/>   
            <h1>{title}</h1>,
            <h2>{author}</h2>,
            <p>{body}</p>
            <ArticlesVoter article_id= {article_id} votes= {votes}/>            
            <Comments article_id= {article_id} votes= {votes}/>
            </main>
        )
    
}
    }



export default SingleArticle;
    