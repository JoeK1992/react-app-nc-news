import React from "react";
import {Link} from "@reach/router";

function NavBarHome () {
    return (
        <div>
            <Link to="/articles" className="Articles_Link">
                <nav className="NavBarHome">Articles</nav>
            </Link>
        </div>
    )
}

export default NavBarHome