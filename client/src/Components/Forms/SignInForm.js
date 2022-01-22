import React from 'react';


class SignInForm extends Component {
 
    submit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div class="row">
                <h1 className="signIn">Sign In</h1>
                <form class="col s12" onSubmit={this.submitSignIn.bind(this)}>
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
                            </div>
                        </div>
                    </div>
                    <button className='btn waves-effect waves-light' type='submit' name='action'>Sign In
                    <i class='material-icons right'>send</i>
                    </button>
                </form>
            </div>
        );
    }
}

export default SignInForm;