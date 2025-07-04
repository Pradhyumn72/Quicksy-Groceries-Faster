// src/Components/Topmenu.jsx
import Carousel from "react-bootstrap/Carousel";
import slide1 from "../Images/Slidee1.png";   // <–– import, don’t use a raw path
import slide2 from "../Images/Slidee2.png";
import slide3 from "../Images/Slidee3.png";
import Slider from "./Slider";

// import "Top.css";

const Topmenu = () => (
  <Carousel
    fade              // smooth cross‑fade
    interval={4000}   // 4‑second auto‑play
    indicators        // show the dots
    controls          // show ←  →

  >
    {[slide1, slide2, slide3].map((img, i) => (
      <Carousel.Item key={i}>
        <img src={img} alt={`Slide ${i + 1}`} className="hero-img d-block w-100" />

        
      </Carousel.Item>
    ))}
   
  </Carousel>


);

export default Topmenu;
