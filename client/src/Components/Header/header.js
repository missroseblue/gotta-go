import React from 'react';
import Nav from "./Nav";


// HEADER
function Header(props) {
    return (
        <header>
            <div class="headerbox">
                <h1>Gotta Go?</h1>
                <div>
                    <Nav currentPage={props.currentPage} setCurrentPage={props.setCurrentPage}></Nav>
                </div>
            </div>
        </header>
    );
}

export default Header;