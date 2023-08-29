import { Element } from "react-scroll";

const Contact = () => {
  return (
    <Element name="contacts">
      <div className="contact">
        <h2>Contact</h2>
        <p>Submit the form below to get in touch with me</p>
        <div className="contact-container">
          <form
            action="https://getform.io/f/d543f8d8-82c1-4e35-8ed6-1a9807241311"
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
            ></input>
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
            ></input>
            <textarea className="message" name="message"></textarea>
            <button type="submit" className="contact-button">
              Lets talk
            </button>
          </form>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
