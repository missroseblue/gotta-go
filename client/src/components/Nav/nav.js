// import React, { useState } from 'react';
import React from 'react';

function Nav(props) {
    return (
        <nav class='topnav'>
            <ul className='flex-row'>
                <li className="mx-2">
                    <button onClick={() => props.setCurrentPage("SignIn")}>
                        Sign In
                    </button>
                </li>

                <li className='mx-2'>
                    <button onClick={() => props.setCurrentPage ("SignUp")}>
                        Sign Up
                    </button>
                </li>

            </ul>
        </nav>

    )
}

export default Nav;