import "./Home.scss"
import picture1 from "../../assets/SV Kirito Poggers Drawing.png"
import picture2 from "../../assets/Akujiki Art.png"
import picture3 from "../../assets/world by nana.png"
import { useState } from "react"


export default function Home() {
    const [randomPicture, setRandomPicture] = useState(null);

    useState(() => {
        const pictureArray = [picture1, picture2, picture3];

        const randomIndex = Math.floor(Math.random() * pictureArray.length);

        setRandomPicture(pictureArray[randomIndex])
    }, [])

    return (
        <main className="home">
            <div className="home-header-container">
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet sodales eros, in varius arcu. Fusce a ex egestas, dapibus diam non, efficitur diam. Curabitur augue ante, egestas sit amet orci vitae, consectetur condimentum sem. Cras cursus et libero in tincidunt. Morbi mollis blandit neque, id hendrerit erat vehicula ut. Maecenas dapibus turpis ac suscipit fermentum. Nulla finibus libero quis orci rhoncus, nec tincidunt enim pharetra.</p>
            </div>
            <div className="home-image">
            {randomPicture && <img src={randomPicture} alt="randomPicture"/>}
            </div>
        </main>
    )
}