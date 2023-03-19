import { Fragment } from 'react';
import type { NextPage } from 'next';
import { NavbarICPS } from 'components/blocks/navbar';
import PageProgress from 'components/common/PageProgress';
import { HeroICPS } from 'components/blocks/hero';
import { AboutICPSHome } from 'components/blocks/about';
import { FooterICPS } from 'components/blocks/footer';

const Home: NextPage = () => {
  return (
    <Fragment>
      <PageProgress />

      <NavbarICPS/>

      <HeroICPS />

      <AboutICPSHome />

      <FooterICPS />

    </Fragment>
  );
};

export default Home;
