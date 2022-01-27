import React from 'react';


function LogInForm() {
    //this.email = React.createRef();
        return (
            <div className="row">
                <h1 className="logIn">Log In</h1>
                <form className="col s12" >
                    
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
                
                    <button className='btn waves-effect waves-light' type='submit' name='action'>Sign In
                    </button>
                </form>
            </div>
        );
    }


export default LogInForm;