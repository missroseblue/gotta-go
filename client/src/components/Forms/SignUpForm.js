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
                            <input id="password" type="password" className="validate" />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email"  type="email" className="validate" />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            This is an inline input field:
                            <div className="input-field inline">
                                <input id="email_inline" type="email" className="validate" />
                                <label htmlFor="email_inline">Email</label>
                                <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
                            </div>
                        </div>
                    </div>
                    <button className='btn waves-effect waves-light' type='submit' name='action'>Submit
                    <i className='material-icons right'>send</i>
                    </button>
                </form>
            </div>
        );
    }

export default SignUpForm;