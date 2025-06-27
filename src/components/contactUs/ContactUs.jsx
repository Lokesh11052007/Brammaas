
import ContactForm from './contactForm.jsx';
import ContactMap from './contactMap.jsx';
import AboutHeader from '../aboutUs/AboutHeader.jsx';
function ContactUs() {
  return (
    <>
      <AboutHeader 
      bgImage={require('../../assets/bag.jpg')}
      title={"CONTACT US"}
      content={"Contact Us"}
      />
      <ContactForm />
      <ContactMap />

      
    </>
  );
}

export default ContactUs;
