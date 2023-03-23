import { FC } from 'react';
import AccordionList from 'components/common/AccordionList';

const About3: FC = () => {
  return (
    <div className="row gy-10 gy-sm-13 gx-lg-3 align-items-center">
      <div className="col-md-8 col-lg-6 offset-lg-1 order-lg-2 position-relative">
        <div
          className="shape rounded-circle bg-line primary rellax w-18 h-18"
          style={{ top: '-2rem', right: '-1.9rem' }}
        />

        <div
          className="shape rounded bg-soft-primary rellax d-md-block"
          style={{ width: '85%', height: '90%', left: '-1.5rem', bottom: '-1.8rem' }}
        />

        <figure className="rounded">
          <img src="/img/photos/about9.jpg" srcSet="/img/photos/about9@2x.jpg 2x" alt="about" />
        </figure>
      </div>

      <div className="col-lg-5">
        <h2 className="fs-16 text-uppercase text-line text-primary mb-3">Members</h2>
        <p className="display-7 mb-7">{mainText}</p>
        <AccordionList items={accordions}/>
      </div>
    </div>
  );
};

export default About3;

const mainText = "We are excited to have you join our community of like-minded professionals who are committed to continuous learning and growth in their careers. As a member of our network, you will have access to a wide range of tools and resources to help you excel in your field and reach your full potential."

const accordions = [
  {
    no: 'One',
    expand: true,
    heading: 'Access to exclusive webinars',
    body: "As a member, you'll have the opportunity to participate in webinars led by industry experts and gain valuable insights and knowledge."
  },
  {
    no: 'Two',
    expand: false,
    heading: 'Access to research topics',
    body: 'Stay up-to-date with the latest research in your field and explore new topics to deepen your understanding and improve your skills.'
  },
  {
    no: 'Three',
    expand: false,
    heading: 'Access to a community of like-minded professionals',
    body: 'Share ideas, ask questions, and network with people from a variety of industries and backgrounds.'
  },
  {
    no: 'Four',
    expand: false,
    heading: 'Opportunities for mentorship',
    body: 'Learn from experienced professionals and get guidance and support as you navigate your career.'
  },
  {
    no: 'Five',
    expand: false,
    heading: 'Career resources',
    body: "Whether you're looking for a new job or want to advance in your current role, we have a variety of resources to help you achieve your career aspirations."
  },
  {
    no: 'Six',
    expand: false,
    heading: 'Preferential rates on selected training courses',
    body: 'You will have access to discounted rates on selected training courses, allowing you to make the most of your budget while investing in your professional development.'
  }
];