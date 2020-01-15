import React, { Fragment } from 'react';

const MainLayout = () => {
    return (
        <Fragment>

            <div id="preload">
                <div class="kd-bounce">
                    <div></div>
                    <div></div>
                </div>
            </div>

            <div class="mobile">
                <div class="container">
                    <div class="menu-mobile">
                        <span class="item item-1"></span>
                        <span class="item item-2"></span>
                        <span class="item item-3"></span>
                    </div>
                    <div class="logo">
                        <a href="index.html">
                            <img src="images/logo-mobile.png" alt="Logo" />
                        </a>
                    </div>
                </div>
            </div>

            <div class="hide-menu"></div>


            <div class="container">
                <div class="row">

                
                <div class="col-md-3">
                
                </div>


                <div class="col-md-9 col-md-offset-3">
                
                
                </div>


                



                </div>
            </div>
        </Fragment>

    );
}

export default MainLayout;
