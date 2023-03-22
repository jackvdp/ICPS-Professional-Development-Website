import Image from 'next/image';
import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { FooterICPS } from 'components/blocks/footer';
import { NavbarICPS } from 'components/blocks/navbar';
import { BlogCard2, BlogCard3 } from 'components/reuseable/blog-cards';
import PageProgress from 'components/common/PageProgress';
// -------- data -------- //
import articles from 'data/articles/articles'

const BlogOne: NextPage = () => {
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header section ========== */}
      <NavbarICPS />

      <main className="content-wrapper">
        {/* ========== title section ========== */}
        <section className="wrapper bg-soft-primary">
          <div className="container pt-10 pb-19 pt-md-14 pb-md-20 text-center">
            <div className="row">
              <div className="col-md-7 col-lg-6 col-xl-5 mx-auto">
                <h1 className="display-1 mb-3">Articles</h1>
                <p className="lead px-lg-5 px-xxl-8">
                    Discover Expert Perspectives: In-Depth Articles Exploring the World of Professional Development
                </p>
              </div>
            </div>
          </div>
        </section>

        

        <section className="wrapper bg-light">
          <div className="container pb-14 pb-md-16">
            <div className="row">
              <div className="col-lg-10 mx-auto">

                {/* Latest item is big */}
                { 
                    articles.length > 0 && (
                        <div className="blog classic-view mt-n17">
                            <BlogCard2
                                link={articles[0].link}
                                category={articles[0].category}
                                title={articles[0].title}
                                description={articles[0].description}
                                date={articles[0].date}
                                cardTop={
                                <figure className="card-img-top overlay overlay-1 hover-scale">
                                    <a className="link-dark" href={articles[0].link}>
                                    <Image width={960} height={600} src={articles[0].image} alt="blog" layout="responsive" />
                                    <span className="bg" />
                                    </a>

                                    <figcaption>
                                    <h5 className="from-top mb-0">Read More</h5>
                                    </figcaption>
                                </figure>
                                }
                            />
                        </div>
                    )
                }

                {/* Other items are smaller */}
                {
                    articles.length > 1 && (
                        <div className="blog grid grid-view">
                            <div className="row isotope gx-md-8 gy-8 mb-8">
                                {articles.slice(1).map((item) => (
                                <BlogCard3 {...item} key={item.id} />
                                ))}
                            </div>
                        </div>
                    )
                }
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <FooterICPS />
    </Fragment>
  );
};

export default BlogOne;
