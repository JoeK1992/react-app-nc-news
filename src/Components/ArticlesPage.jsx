import React from "react";

import {getArticles, getSortedArticles} from "../utils/functions";

import NavBarArticlesPage from "./NavBarArticlesPage";

import {DropBoxTopic, DropBoxSort} from "./DropBoxs";

import {Link} from "@reach/router";

import {Loader} from "./Loader";


class ArticlesPage extends React.Component {
    state = {
        articles: [],
        isLoading: true        
    }   

    componentDidMount() {
        getArticles().then((articles) => {                           
            this.setState({articles, isLoading: false});            
            });
    }   
                    
        handleTopicChange = (event) => {
            if (event.target.value === "All") {
                event.target.value = undefined
            }
            getArticles(event.target.value).then((articles) => {
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
           
        const {articles, isLoading} = this.state;

        if (isLoading) {
            return <Loader/>
        }

        return (
            <main className= "Articles">           
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