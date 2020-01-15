import React, { Fragment } from 'react';

const MainLayout = () => {
    return (
        <Fragment>
            {/* start-preload */}

            {/* end-preload */}


            {/* start-mobile-menu */}

            {/* end-mobile-menu */}


            {/* start-main-content */}
            <div class="container">
                <div class="row">
                    {/* start-left-sidebar */}
                    <div class="col-md-3">
                    </div>
                    {/* end-left-sidebar */}

                    {/* start-right-content */}
                    <div class="col-md-9 col-md-offset-3">
                    </div>
                    {/* end-right-content */}
                </div>
            </div>
            {/* end-main-content */}


            {/* start-footer */}

            {/* end-footer */}
        </Fragment>
    );
}

export default MainLayout;
