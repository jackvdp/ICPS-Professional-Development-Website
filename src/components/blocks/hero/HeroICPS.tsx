import { FC } from 'react';
import { fadeInAnimate, slideInDownAnimate, zoomInAnimate } from 'utils/animation';
import NextLink from 'components/reuseable/links/NextLink';

const Hero7: FC = () => {
  return (
    <section className="wrapper bg-gradient-primary">
      <div className="container py-14 pt-md-15 pb-md-18">
        <div className="row text-center">
          <div className="col-lg-9 col-xxl-7 mx-auto">
            <h2 className="display-1 mb-4" style={zoomInAnimate('500ms')}>
                Elevating Skills Through Collaboration
            </h2>

            <p className="lead fs-24 lh-sm px-md-5 px-xl-15 px-xxl-10 mb-7" style={zoomInAnimate('500ms')}>
            We are a leading professional development members network for the public sector that believes in the transformative power of skill enhancement and shared knowledge.
            </p>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <span style={slideInDownAnimate('900ms')}>
            <Button href="benefits" title="Discover Member Benefits" className="btn btn-lg btn-primary rounded-pill mx-1" />
          </span>

          <span style={slideInDownAnimate('1200ms')}>
            <NextLink href="/join" title="Sign up" className="btn btn-lg btn-outline-primary rounded-pill mx-1" />
          </span>
        </div>

        <div className="row mt-12" style={fadeInAnimate('1600ms')}>
          <div className="col-lg-8 mx-auto">
            <figure>
              <img
                alt=""
                className="img-fluid"
                src="/img/illustrations/i12.png"
                srcSet="/img/illustrations/i12@2x.png 2x"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero7;

const Button: FC<ButtonProps> = ({ href, title, className }) => {
    const scrollToElement = (elementId: string) => {
        const targetElement = document.getElementById(elementId);
        if (targetElement) {
          const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - 100;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
      };
  
    return (
        <button
          onClick={() => scrollToElement(href)}
          className={className}
          data-target-id={href}
        >
          {title}
        </button>
      );
  };

interface ButtonProps {
    href: string;
    title: string;
    className?: string;
}