import React from "react";

import {getArticles, getSortedArticles} from "../utils/functions";

import NavBarArticlesPage from "./NavBarArticlesPage";

import {DropBoxTopic, DropBoxSort} from "./DropBoxs";

import {Link} from "@reach/router";


class ArticlesPage extends React.Component {
    state = {
        articles: [],
        page: 1
    }   

    componentDidMount() {
        getArticles((this.state.page-1)*10, this.state.page*10).then((articles) => {                           
            this.setState({articles});
            
            });
    }

    handlePageChange = (increment) => {
        console.log(this.state.page)
        this.setState((currState) => {
            return {page: currState.page+increment}
        })
      }

        getNewPage = (increment) => {
           
        this.handlePageChange(increment)
        getArticles((this.state.page-1)*10, this.state.page*10).then((articles) => {                                   
            this.setState({articles});
            });

             }
             
        handleTopicChange = (event) => {
            if (event.target.value === "All") {
                event.target.value = undefined
            }
            getArticles(0, 1000, event.target.value).then((articles) => {
                this.setState({articles})
            })
        }

        handleSort = (event) => {
            console.log("in handle sort")
            getSortedArticles(event.target.value).then((articles) => {
                this.setState({articles})
            })
        }

    render() {                                                
           
        const articles = this.state.articles;
        return (
            <main className= "Articles">
                <button onClick= {() => {this.getNewPage(-1)}} className= "Previous-Articles-Button">previous</button>
                <button onClick= {() => {this.getNewPage(1)}}className= "More-Articles-Button">more</button>
                <NavBarArticlesPage/>
                <h1 className= "Header-Text">Articles</h1>
                Filter articles by topic:  <DropBoxTopic handleTopicChange= {this.handleTopicChange}/>
                Sort articles by: <DropBoxSort handleSort= {this.handleSort}/>
                <ul className= "Articles-List">
                    {articles.map(({article_id, title, topic, author}) => (
                        <li className= "Article-List-Item" key= {article_id}>
                            <Link to= {`/articles/${article_id}`}>
                            <h2 className= "Article-Title">{title}!</h2>
                                </Link>                  
                            
                            <h3 className= "Article-Topic"> {topic}</h3>
                            <h3>by {author}</h3>                            
                        </li>
                    ))}                    
                </ul>                
            </main>
        );
    }
}


export default ArticlesPage