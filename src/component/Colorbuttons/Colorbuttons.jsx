import "./Colorbuttons.css";

function Colorbuttons({bgColor , setBgColor}) {
  return (
    <div className="color-button" onClick={() =>{setBgColor(bgColor);}}
    style = {{backgroundColor : bgColor}}
    >
    
    </div>
  );
}

export default Colorbuttons;
