import { FC } from 'react';
import Accordion from 'components/reuseable/accordion';
// -------- data -------- //

const AccordionList: FC = () => {
  return (
    <div className="accordion accordion-wrapper" id="accordionExample">
      {accordions.map((item) => (
        <Accordion type="plain" key={item.no} {...item} />
      ))}
    </div>
  );
};

export default AccordionList;

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