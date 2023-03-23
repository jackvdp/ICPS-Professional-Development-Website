import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { NavbarICPS } from 'components/blocks/navbar';
import { FooterICPS } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import { ContactICPS } from 'components/blocks/contact';

const ServicesTwo: NextPage = () => {

  return (
    <Fragment>
      <PageProgress />

      <NavbarICPS />

      <main className="content-wrapper">

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
