import ContactForm from "components/common/ContactForm"
import { FC } from "react"

const ContactICPS: FC<ContactProp> = ({title, message, showMessage, sendButtonTitle}) => {
    return(
        <div className="row">
              <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                <h2 className="display-4 mb-3 text-center">{title}</h2>
                <p className="lead text-center mb-10">
                  {message}
                </p>

                <ContactForm showMessage={showMessage} sendButtonTitle={sendButtonTitle}/>
              </div>
        </div>
    )
}

interface ContactProp {
    title: string
    message: string
    showMessage: boolean
    sendButtonTitle: string
}

export default ContactICPS