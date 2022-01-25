import React, { useState } from 'react';
import Nav from "../Nav/nav";


// HEADER
function Header(props) {
    return (
        <header>
            <h1>{props.name}</h1>

        </header>
    )
}

export default Header;