import React, { Fragment } from 'react';
import Layout from '../../layout/index'

import SinglePost from '../../features/single-post'
import Pagination from '../../components/pagination'
import RelatedPost from '../../components/related-post'
import AuthorBox from '../../components/author-box'
import Comments from '../../components/comment'
import ContactForm from '../../components/contact-form'

const Index = () => {
    return (
        <Fragment>
            <Layout>
                <SinglePost />
                <Pagination/>
                <RelatedPost/>
                <AuthorBox/>
                <Comments/>
                <ContactForm/>
            </Layout>
        </Fragment>
    );
}

export default Index;
