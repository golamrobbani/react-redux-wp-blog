import React, { Fragment } from 'react';

const Logo = () => {
    return (
        <Fragment>
            <div class="logo">
                <a href="index.html">
                    <img src="images/logo-light.png" alt="Logo" class="logo-light" />
                    <img src="images/logo.png" alt="Logo" />
                </a>
            </div>
        </Fragment>
    );
}

export default Logo;
