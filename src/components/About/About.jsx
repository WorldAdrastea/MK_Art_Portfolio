import Heading from "../Text/Heading/Heading.jsx"
import Paragraph from "../Text/Paragraphs/Paragraph.jsx";
import "./About.scss"
import Photo from "../../assets/SV Kirito Poggers Drawing.png"

export default function About() {
    return (
        <main>
            <div className="title-container">
                <Heading text={"A little bit about me."} />
                <Paragraph text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet sodales eros, in varius arcu. Fusce a ex egestas, dapibus diam non, efficitur diam. Curabitur augue ante, egestas sit amet orci vitae, consectetur condimentum sem. Cras cursus et libero in tincidunt. Morbi mollis blandit neque, id hendrerit erat vehicula ut. Maecenas dapibus turpis ac suscipit fermentum. Nulla finibus libero quis orci rhoncus, nec tincidunt enim pharetra."} />
                <div className="photo-container">
                    <img src={Photo} alt="headshot-photograph"/>
                </div>
            </div>
        </main>
    );
};