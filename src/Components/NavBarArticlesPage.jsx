import React from "react";

import {Link} from "@reach/router";

function NavBarArticlesPage () {
    return (
        <div className="NavBarArticlesPage">
            <Link to="/" className="Home_Link">
                <nav>Home</nav>
            </Link>
        </div>
    )
}

export default NavBarArticlesPage;