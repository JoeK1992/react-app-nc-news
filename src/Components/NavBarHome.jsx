import React from "react";

import {Link} from "@reach/router";

function NavBarHome () {
    return (
        <div className="NavBarArticlesPage">
            <Link to="/Home" className="Home_Link">
                <nav>Home</nav>
            </Link>
        </div>
    )
}

export default NavBarHome;