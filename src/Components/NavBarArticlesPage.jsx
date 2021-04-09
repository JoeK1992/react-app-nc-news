import React from "react";
import {Link} from "@reach/router";

function NavBarArticlesPage () {
    return (
        <div>
            <Link to="/articles" className="Articles_Link">
                <nav className="NavBarHome">All Articles</nav>
            </Link>
        </div>
    )
}

export default NavBarArticlesPage;