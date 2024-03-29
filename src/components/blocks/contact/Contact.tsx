import ContactForm from "components/common/ContactForm"
import { FC } from "react"
import Link from "next/link"

const Contact: FC<ContactProp> = ({ title, message, showMessage, sendButtonTitle, signUp }) => {

  return (
    <div className="row">
      <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
        <h2 className="display-4 mb-3 text-center">{title}</h2>
        <p className="lead text-center mb-10">
          {message}
        </p>

        <ContactForm showMessage={showMessage} sendButtonTitle={sendButtonTitle} signUp={signUp} />

        <p className="lead text-center mt-10 mb-5">
          Already a member? Please <Link
            href="/signin"
          >Sign In</Link>.
        </p>

      </div>
    </div>
  )
}

interface ContactProp {
  title: string
  message: string
  showMessage: boolean
  sendButtonTitle: string
  signUp: boolean
}

export default Contact