import React from "react";
import {Link} from "@reach/router";

function NavBar () {
    return (
        <div className= "NavBar">
            <Link to="/articles" className="Articles_Link">
                <nav className="NavBar">Articles</nav>
            </Link>
        </div>
    )
}

export default NavBar