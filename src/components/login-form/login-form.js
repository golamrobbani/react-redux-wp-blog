import React, { Fragment } from 'react';



const Login = () => {
    return (
        <Fragment>

            <div>

                <form action="#" method="post" class="contact" style={{marginTop: "10px"}}>

                    <div class="contact-item">
                        <label>Username</label>
                        <input name="email" value="" type="email" />
                    </div>
                    <div class="contact-item">
                        <label>Password</label>
                        <input id="password" name="password" value="" type="text" />
                    </div>

                    <div class="contact-item form-submit">
                        <input name="submit" type="submit" id="submit" class="submit" value="Submit" />
                    </div>
                </form>

            </div>


        </Fragment>
    );
}

export default Login;
