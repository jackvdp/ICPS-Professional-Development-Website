import webinars from './webinars';

const getWebinar = (id: number) => {
  return webinars.find(webinar => webinar.id == id)
};

export default getWebinar