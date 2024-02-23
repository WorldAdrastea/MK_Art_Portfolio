import React, { useEffect, useState } from "react";

//Style
import "./TopButton.scss";

//Utilites
import { ArrowUpCircle } from "react-feather";

export default function TopButton() {
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        //Checks for window position to show button
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

    //Scrolls to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {/* Conditional rendering of button */}
            {showScrollButton && (
                <button className="scroll-top-button" onClick={scrollToTop}>
                    <ArrowUpCircle />
                </button>
            )}
        </>
    );
};