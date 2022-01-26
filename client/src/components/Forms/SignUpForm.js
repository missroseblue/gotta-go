import React from 'react';


function SignUpForm() {
 
    // submit(event) {
    //     event.preventDefault();
    // }
        return (
            <div className="row">
                <h1 className="signUp">Become A Member</h1>
                <form className="col s12" >
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="firstName"  type="text" className="validate" />
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="lastName"  type="text" className="validate" />
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email"  type="email" className="validate" />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="password" type="password" className="validate" />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
    
                    <button className='btn waves-effect waves-light' type='submit' name='action'>Submit
                    </button>
                </form>
            </div>
        );
    }

export default SignUpForm;