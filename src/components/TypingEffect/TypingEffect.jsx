import { useEffect, useRef } from "react";
import "./TypingEffect.css"

export default function TypingEffect() {
    const cursorRef = useRef(null);
    const typedTextRef = useRef(null);

    const textArray = ["Software Engineer", "Web Developer", "Student", "Volunteer Coding Teacher"];
    const typingDelay = 200;
    const erasingDelay = 100;
    const newTextDelay = 2000; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = 0;
    const triggeredText = useRef(false)

    function type() {
        if(cursorRef.current==null) {
            return;
        }
        if (charIndex < textArray[textArrayIndex].length) {
            if(!cursorRef.current.classList.contains("typing")) cursorRef.current.classList.add("typing");
            typedTextRef.current.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } 
        else {
            cursorRef.current.classList.remove("typing");
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if(cursorRef.current==null) {
            return;
        }
        if (charIndex > 0) {
        if(!cursorRef.current.classList.contains("typing")) cursorRef.current.classList.add("typing");
        typedTextRef.current.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } 
    else {
        cursorRef.current.classList.remove("typing");
        textArrayIndex++;
        if(textArrayIndex>=textArray.length) textArrayIndex=0;
        setTimeout(type, typingDelay + 1100);
    }
    }

    useEffect(() => {
        if(textArray.length && !triggeredText.current) {
            setTimeout(type, newTextDelay + 250);
            triggeredText.current = true;
        }
    }, [])

    return (
        <div className="typing-effect">
            <div className="I">
                <p>I Am A <span className="typed-text" ref={typedTextRef}></span><span className="cursor" ref={cursorRef}>&nbsp;</span></p>
            </div>
        </div>
    )
}