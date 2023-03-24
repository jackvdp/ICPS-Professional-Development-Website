import { FC } from 'react';
import Image from 'next/image';
import NextLink from 'components/reuseable/links/NextLink';
// -------- data -------- //

const About: FC = () => {
  return (
    <section id="about">
      <div className="wrapper bg-gray">
        <div className="container py-14 py-md-16">
          <div className="row gx-md-8 gx-xl-12 gy-6 align-items-center">
            <div className="col-md-8 col-lg-6 order-lg-2 mx-auto">
              <div className="img-mask mask-2">
                <Image width={1000} height={850} src="/img/photos/Westminster.jpeg" alt="An image of Westminster" />
              </div>
            </div>

            <div className="col-lg-6">
              <h2 className="display-5 mb-6">About Us</h2>
              <p>
              The International Centre for Parliamentary Studies exists to promote effective policy making and good governance through better interaction between Parliaments, Governments and other stakeholders in society.
              </p>
              <p>
              The Centre's primary focus is the empowerment of Human Capital through Capacity Building. To this effect, the Centre organises a range of Training Programmes, Conferences and Policy Discussions to address current public policy issues on the International Stage, in the European Union and the UK. These provide a forum for policy discussion, debate, networking and sharing of best practices.
              </p>
              <p>
              The International Centre for Parliamentary Studies is a research institution of the United Nations Public Administration Network (UNPAN), and also works in partnership with the United Nations Development Programme (UNDP) and the Association of European Election Officials (ACEEEO).
ICPS publishes The Government Gazette, a quarterly magazine that brings a unique and rounded perspective to the major issues of the day affecting good governance.
              </p>
              <p>
              We also offer international consultancy services across a range of areas, including electoral affairs, regulation, governance, public sector reform, health & security.
              </p>
              <p>
              The Centre operates from its head office in the UK and has regional offices in Mauritius and Brussels. It has a large team of public policy researchers, training experts and internationally renowned experts and speakers.
              </p>

              <NextLink title="Learn More" href="https://parlicentre.org/training/international" className="btn btn-primary rounded-pill mt-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
