import { FC } from 'react';

interface ContactFormProp {
  showMessage:boolean
  sendButtonTitle: string
}

const ContactForm: FC<ContactFormProp> = ({showMessage, sendButtonTitle}) => {
  return (
    <form className="contact-form needs-validation" method="post">
      <div className="messages"></div>
      <div className="row gx-4">
        <div className="col-md-6">
          <div className="form-floating mb-4">
            <input required type="text" name="name" id="form_name" placeholder="Jane" className="form-control" />
            <label htmlFor="form_name">First Name *</label>
            <div className="valid-feedback"> Looks good! </div>
            <div className="invalid-feedback"> Please enter your first name. </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-floating mb-4">
            <input required type="text" name="surname" placeholder="Doe" id="form_lastname" className="form-control" />
            <label htmlFor="form_lastname">Last Name *</label>
            <div className="valid-feedback"> Looks good! </div>
            <div className="invalid-feedback"> Please enter your last name. </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-floating mb-4">
            <input
              required
              type="email"
              name="email"
              id="form_email"
              className="form-control"
              placeholder="jane.doe@example.com"
            />
            <label htmlFor="form_email">Email *</label>
            <div className="valid-feedback"> Looks good! </div>
            <div className="invalid-feedback"> Please provide a valid email address. </div>
          </div>
        </div>

        {
          !showMessage && (
            <div className="col-md-6">
              <div className="form-floating mb-4">
                <input required type="tel" name="Job title" placeholder="01234567891" id="form_phone" className="form-control" />
                <label htmlFor="form_phone">Phone *</label>
                <div className="valid-feedback"> Looks good! </div>
                <div className="invalid-feedback"> Please enter your phone. </div>
              </div>
            </div>
          )
        }

        {
        !showMessage && (
            <div className="col-md-6">
              <div className="form-floating mb-4">
                <input required type="text" name="Job title" placeholder="Manager" id="form_jobtitle" className="form-control" />
                <label htmlFor="form_jobtitle">Job Title *</label>
                <div className="valid-feedback"> Looks good! </div>
                <div className="invalid-feedback"> Please enter your job title. </div>
              </div>
            </div>
          )
        }

        <div className="col-md-6">
          <div className="form-floating mb-4">
            <input required type="text" name="surname" placeholder="Doe" id="form_lastname" className="form-control" />
            <label htmlFor="form_lastname">Organisation *</label>
            <div className="valid-feedback"> Looks good! </div>
            <div className="invalid-feedback"> Please enter your organsiation. </div>
          </div>
        </div>

        {
          showMessage && (
            <div className="col-12">
              <div className="form-floating mb-4">
                <textarea
                  required
                  name="message"
                  id="form_message"
                  className="form-control"
                  placeholder="Your message"
                  style={{ height: 150 }}
                />

                <label htmlFor="form_message">Message *</label>
                <div className="valid-feedback"> Looks good! </div>
                <div className="invalid-feedback"> Please enter your messsage. </div>
              </div>
        </div>
          )
        }

        <div className="col-12 text-center">
          <input type="submit" value={sendButtonTitle} className="btn btn-primary rounded-pill btn-send mb-3" />
          <p className="text-muted">
            <strong>*</strong> These fields are required.
          </p>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
