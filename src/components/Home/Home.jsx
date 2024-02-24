//Style
import "./Home.scss";

//Assets
import picture1 from "../../assets/SV Kirito Poggers Drawing.png";
import picture2 from "../../assets/Akujiki Art.png";
import picture3 from "../../assets/world by nana.png";
import picture4 from "../../assets/Nazrin Toucan.png";
import picture5 from "../../assets/Test.jpg";
import picture6 from "../../assets/Warudo Shaded.png";

//Utilites
import { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";

//Components
import Heading from "../Text/Heading/Heading";
import Paragraph from "../Text/Paragraphs/Paragraph";
import TopButton from "../ToTopButton/TopButton";


export default function Home() {
    const [randomPicture, setRandomPicture] = useState([]);

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    useEffect(() => {
        //Sets up random image to appear every time page is loaded
        const pictureArray = [picture1, picture2, picture3, picture4, picture5, picture6];
        const shuffledPictures = shuffleArray(pictureArray);
        setRandomPicture(shuffledPictures);
    }, []);


    return (
        <main className="home">
            <div className="home-header-container">
                <Heading text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit."}/>
                <Paragraph text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet sodales eros, in varius arcu. Fusce a ex egestas, dapibus diam non, efficitur diam. Curabitur augue ante, egestas sit amet orci vitae, consectetur condimentum sem. Cras cursus et libero in tincidunt. Morbi mollis blandit neque, id hendrerit erat vehicula ut. Maecenas dapibus turpis ac suscipit fermentum. Nulla finibus libero quis orci rhoncus, nec tincidunt enim pharetra."} />
            </div>
            <div className="home-image">
                {/* <Slide triggerOnce>
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
                </Slide> */}
                {randomPicture.map((picture, index) => (
                    <Slide key={index} triggerOnce direction={index % 2 === 0 ? "up" : "down"}>
                        <div className="home-image-item">
                            <img src={picture} alt={`randomPicture${index}`} />
                        </div>
                    </Slide>
                ))}
            </div>
            <TopButton />
        </main>
    );
};