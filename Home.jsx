import { useState } from 'react';
import './Home.css';
import EmojiButton from './src/component/Emojibuttons/Emojibuttons.jsx';
import Colorbuttons from './src/component/Colorbuttons/Colorbuttons.jsx';
import ImgRotate from './src/component/Home/rotation.png';

function Home() {

  const [emoji , setEmoji] = useState("😊");

  const [sliderValue, setSliderValue] = useState(50);

  const [bgColor , setBgColor] = useState("#ffffff");

  const [angle , setAngle] = useState(0);

  return (
    <div className="min-h-screen w-full bg-white relative">
      {/* Teal Glow Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #14b8a6 100%)
          `,
          backgroundSize: "100% 100%",
        }}
      />
      {/* Your Content/Components */}
      <div className='app-container'>

        <h1 className='header'>Playing with UseState</h1>
        <p className='app-description'>This is a simple React app that demonstrates how to use the useState hook to manage state in a functional components. </p>

        <div className='emoji-container' style={{ fontSize: `${sliderValue}px`,
        backgroundColor: bgColor,

        }}>
        <span style={{transform : `rotate(${angle}deg)`}}>{emoji}</span>
        </div>

        <div className='slider-container'>
        
          <input type="range" min="0" max="100" className='slider' onChange={(e) => { setSliderValue(e.target.value);
          }} value={sliderValue}
          />
        </div>

        <div className = "angle-container"> 
          <img src = {ImgRotate} alt="Rotate"  className="rotate-image" onClick={() => {setAngle(angle + 45);
            
          }} />
        </div>
          
        <div className='emoji-picker'>
          <EmojiButton emoji={"🚀"} setEmoji={setEmoji}/>
          <EmojiButton emoji={"🛩️"} setEmoji={setEmoji}/>
          <EmojiButton emoji={"🌟"} setEmoji={setEmoji}/>
          <EmojiButton emoji={"🍕"} setEmoji={setEmoji}/>
          <EmojiButton emoji={"🎉"} setEmoji={setEmoji}/>
          <EmojiButton emoji={"🐱"} setEmoji={setEmoji}/>
          <EmojiButton emoji={"🌈"} setEmoji={setEmoji}/>
          <EmojiButton emoji={"⚽"} setEmoji={setEmoji}/>
          <EmojiButton emoji={"💀"} setEmoji={setEmoji}/>

          
        </div>

        
        <div className='color-picker'>
          <Colorbuttons bgColor={"#ffadad"} setBgColor={setBgColor}/>
          <Colorbuttons bgColor={"#ffd6a5"} setBgColor={setBgColor}/>
          <Colorbuttons bgColor={"#fdffb6"} setBgColor={setBgColor}/>
          <Colorbuttons bgColor={"#caffbf"} setBgColor={setBgColor}/>
          <Colorbuttons bgColor={"#9bf6ff"} setBgColor={setBgColor}/>
          <Colorbuttons bgColor={"#a0c4ff"} setBgColor={setBgColor}/>
          <Colorbuttons bgColor={"#bdb2ff"} setBgColor={setBgColor}/>
          <Colorbuttons bgColor={"#ffc6ff"} setBgColor={setBgColor}/>
          <Colorbuttons bgColor={"#fffffc"} setBgColor={setBgColor}/>
        </div>
        
      </div>
    </div>
  );
}
export default Home;
