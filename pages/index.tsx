import { Fragment } from 'react';
import type { NextPage } from 'next';
import { Navbar } from 'components/blocks/navbar';
import PageProgress from 'components/common/PageProgress';
import { Hero } from 'components/blocks/hero';
import { AboutHome } from 'components/blocks/about';
import { Footer } from 'components/blocks/footer';
import { CTAJoin } from 'components/blocks/call-to-action';

const Home: NextPage = () => {
  return (
    <Fragment>
      <PageProgress />

      <Navbar/>

      <Hero />

      <AboutHome />

      <CTAJoin />

      <Footer />

    </Fragment>
  );
};

export default Home;
