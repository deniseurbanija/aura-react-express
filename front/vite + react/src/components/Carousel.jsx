import { useState, useEffect } from "react";
import cubiertaImage from "../assets/BridgestonePics/cubierta.jpg";
import motogp1 from "../assets/BridgestonePics/moto-gp1.jpg";
import motogp2 from "../assets/BridgestonePics/moto-gp2.jpg";
import "../styles/Carousel.css";

const Carousel = () => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => (prevCounter === 3 ? 1 : prevCounter + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleRadioChange = (e) => {
    setCounter(parseInt(e.target.id.slice(-1))); // Extrayendo el último dígito del ID
  };

  return (
      <div className="slider">
        <div
          className="slides"
          style={{ marginLeft: `-${(counter - 1) * 100}%` }}
        >
          <input
            type="radio"
            name="radio-btn"
            id="radio1"
            checked={counter === 1}
            onChange={handleRadioChange}
          />
          <input
            type="radio"
            name="radio-btn"
            id="radio2"
            checked={counter === 2}
            onChange={handleRadioChange}
          />
          <input
            type="radio"
            name="radio-btn"
            id="radio3"
            checked={counter === 3}
            onChange={handleRadioChange}
          />
          <div className="slide first">
            <img src={cubiertaImage} alt="Slide 1" />
          </div>
          <div className="slide">
            <img src={motogp1} alt="Slide 2" />
          </div>
          <div className="slide">
            <img src={motogp2} alt="Slide 3" />
          </div>
          {/* auto navegation */}
          <div className="navegation-auto">
            <div
              className={counter === 1 ? "auto-btn1 active" : "auto-btn1"}
            ></div>
            <div
              className={counter === 2 ? "auto-btn2 active" : "auto-btn2"}
            ></div>
            <div
              className={counter === 3 ? "auto-btn3 active" : "auto-btn3"}
            ></div>
          </div>
          {/* auto navegation */}
        </div>
      </div>
        
   
  );
};

export default Carousel;