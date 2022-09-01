import './Home.css';
import profilePic from "../../images/profilePic.jpg"
import { useEffect, useRef } from 'react';

export default function Home() {

    const cursorRef = useRef(null);
    const typedTextRef = useRef(null);

    const textArray = ["Software Engineer", "Web Developer", "Student"];
    const typingDelay = 200;
    const erasingDelay = 100;
    const newTextDelay = 2000; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
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
        if(textArray.length) setTimeout(type, newTextDelay + 250);
    }, [])

    return (
        <div className="home">
            <div className="profile-card">
                <div className="profile-pic-container">
                    <img className="profile-pic" src={profilePic} alt="profile-pic" />
                </div>
                <div className="profile-card-text">
                    <h1>Hi! Welcome to my website!</h1>
                    <p>My name is Kareem DaCosta. I am a second-year student at Columbia University majoring in computer science.</p>
                </div>
            </div>

            <div className="I">
                <p>I Am A <span className="typed-text" ref={typedTextRef}></span><span className="cursor" ref={cursorRef}>&nbsp;</span></p>
            </div>
        </div>
    )
}