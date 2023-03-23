import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { NavbarICPS } from 'components/blocks/navbar';
import { FooterICPS } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import BlogTemplate from 'components/common/BlogTemplate';
import BlogSidebar from 'components/reuseable/BlogSidebar';
import { CTA3 } from 'components/blocks/call-to-action';

const BlogTwo: NextPage = () => {
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header section ========== */}
      <NavbarICPS />

      <main className="content-wrapper">
        {/* ========== title section ========== */}
        <section className="section-frame overflow-hidden">
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
                <BlogTemplate />
              </div>

              {/* ========== sidebar section ========== */}
              <aside className="col-lg-4 sidebar mt-8 mt-lg-6">
                <BlogSidebar />
              </aside>
            </div>
          </div>
        </section>

        <CTA3 />
      </main>

      {/* ========== footer section ========== */}
      <FooterICPS />
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
}