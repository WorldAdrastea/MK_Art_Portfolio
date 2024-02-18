import Heading from "../Text/Heading/Heading.jsx"
import Paragraph from "../Text/Paragraphs/Paragraph.jsx";
import "./About.scss"
import Photo from "../../assets/SV Kirito Poggers Drawing.png"

export default function About() {
    return (
        <main>
            <div className="title-container">
                <Heading text={"A little bit about me."} />
                <Paragraph text={"I smell - Miyu Kiriyaki. Something something fried teriyaki - Miyu. POOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG"} />
                <div className="photo-container">
                    <img src={Photo} alt="headshot-photograph"/>
                </div>
            </div>
        </main>
    );
};