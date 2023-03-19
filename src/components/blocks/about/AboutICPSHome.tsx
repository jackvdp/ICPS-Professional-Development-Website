import { FC } from 'react';
import Megaphone from 'icons/lineal/Megaphone';
import { Tiles5 } from 'components/elements/tiles';
import ListColumn from 'components/reuseable/ListColumn';
// -------- data -------- //
import { aboutList2 } from 'data/about';

const About6: FC = () => {
  return (
    <section className="wrapper bg-light angled upper-end lower-end">
    <div className="container py-14 py-md-16">
    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
      <div className="col-lg-6 position-relative order-lg-2">
        <Tiles5 />
      </div>

      <div className="col-lg-6" id="benefits">
        <Megaphone className="icon-svg-md mb-4" />

        <h2 className="display-4 mb-3">Welcome to the Professional Development Members' Network!</h2>

        <p className="lead fs-lg">
        We understand the importance of continuously learning and growing in your career, which is why we've created a platform for professionals, working in public service, to connect, collaborate, and share knowledge. Our goal is to provide you with the tools and resources you need to excel in your field and reach your full potential.
        </p>

        <p className="mb-6">
        Here are a few of the benefits you'll enjoy as a member of our network:
        </p>

        <ListColumn rowClass="gx-xl-8 mb-5" list={aboutPoints} />

        <p className="mb-6">
        Join now and take the first step towards reaching your full potential. Sign up to gain access to all the tools and resources we have to offer and connect with other professionals today!
        </p>

        <p className="mb-6">
        Are you ready to enhance your professional growth? Sign up to become a member of the Professional Development Network now!
        </p>
      </div>
    </div>
    </div>
        </section>
    
  );
};

const aboutPoints = [
    ["Access to a community of like-minded professionals: Share ideas, ask questions, and network with people from a variety of industries and backgrounds.",
"Customized learning opportunities: With a wide range of online courses, webinars, and other learning resources, you can tailor your professional development to your specific needs and goals.",],
["Opportunities for mentorship: Learn from experienced professionals and get guidance and support as you navigate your career.",
"Career resources: Whether you're looking for a new job or want to advance in your current role, we have a variety of resources to help you achieve your career aspirations.",]
]

export default About6;
