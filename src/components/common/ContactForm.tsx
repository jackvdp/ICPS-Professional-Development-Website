import { FC, FormEvent } from 'react';
import { useAuth } from 'auth/AuthProvider';

interface ContactFormProp {
  showMessage:boolean
  sendButtonTitle: string
  signUp:boolean
}

const ContactForm: FC<ContactFormProp> = ({showMessage, sendButtonTitle, signUp}) => {

  const { login, signup } = useAuth()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (signUp) {
      signUpMethod()
    } else if (showMessage) {
      contactICPS()
    } else {
      signInMethod()
    }
  };

  const signUpMethod = async () => {
    const emailElement = document.getElementById("form_email") as HTMLInputElement;
    const passwordElement = document.getElementById("form_password") as HTMLInputElement;
    const retypePasswordElement = document.getElementById("form_retype_password") as HTMLInputElement;

    if (emailElement && passwordElement && retypePasswordElement) {
      const email = emailElement.value;
      const password = passwordElement.value;
      const retypePassword = retypePasswordElement.value;

      if (password !== retypePassword) {
        alert("Passwords do not match.");
        return;
      }

      if (password.length < 8) {
        alert("Password must have at least 8 characters.");
        return;
      }

      try {
        signup(email, password)
      } catch (error) {
        console.log("Error signing up:", error);
        alert(`Error signing up. Please try again`);
      }
    }
  } 

  const signInMethod = async () => {
    const emailElement = document.getElementById("form_email") as HTMLInputElement;
    const passwordElement = document.getElementById("form_password") as HTMLInputElement;
    if (emailElement && passwordElement) {
      const email = emailElement.value;
      const password = passwordElement.value;
      login(email, password);
    }
  }

  const contactICPS = async () => {
    // Send email to ICPS
  }

  return (
    <form className="contact-form needs-validation" method="post" onSubmit={handleSubmit}>
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
                <input required type="password" name="Job title" placeholder="01234567891" id="form_password" className="form-control" />
                <label htmlFor="form_phone">Password *</label>
                <div className="valid-feedback"> Looks good! </div>
                <div className="invalid-feedback"> Please enter your password. </div>
              </div>
            </div>
          )
        }
        
        {
          !showMessage && (
            <div className="col-md-6">
              <div className="form-floating mb-4">
                <input required type="password" name="Job title" placeholder="01234567891" id="form_retype_password" className="form-control" />
                <label htmlFor="form_phone">Re-type Password *</label>
                <div className="valid-feedback"> Looks good! </div>
                <div className="invalid-feedback"> Please re-type your password. </div>
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
