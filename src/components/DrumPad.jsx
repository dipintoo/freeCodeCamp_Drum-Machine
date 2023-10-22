import React, { useState, useEffect } from 'react';

// Style ketika pad tidak aktif
const inactiveStyle = {
  backgroundColor: "#444"
};
// Style ketika pad aktif
const activeStyle = {
  backgroundColor: "#f0ad4e"
};

// Komponen DrumPad
const DrumPad = ({ clip, clipId, keyCode, keyTrigger, updatePadId }) => {
  // State untuk teks yang ditampilkan dan gaya pad
  const [padStyle, setPadStyle] = useState(inactiveStyle);

  // Mendaftarkan event listener ketika komponen dipasang
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
  }, []);

  // Meng-handle event key press
  const handleKeyPress = (e) => {
    if (e.keyCode === keyCode) {
      playSound();
    }
  };

  // Mengaktifkan style pada pad
  const activatePad = () => {
    setPadStyle((prevStyle) =>
      prevStyle.backgroundColor === "#f0ad4e" ? inactiveStyle : activeStyle
    );
  };

  // Memainkan suara
  const playSound = () => {
    const sound = document.getElementById(keyTrigger);
    activatePad();
    setTimeout(activatePad, 100);
    sound.play();
    updatePadId(clipId.replace(/-/g, " "));
  };

  // Render pad (<div id="" onClick="" style=""><audio id="" src=""/>key</div>)
  return (
    <div className="drum-pad" id={clipId} onClick={playSound} style={padStyle}>
      <audio className="clip" id={keyTrigger} src={clip} />
      {keyTrigger}
    </div>
  );
};

export default DrumPad;