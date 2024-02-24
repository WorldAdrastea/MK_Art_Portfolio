import Heading from "../Text/Heading/Heading"
// import Paragraph from "../Text/Paragraphs/Paragraph";
import "./Contact.scss"

import { Linkedin, Mail, Twitter } from "react-feather";

export default function Contact() {
    return (
        <main>
            <div className="title-container">
                <Heading text={"Contact me here"}/>
            </div>
            {/* <div>
                <form>
                    <label>
                        <Paragraph text={"First name"} />
                        <input type="text" name="firstName"/>
                    </label>
                    <label>
                        <Paragraph text={"Last name"} />
                        <input type="text" name="lastName" />
                    </label>
                    <input type="submit" value={"Submit"} />
                </form>
            </div> */}
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
        </main>
    );
};