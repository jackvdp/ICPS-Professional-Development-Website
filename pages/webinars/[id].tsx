import { NextPage } from 'next';
import { Fragment, useEffect } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { Navbar } from 'components/blocks/navbar';
import { Footer } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import NextLink from 'components/reuseable/links/NextLink';
import WebinarDetails from 'components/blocks/webinar/WebinarDetails';
import { WebinarProp } from '.';
import getWebinar from 'data/webinars/getWebinars';
import { Contact } from 'components/blocks/contact';
import webinars from 'data/webinars/webinars';
import { useRouter } from 'next/router';
import { useAuth } from 'auth/AuthProvider';

interface Params extends ParsedUrlQuery {
  id: string;
}

const BlogDetailsOne: NextPage<WebinarProp> = (props) => {

  const router = useRouter();
  const { isLoggedIn } = useAuth()

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/join-to-access');
    }
  }, [isLoggedIn]);

  return (
    <Fragment>
      <PageProgress />

      {/* ========== header section ========== */}
      <Navbar />

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
                  <WebinarDetails 
                  id={props.id}
                  image={props.image} 
                  title={props.title}
                  subtitle={props.subtitle}
                  date={props.date}
                  time={props.time}
                  description={props.description}
                  learning={props.learning}
                  youtubeVideo={props.youtubeVideo} />
                </div>
              </div>
            </div>
          </div>

          <div className="container pb-14 pb-md-16">
            { (Date.parse(props.date) >= Date.now()) && (
              <Contact
                title='Sign up to the webinar' 
                message='Complete the form below to sign up to this webinar.'
                showMessage={false}
                sendButtonTitle='Sign Up'
                signUp={false}
              />
            )}
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer />
    </Fragment>
  );
};



export const getStaticPaths: GetStaticPaths = async () => {
// Replace this with the logic to get all article ids
    const webinarIds = webinars.map((webinar) => webinar.id);

    // Generate an array of paths with the article ids
    const paths = webinarIds.map((id) => ({
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