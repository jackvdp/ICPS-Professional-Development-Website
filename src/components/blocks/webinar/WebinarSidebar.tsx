import dayjs from 'dayjs';
import Link from 'next/link';
import { FC, Fragment } from 'react';
// -------- custom component -------- //
import FigureImage from '../../reuseable/FigureImage';
import NextLink from 'components/reuseable/links/NextLink';
// -------- data -------- //
import webinars from 'data/webinars/webinars';
import { WebinarProp } from '../../../../pages/webinars';

const BlogSidebar: FC = () => {
  return (
    <Fragment>

      {/* ========== Upcoming Webinars ========== */}
      <div className="widget">
        <h4 className="widget-title mb-3">Upcoming Webinars</h4>

        <ul className="image-list">
          {webinars
          .filter(({ date }) => new Date(date) >= new Date())
          .map(({ id, time, title, image, date, description, subtitle, learning, youtubeVideo}) => (
            <Webinar 
            key={id}
            id={id}
            time={time}
            title={title}
            image={image}
            date={date}
            subtitle={subtitle}
            description={description}
            learning={learning}
            youtubeVideo={youtubeVideo}
            />
          ))}
        </ul>
      </div>

      {/* ========== Previous webinars ========== */}
      <div className="widget">
        <h4 className="widget-title mb-3">Previous Webinars</h4>

        <ul className="image-list">
          {webinars
          .filter(({ date }) => new Date(date) < new Date())
          .map(({ id, time, title, image, date, description, subtitle, learning, youtubeVideo }) => (
            <Webinar 
            key={id}
            id={id}
            time={time}
            title={title}
            image={image}
            date={date}
            subtitle={subtitle}
            description={description}
            learning={learning}
            youtubeVideo={youtubeVideo}
            />
          ))}
        </ul>
      </div>

    </Fragment>
  );
};

export default BlogSidebar;

const Webinar: FC<WebinarProp> = ({ id, time, title, image, date }) => {

  const link = '/webinars/' + id

  return(
    <li key={id}>
      <NextLink title={<FigureImage width={100} height={100} className="rounded" src={image} />} href={link} />

      <div className="post-content">
        <h6 className="mb-2">
          <NextLink className="link-dark" title={title} href={link} />
        </h6>

        <ul className="post-meta">
          <li className="post-date">
            <i className="uil uil-calendar-alt" />
            <span>{dayjs(date).format('DD MMM YYYY')}</span>
          </li>

          <li className="post-comments">
            <Link href="#">
              <a>
                {time}
              </a>
            </Link>
          </li>
        </ul>

      </div>
    </li>
  )
}

