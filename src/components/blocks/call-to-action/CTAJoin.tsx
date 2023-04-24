import { FC } from 'react';
import NextLink from 'components/reuseable/links/NextLink';

const CTA3: FC = () => {
  return (
    <section
      className="wrapper image-wrapper bg-auto no-overlay bg-image text-center mb-14 bg-map"
      style={{ backgroundImage: 'url(/img/map.png)' }}
    >
      <div className="container py-md-18">
        <div className="row">
          <div className="col-lg-6 col-xl-5 mx-auto">
            <h2 className="display-4 mb-3 text-center">Not already a member?</h2>
            <h2 className="display-4 mb-3 text-center">Join Now.</h2>
            
            <p className="lead mb-5 px-md-16 px-lg-3">
              Get regular updates about upcoming webinars, new articles and connect with public sector colleagues across the globe. 
            </p>
            <NextLink href="/join" title="Join Us" className="btn btn-lg btn-primary rounded-pill mx-1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA3;
