import { FC } from 'react';
// -------- custom hook -------- //
import useLightBox from 'hooks/useLightBox';
// -------- custom component -------- //
import FigureImage from 'components/reuseable/FigureImage';
// -------- data -------- //
import { WebinarProp } from '../../../pages/webinars';

const BlogDetailsTemplate: FC<WebinarProp> = (props) => {
  // used for image lightbox
  useLightBox();

  return (
    <div className="card">
      <FigureImage width={960} height={600} src={props.image} className="card-img-top" />

      <div className="card-body">
        <div className="classic-view">
          <article className="post">
            <div className="post-content mb-5">
              <p className="h1 mb-6">{props.title + ": " + props.subtitle}</p>
              <p className="h4">Date: {props.date}</p>
              <p className="h4 mb-8">Time: {props.time}</p>
              <div className="mb-8"
                dangerouslySetInnerHTML={{
                  __html: props.description,
                }}
              ></div>
              <p className="h4 mb-8">Learning Objectives:</p>
              <div
                dangerouslySetInnerHTML={{
                  __html: props.learning,
                }}
              ></div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsTemplate;