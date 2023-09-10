import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { Navbar } from 'components/blocks/navbar';
import { Footer } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import { Contact } from 'components/blocks/contact';

const ServicesTwo: NextPage = () => {

  return (
    <Fragment>
      <PageProgress />

      <Navbar />

      <main className="content-wrapper bg-gray">

        <div className="container py-14 py-md-16">
            <Contact
            title='Become a member' 
            message='Complete the form below to become a member of ICPS’s professional development network.'
            showMessage={false}
            sendButtonTitle='Sign Up'
            signUp={true}
            />
        </div>
        
      </main>

      {/* ========== footer section ========== */}
      <Footer />
    </Fragment>
  );
};

export default ServicesTwo;
