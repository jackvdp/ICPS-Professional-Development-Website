import { Fragment } from 'react';
import type { NextPage } from 'next';
import { NavbarICPS } from 'components/blocks/navbar';
import PageProgress from 'components/common/PageProgress';

import NextLink from 'components/reuseable/links/NextLink';


const Home: NextPage = () => {
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header section ========== */}
      <header className="wrapper mb-1">
      <NavbarICPS
        info
        navClassName="navbar navbar-expand-lg center-nav"
        button={<NextLink title="Join" href="#" className="btn btn-sm btn-primary rounded" />}
      />
      </header>

    </Fragment>
  );
};

export default Home;
