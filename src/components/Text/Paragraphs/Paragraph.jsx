import { Fade } from "react-awesome-reveal";

export default function Paragraph({ text }) {
    return (
        <Fade triggerOnce delay={1e-3}>
            <p>
                {text}
            </p>
        </Fade>
    );
};

