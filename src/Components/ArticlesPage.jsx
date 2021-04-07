import React from "react";

import {getArticles} from "../utils/functions";

import NavBarArticlesPage from "./NavBarArticlesPage";

import {DropBox} from "./DropBox";


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
        this.setState((currState) => {
            return {page: currState.page+increment}
        })
      }

        getNewPage = (increment) => {
            console.log(this.state.page)
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

    render() {       
                                             
           
        const articles = this.state.articles;
        return (
            <main className= "Articles">
                <button onClick= {() => {this.getNewPage(-1)}} className= "Previous-Articles-Button">previous</button>
                <button onClick= {() => {this.getNewPage(1)}}className= "More-Articles-Button">more</button>
                <NavBarArticlesPage/>
                <h1 className= "Header-Text">Articles</h1>
                Filter articles by topic:  <DropBox handleTopicChange= {this.handleTopicChange}/>
                <ul className= "Articles-List">
                    {articles.map(({article_id, title, topic, author}) => (
                        <li key= {article_id}>
                            <h2>{title}!</h2>
                            <h3>{topic}</h3>
                            <h3>by {author}</h3>
                        </li>
                    ))}                    
                </ul>
            </main>
        );
    }
}


export default ArticlesPage