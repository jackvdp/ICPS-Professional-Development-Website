import Plyr from 'plyr-react';
import Image from 'next/image';
import { FC, Fragment } from 'react';
// -------- custom component -------- //
import Carousel from 'components/reuseable/Carousel';
import Pagination from 'components/reuseable/Pagination';
import { BlogCard2, BlogCard3 } from 'components/reuseable/blog-cards';


const BlogTemplate: FC = () => {
  return (
    <Fragment>
      <div className="blog classic-view">

      <Plyr
        options={{ loadSprite: true, clickToPlay: true }}
        source={{ type: 'video', sources: [{ src: 'VPv0xI9mHp0', provider: 'youtube' }] }}
      />
      <div className='mt-6'>
        <p>All our webinars are interactive, allowing attendees to ask questions and engage with the speaker. You will have the chance to network and connect with other professionals in your field too.</p>
        <p>Mark your calendar and register now to reserve your spot at our upcoming webinars. If you are unable to attend, don't worry, members can access all our webinars recording after the event.</p>
        <p>We are constantly adding new webinars to our schedule, so be sure to check this page regularly for updates and to see what's coming up next.</p>
        <p>We look forward to seeing you at our upcoming webinars and helping you take your professional development to the next level!</p>
      </div>
      
      </div>

    </Fragment>
  );
};

export default BlogTemplate;
