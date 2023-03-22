import { NextPage } from 'next';
import { Fragment } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { NavbarICPS } from 'components/blocks/navbar';
import { FooterICPS } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import NextLink from 'components/reuseable/links/NextLink';
import BlogDetailsTemplate from 'components/common/BlogDetailsTemplate';
import articles from 'data/articles/articles';
import { WebinarProp } from '.';
import getWebinar from 'data/webinars/getWebinars';
import { ContactICPS } from 'components/blocks/contact';

interface Params extends ParsedUrlQuery {
  id: string;
}

const BlogDetailsOne: NextPage<WebinarProp> = (props) => {
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header section ========== */}
      <NavbarICPS />

      <main className="content-wrapper ">
        {/* ========== title section ========== */}
        <section className="wrapper bg-soft-primary">
          <div className="container pt-10 pb-19 pt-md-14 pb-md-20 text-center">
            <div className="row">
              <div className="col-md-10 col-xl-8 mx-auto">
                <div className="post-header">
                  <div className="post-category text-line">
                    <NextLink href="#" className="hover" title='Webinar' />
                  </div>

                  <h1 className="display-1 mb-4">{props.title}</h1>

                  <ul className="post-meta mb-5">
                    <li className="post-date">
                      <i className="uil uil-calendar-alt" />
                      <span>{props.date} – {props.time}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== details section ========== */}
        <section className="wrapper bg-light">
          <div className="container pb-14 pb-md-16">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="blog single mt-n17">
                  <BlogDetailsTemplate 
                  id={props.id.toString()} 
                  link=''
                  category='Webinar' 
                  image={props.image} 
                  title={props.title + ': ' + props.subtitle} 
                  description='Webinar' 
                  date={props.date} 
                  content={props.description} />
                </div>
              </div>
            </div>
          </div>

          <div className="container pb-14 pb-md-16">
            <ContactICPS 
            title='Sign up to the webinar' 
            message='Complete the form below to sign up to this webinar.'
            showMessage={false}
            sendButtonTitle='Sign Up'
            />
        </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <FooterICPS />
    </Fragment>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
// Replace this with the logic to get all article ids
    const articleIds = articles.map((article) => article.id);

    // Generate an array of paths with the article ids
    const paths = articleIds.map((id) => ({
        params: { id: id.toString() },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<WebinarProp, Params> = ({ params }) => {
    const webinarId = params?.id;

    if (webinarId) {
        const webinarData = getWebinar(parseInt(webinarId));

        if (webinarData) {
        return {
            props: webinarData ,
        };
        }
    }

    // Add this return statement
    return {
        props: {},
        notFound: true,
    };
};

export default BlogDetailsOne;