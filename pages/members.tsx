import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { NavbarICPS } from 'components/blocks/navbar';
import { FooterICPS } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import { AboutICPSMembers } from 'components/blocks/about';
import { ContactICPS } from 'components/blocks/contact';

const ServicesTwo: NextPage = () => {

  return (
    <Fragment>
      <PageProgress />

      <NavbarICPS />

      <main className="content-wrapper">
        {/* ========== page title section ========== */}
        <section
          className="wrapper image-wrapper bg-image bg-overlay text-white"
          style={{ backgroundImage: 'url(/img/photos/bg1.jpg)' }}
        >
          <div className="container pt-19 pt-md-21 pb-18 pb-md-20 text-center">
            <div className="row">
              <div className="col-md-10 col-lg-8 col-xl-7 col-xxl-6 mx-auto">
                <h1 className="display-1 text-white mb-3">Membership</h1>
                <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                Elevate your public sector career with our Professional Development Network — enhance skills, connect, and unlock opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="container py-14 py-md-16">
            <AboutICPSMembers />
        </div>

        <div className="container py-14 py-md-16">
            <ContactICPS 
            title='Become a member' 
            message='Complete the form below to become a member of ICPS’s professional development network.'
            showMessage={false}
            sendButtonTitle='Sign Up'
            />
        </div>
        
      </main>

      {/* ========== footer section ========== */}
      <FooterICPS />
    </Fragment>
  );
};

export default ServicesTwo;
