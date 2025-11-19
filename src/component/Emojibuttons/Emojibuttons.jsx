import "./Emojibuttons.css"
function Emojibuttons({emoji , setEmoji}) {
  return (
    <div className="emoji-option" onClick={() =>{setEmoji(emoji);}}>{emoji}
    
    </div>
  );
}

export default Emojibuttons;
