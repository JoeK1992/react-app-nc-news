import React from "react";

import {getAllArticles} from "../utils/functions";

class ArticlesPage extends React.Component {
    state = {
        articles: []
    }

    componentDidMount() {
        getAllArticles().then((articles) => {            
            this.setState({articles});
            });
    }

    render() {

        
        return (
            <main className= "Articles">
                <h1 className= "Header-Text">Articles</h1>
                <ul className= "Articles-List">                    
                </ul>
            </main>
        );
    }
}


 
export default ArticlesPage