import React, { Fragment } from 'react';
import Layout from '../../layout/index'

import Post from '../../features/post'

const Index = () => {
    return (
        <Fragment>
            <Layout>
                <h3>I am about</h3>
                <Post />
            </Layout>
        </Fragment>
    );
}

export default Index;
