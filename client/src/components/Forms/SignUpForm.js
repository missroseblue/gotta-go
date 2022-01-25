import React from 'react';


<<<<<<< HEAD
class SignUpForm extends Component {
 
    submit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div class="row">
                <h1 className="signUp">Become A Member</h1>
                <form class="col s12" onSubmit={this.submitSignUp.bind(this)}>
                    <div class="row">
                        <div class="input-field col s6">
                            <input id="firstName" ref="firstName" type="text" class="validate" />
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        <div class="input-field col s6">
                            <input id="lastName" ref="lastName" type="text" class="validate" />
=======
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
>>>>>>> 6283d588485231d1dcdb8e13396149ad606244cb
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                    </div>

<<<<<<< HEAD
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="password" type="password" class="validate" />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="email" ref="email" type="email" class="validate" />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col s12">
                            This is an inline input field:
                            <div class="input-field inline">
                                <input id="email_inline" type="email" class="validate" />
                                <label for="email_inline">Email</label>
                                <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>
=======
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
>>>>>>> 6283d588485231d1dcdb8e13396149ad606244cb
                            </div>
                        </div>
                    </div>
                    <button className='btn waves-effect waves-light' type='submit' name='action'>Submit
<<<<<<< HEAD
                    <i class='material-icons right'>send</i>
=======
                    <i className='material-icons right'>send</i>
>>>>>>> 6283d588485231d1dcdb8e13396149ad606244cb
                    </button>
                </form>
            </div>
        );
    }
<<<<<<< HEAD
}
=======
>>>>>>> 6283d588485231d1dcdb8e13396149ad606244cb

export default SignUpForm;