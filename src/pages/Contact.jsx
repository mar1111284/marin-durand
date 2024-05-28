// Contactjsx

// Import components
import InProgress from "../components/InProgress";
import TelephoneIcon from "../assets/telephone.png";
import LocationIcon from "../assets/location.png";
import EmailIcon from "../assets/mail.png";
import ContactForm from "../components/ContactForm";

const Contact = () => {

    return (
        <div className='contact'>

          <div className="contact-info-container">

            <h1>Get in touch</h1>

            <div className="infos">
              <p>If you have any questions, project inquiries, or just want to say hello, please don't hesitate to reach out. I'll do my best to respond promptly.</p>
              


              <div className="info-container">
                <img alt="Email icon" src={EmailIcon} className="icon-image"></img>
                <p>marindurand29@icloud.com</p>
              </div>

              <div className="info-container" style={{marginLeft: "10%"}}>
                <img alt="Telephone icon" src={TelephoneIcon} className="icon-image"></img>
                <p><span>(+61)</span> 0421448253</p>
              </div>

              <div className="info-container" style={{marginLeft: "20%"}}>
                <img alt="Location icon" src={LocationIcon} className="icon-image"></img>
                <p><span>Sydney, </span> Surry Hills</p>
              </div>

            </div>

          </div>

          <div className="contact-form-container">
            <ContactForm/>
          </div>

        </div>

    )
  }
  
export default Contact;