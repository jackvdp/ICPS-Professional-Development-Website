import { Fragment } from 'react';
import type { NextPage } from 'next';
import { NavbarICPS } from 'components/blocks/navbar';
import PageProgress from 'components/common/PageProgress';
import { HeroICPS } from 'components/blocks/hero';
import { AboutICPSHome } from 'components/blocks/about';

const Home: NextPage = () => {
  return (
    <Fragment>
      <PageProgress />

      <NavbarICPS/>

      <HeroICPS />

      <AboutICPSHome />

    </Fragment>
  );
};

export default Home;
