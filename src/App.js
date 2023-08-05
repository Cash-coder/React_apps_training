import { useState } from "react";
import "./styles.css";

const images = [
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
];

export default function App() {
  const [image, setImage] = useState(0);

  function next() {
    setImage(image === images.length -1 ? 0: image + 1);
  }
  function previous(){
    setImage(image === images.length - 1 ? 0: image -1);
  }

  return (
    <div>
      <h2>Project Carousel</h2>
      <div className="slider">
        <button className="right-arrow" onClick={next}> ⮕ </button>
        <button className="left-arrow" onClick={previous}> ⬅ </button>
        {images.map ((pic, index) =>
          image === index && (
            <div key={image} className="slide">
              <img src={pic} alt="image"/>
            </div>
            )
        )}

      </div>
    </div>
  );


}
