import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { Navbar } from 'components/blocks/navbar';
import { Footer } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import WebinarMain from 'components/blocks/webinar/WebinarMain';
import WebinarSidebar from 'components/blocks/webinar/WebinarSidebar';
import { CTAJoin } from 'components/blocks/call-to-action';
import { useAuth } from 'auth/AuthProvider';

const BlogTwo: NextPage = () => {

  const { isLoggedIn } = useAuth()

  return (
    <Fragment>
      <PageProgress />

      {/* ========== header section ========== */}
      <Navbar />

      <main className="content-wrapper">
        {/* ========== title section ========== */}
        <section className="overflow-hidden">
          <div className="wrapper bg-soft-primary">
            <div className="container py-12 py-md-16 text-center">
              <div className="row">
                <div className="col-md-7 col-lg-6 col-xl-5 mx-auto">
                  <h1 className="display-1 mb-3">Webinars</h1>
                  <p className="lead px-lg-5 px-xxl-8 mb-1">
                  Explore diverse webinars for professional growth, led by industry experts, delivering practical insights and applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper bg-light">
          <div className="container py-14 py-md-16">
            <div className="row gx-lg-8 gx-xl-12">
              {/* ========== blog details section ========== */}
              <div className="col-lg-8">
                <WebinarMain />
              </div>

              {/* ========== sidebar section ========== */}
              <aside className="col-lg-4 sidebar mt-8 mt-lg-6">
                <WebinarSidebar />
              </aside>
            </div>
          </div>
        </section>

        { !isLoggedIn && <CTAJoin />}
      </main>

      {/* ========== footer section ========== */}
      <Footer />
    </Fragment>
  );
};

export default BlogTwo;

export interface WebinarProp {
  id: number;
  time: string;
  date: string;
  image: string;
  title: string;
  subtitle: string
  description: string
  learning: string
  youtubeVideo: string
}