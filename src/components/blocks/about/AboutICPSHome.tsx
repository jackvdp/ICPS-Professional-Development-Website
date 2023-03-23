import { FC } from 'react';
import Megaphone from 'icons/lineal/Megaphone';
import { Tiles5 } from 'components/elements/tiles';
import AccordionList from 'components/common/AccordionList';
import LightBulb from 'icons/lineal/LightBulb';

const About6: FC = () => {
  return (
    <section className="wrapper bg-light upper-end lower-end">
      <div className="container py-14 py-md-16">
        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
          <div className="col-lg-6 position-relative order-lg-2">
            <Tiles5 />
          </div>

          <div className="col-lg-6" id="benefits">
            <LightBulb className="icon-svg-md mb-4" />

            <h2 className="display-4 mb-6">Welcome to the Professional Development Members' Network!</h2>

            <p>
            We understand the importance of continuously learning and growing in your career, which is why we've created a platform for professionals, working in public service, to connect, collaborate, and share knowledge. Our goal is to provide you with the tools and resources you need to excel in your field and reach your full potential.
            </p>

            <p className="mb-6">
            Here are a few of the benefits you'll enjoy as a member of our network:
            </p>

            <div className="mb-6">
            <AccordionList items={accordionProps} />
            </div>

            <p className="mb-6">
            Join now and take the first step towards reaching your full potential. Sign up to gain access to all the tools and resources we have to offer and connect with other professionals today!
            </p>

            <p className="">
            Are you ready to enhance your professional growth? Sign up to become a member of the Professional Development Network now!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const accordionProps = [
  {
    no: "1",
    expand: true,
    heading: "Community of like-minded professionals",
    body: "Access a community and share ideas, ask questions, and network with people from a variety of industries and backgrounds.",
  },
  {
    no: "2",
    expand: false,
    heading: "Opportunities for mentorship",
    body: "Learn from experienced professionals and get guidance and support as you navigate your career.",
  },
  {
    no: "3",
    expand: false,
    heading: "Customized learning opportunities",
    body: "With a wide range of online courses, webinars, and other learning resources, you can tailor your professional development to your specific needs and goals.",
  },
  {
    no: "4",
    expand: false,
    heading: "Customized learning opportunities",
    body: "With a wide range of online courses, webinars, and other learning resources, you can tailor your professional development to your specific needs and goals.",
  }
];

export default About6;