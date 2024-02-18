import { Fade } from "react-awesome-reveal"

export default function Heading({ text }) {
    return (
        <h1>
            <Fade triggerOnce delay={1e3} cascade damping={1e-1}>
                {text}
            </Fade>
        </h1>
    );
};