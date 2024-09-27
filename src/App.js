import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./MyComponents/About.js";
import Contact from "./MyComponents/Contact.js";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      src: "https://picsum.photos/800/400?image=1",
      altText: "Slide 1",
      caption: "Slide 1 Caption",
    },
    {
      src: "https://picsum.photos/800/400?image=2",
      altText: "Slide 2",
      caption: "Slide 2 Caption",
    },
    {
      src: "https://picsum.photos/800/400?image=3",
      altText: "Slide 3",
      caption: "Slide 3 Caption",
    },
  ];

  const next = () => {
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  return (
    // <BrowserRouter>
    <div className="App">
      <header>
        <nav>
          <div className="logo">
            <img src="C:\Users\prana\Downloads\adc.webp" alt="Logo" />
          </div>
          <ul>
            <li>
              <a href="./MyComponents/About.js">About</a>
            </li>
            <li>
              <button>My Diary</button>
            </li>
            <li>
              <a href="./MyComponents/Contact.js">Contacts</a>
            </li>
            <li>
              <button>Account</button>
            </li>
          </ul>
        </nav>
      </header>
      {/* <Switch>
          <Route path="./MyComponents/About.js" component={About} />
          <Route path="./MyComponents/Contact.js" component={Contact} />
        </Switch> */}
      <Router>
        <Routes>
          <Route path="./MyComponents/About.js" component={About} />
          <Route path="./MyComponents/Contact.js" component={Contact} />
        </Routes>
      </Router>
      <main>
        <section className="hero">
          <div
            className="background-image"
            style={{ backgroundImage: "url(background.jpg)" }}
          ></div>
          <div className="hero-text">
            <h1>Every 40 seconds we lose a loved one to suicide.</h1>
            <p>
              Losing just one person to suicide is one too many. People need to
              know that they are not alone, that help exists, and that hope is
              possible when we are given the chance to heal. Whether you’ve
              struggled with thoughts of suicide, have attempted, have lost
              someone, or simply care.
            </p>
          </div>
        </section>
        <div className="carousel">
          {items.map((item, index) => (
            <div
              key={index}
              className={
                index === activeIndex ? "carousel-item active" : "carousel-item"
              }
            >
              <img src={item.src} alt={item.altText} />
              <div className="carousel-caption">
                <h3>{item.caption}</h3>
              </div>
            </div>
          ))}
          <button className="carousel-control-prev" onClick={previous}>
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" onClick={next}>
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </main>
      <footer>
        <div className="carousel">
          <div className="carousel-item active">
            <p>
              "Believe you can and you're halfway there." - Theodore Roosevelt
            </p>
          </div>
          <div className="carousel-item">
            <p>
              "The greatest glory in living lies not in never falling, but in
              rising every time we fall." - Nelson Mandela
            </p>
          </div>
          <div className="carousel-item">
            <p>
              "You are never too old to set another goal or to dream a new
              dream." - C.S. Lewis
            </p>
          </div>
        </div>
      </footer>
    </div>
    // </BrowserRouter>
  );
}

export default App;
