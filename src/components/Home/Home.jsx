//Style
import "./Home.scss";

//Assets
import picture1 from "../../assets/SV Kirito Poggers Drawing.png";
import picture2 from "../../assets/Akujiki Art.png";
import picture3 from "../../assets/world by nana.png";

//Utilites
import { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
import { ArrowUpCircle } from "react-feather";

//Components
import Heading from "../Text/Heading/Heading";
import Paragraph from "../Text/Paragraphs/Paragraph";


export default function Home() {
    const [randomPicture, setRandomPicture] = useState(null);
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        //Sets up random image to appear every time page is loaded
        const pictureArray = [picture1, picture2, picture3];
        const randomIndex = Math.floor(Math.random() * pictureArray.length);
        setRandomPicture(pictureArray[randomIndex])
        
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            };
        };
        
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <main className="home">
            <div className="home-header-container">
                <Heading text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit."}/>
                <Paragraph text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet sodales eros, in varius arcu. Fusce a ex egestas, dapibus diam non, efficitur diam. Curabitur augue ante, egestas sit amet orci vitae, consectetur condimentum sem. Cras cursus et libero in tincidunt. Morbi mollis blandit neque, id hendrerit erat vehicula ut. Maecenas dapibus turpis ac suscipit fermentum. Nulla finibus libero quis orci rhoncus, nec tincidunt enim pharetra."} />
            </div>
            <div className="home-image">
                <Slide triggerOnce>
                    <div className="home-image-item">
                        {randomPicture && <img src={randomPicture} alt="randomPicture"/>}
                    </div>
                </Slide>
                <Slide triggerOnce direction="up">
                    <div className="home-image-item">
                        {randomPicture && <img src={randomPicture} alt="randomPicture"/>}
                    </div>
                </Slide>
                <Slide triggerOnce direction="right">
                    <div className="home-image-item">
                        {randomPicture && <img src={randomPicture} alt="randomPicture"/>}
                    </div>
                </Slide>
                <Slide triggerOnce>
                    <div className="home-image-item">
                        {randomPicture && <img src={randomPicture} alt="randomPicture"/>}
                    </div>
                </Slide>
                <Slide triggerOnce direction="up">
                    <div className="home-image-item">
                        {randomPicture && <img src={randomPicture} alt="randomPicture"/>}
                    </div>
                </Slide>
                <Slide triggerOnce direction="right">
                    <div className="home-image-item">
                        {randomPicture && <img src={randomPicture} alt="randomPicture"/>}
                    </div>
                </Slide>
                <Slide triggerOnce>
                    <div className="home-image-item">
                        {randomPicture && <img src={randomPicture} alt="randomPicture"/>}
                    </div>
                </Slide>
                <Slide triggerOnce direction="up">
                    <div className="home-image-item">
                        {randomPicture && <img src={randomPicture} alt="randomPicture"/>}
                    </div>
                </Slide>
                <Slide triggerOnce direction="right">
                    <div className="home-image-item">
                        {randomPicture && <img src={randomPicture} alt="randomPicture"/>}
                    </div>
                </Slide>
                <Slide triggerOnce>
                    <div className="home-image-item">
                        {randomPicture && <img src={randomPicture} alt="randomPicture"/>}
                    </div>
                </Slide>
                <Slide triggerOnce direction="up">
                    <div className="home-image-item">
                        {randomPicture && <img src={randomPicture} alt="randomPicture"/>}
                    </div>
                </Slide>
                <Slide triggerOnce direction="right">
                    <div className="home-image-item">
                        {randomPicture && <img src={randomPicture} alt="randomPicture"/>}
                    </div>
                </Slide>
            </div>
            {showScrollButton && (
                <button className="scroll-top-button" onClick={scrollToTop}>
                    <ArrowUpCircle />
                </button>
            )}
        </main>
    );
};