import './App.css'
import NavigationBar from './components/NavigationBar'
import { useEffect, useState, useRef } from "react";

function App() {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    // window.onscroll = function myFunction() {
    //   console.log("scrolling");
    //   let scrolltotop = document.scrollingElement.scrollTop;
    //   let target = document.querySelector("h2");
    //   let factor = 0.5;
    //   let yvalue = scrolltotop * factor;
    //   target.style.top = (64 - (factor * 10)) + 'vh'
    //   console.log("scroll to top" + scrolltotop);
    //   console.log('factor ' + factor);
    // };

  }, [])




  
  window.addEventListener(`scroll`, function (e) {
    const scrollPosition = this.scrollY / 1000;
    if (scrollPosition === 0) {
      document.querySelector(".overlay2").style.opacity = 0.5;
    }
    if (scrollPosition > 0) {
      document.querySelector(".overlay2").style.opacity = `${0.5 + scrollPosition}`;
    }
    console.log(scrollPosition)
  });

  window.addEventListener(`scroll`, function (e) {
    const scrollPosition2 = this.scrollY / 1000;
    if (scrollPosition2 === 0) {
      document.querySelector("nav").style.opacity = 1;
    }
    if (scrollPosition2 > 0) {
      
      document.querySelector("nav").style.opacity = `${
        1 - (scrollPosition2 * 30)
      }`;
    }
    // dissapear at 0.03
    console.log(scrollPosition2);
    // return () => window.removeEventListener("scroll");
  });

  window.addEventListener(`scroll`, function (e) {
    const scrollPosition3 = this.scrollY / 1000;
    if (scrollPosition3 === 0) {
      document.querySelector(".scrollNotice").style.opacity = 1;
    }
    if (scrollPosition3 > 0) {
      document.querySelector(".scrollNotice").style.opacity = `${
        1 - scrollPosition3 * 30
      }`;
    }
    console.log(scrollPosition3);
    // return () => window.removeEventListener("scroll");
  });

  window.addEventListener(`scroll`, function (e) {
    const scrollPosition4 = this.scrollY / 1000;
    if (scrollPosition4 === 0) {
      document.querySelector("h2").style.top = "64vh";
    }
    if (scrollPosition4 > 0) {
      document.querySelector("h2").style.top = `${
        64 - scrollPosition4 * 60
      }vh`;
    }
    if (scrollPosition4 <= 0.200) {
      document.querySelector("h2").style.opacity = 1;
    }
    if (scrollPosition4 > 0.200) {
      document.querySelector("h2").style.opacity = `${
        1 - (scrollPosition4 * 1.3) 
      }`;
    }
    console.log(scrollPosition4);
    // return () => window.removeEventListener("scroll");
  });


  return (
    <div className="App">
      <header>
        <div className="overlay1">
          <div className="overlay2"></div>
        </div>
        <img
          className="logo hidden"
          src="../src/assets/logo.svg"
          alt="SVG as an image"
        />
      </header>
      <NavigationBar />
      <h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis.
      </h2>
      <p className="scrollNotice">Scroll for vibe check</p>
      <section className="secondSection">
        <div className="headingContainer">
          <h1>LISTEN LIVE NOW</h1>
        </div>
      </section>
    </div>
  );
}

export default App
