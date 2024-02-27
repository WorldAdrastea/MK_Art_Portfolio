import Heading from "../Text/Heading/Heading"
import Paragraph from "../Text/Paragraphs/Paragraph";
// import Paragraph from "../Text/Paragraphs/Paragraph";
import "./Contact.scss"

import { Linkedin, Mail, Twitter } from "react-feather";

export default function Contact() {
    return (
        <main>
            <div className="title-container">
                <Heading text={"Contact me here"}/>
            </div>
            <div className="paragraph-container">
                <Paragraph text={"I would love to get in touch, please connect with me through any of these methods below:"}/>
            </div>
            <div className="social-media-icons">
                <a href="/" className="icon-item">
                    <Linkedin size={64} />
                </a>
                <a href="/" className="icon-item">
                    <Twitter size={64} />
                </a>
                <a href="/" className="icon-item">
                    <Mail size={64} />
                </a>
            </div>
            <div className="contact-form-container">
                <form className="contact-form">
                    <label>
                        <Paragraph text={"First name"} />
                        <input type="text" name="firstName" required/>
                    </label>
                    <label>
                        <Paragraph text={"Last name"} />
                        <input type="text" name="lastName" required />
                    </label>
                    <label>
                        <Paragraph text= {"Enter your message here"} />
                        <textarea placeholder="Your message" name="message" required />
                    </label>
                    <input type="submit" value={"Send"} id="send-button"/>
                </form>
            </div>
        </main>
    );
};