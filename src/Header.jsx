import React, { useEffect } from 'react'
import  './Style.css'

const Header = () => {
  useEffect(() => {
    const words = ["Full Stack Developer", "Cloud Enthusiast","DevOps Learner"];
    let i = 0;
    let j = 0;
    let currentWord = "";
    let isDeleting = false;

    function type() {
        currentWord = words[i];

        if (!isDeleting) {
            document.getElementById("typed-text").textContent = currentWord.substring(0, j + 1);
            j++;
        } else {
            document.getElementById("typed-text").textContent = currentWord.substring(0, j - 1);
            j--;
        }

        if (!isDeleting && j === currentWord.length) {
            isDeleting = true;
            setTimeout(type, 1000);
            return;
        }

        if (isDeleting && j === 0) {
            isDeleting = false;
            i = (i + 1) % words.length;
        }

        setTimeout(type, isDeleting ? 60 : 120);
    }

    type();
  }, []);

  return (
    <div id="header">
        <div className="container">
            <nav>
                <img src="logo.png" alt="Logo" className="logo"></img>
                <ul>
                    <li><a href="#header">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#">Skill</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className="header-text">
                <p>Welcome,</p>
                <h1>I'm <span>Vignesh</span> Jayakumar</h1>
                <h2 className="typing-line">
                    <span id="typed-text"></span>
                    <span id="cursor">|</span>
                </h2>
            </div>
        </div>
    </div>
  )
}
export default  Header
