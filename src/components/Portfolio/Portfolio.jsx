import "./Portfolio.scss";
import Heading from "../Text/Heading/Heading";
import { Slide } from "react-awesome-reveal";
import image1 from "../../assets/world by nana.png"
import image2 from "../../assets/Akujiki Art.png"
import image3 from "../../assets/Nazrin Toucan.png"
import image4 from "../../assets/Ribbit.png"
import image5 from "../../assets/Test.jpg"
import image6 from "../../assets/Warudo Shaded.png"
import Paragraph from "../Text/Paragraphs/Paragraph";
import TopButton from "../ToTopButton/TopButton";

export default function Portfolio() {
    return (
        <main>
            <div className="title-container">
                <Heading text={"This is my work"}/>
            </div>
            <div className="grid-container">
                <Paragraph text={"This is a work asajopjadog"} />
                <Slide triggerOnce direction="up" className="slides">
                    <img src={image1} alt="portfolio work" />
                </Slide>
                <Paragraph text={"By Miyu Kiriyaki"} />

                <Paragraph text={"This is a work asajopjadog"} />
                <Slide triggerOnce direction="up" className="slides">
                    <img src={image2} alt="portfolio work" />
                </Slide>
                <Paragraph text={"By Miyu Kiriyaki"} />

                <Paragraph text={"This is a work asajopjadog"} />
                <Slide triggerOnce direction="up" className="slides">
                    <img src={image3} alt="portfolio work" />
                </Slide>
                <Paragraph text={"By Miyu Kiriyaki"} />

                <Paragraph text={"This is a work asajopjadog"} />
                <Slide triggerOnce direction="up" className="slides">
                    <img src={image4} alt="portfolio work" />
                </Slide>
                <Paragraph text={"By Miyu Kiriyaki"} />

                <Paragraph text={"This is a work asajopjadog"} />
                <Slide triggerOnce direction="up" className="slides">
                    <img src={image5} alt="portfolio work" />
                </Slide>
                <Paragraph text={"By Miyu Kiriyaki"} />

                <Paragraph text={"This is a work asajopjadog"} />
                <Slide triggerOnce direction="up" className="slides">
                    <img src={image6} alt="portfolio work" />
                </Slide>
                <Paragraph text={"By Miyu Kiriyaki"} />

                <TopButton />
            </div>
        </main>
    );
};