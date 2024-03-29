import React, { useState, useEffect } from 'react';
import DrumPad from './DrumPad';
import '../App.css'

// Struktur data drum pads dalam bentuk array of object
const pads = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];

// Komponen utama App
const App = () => {
  // State untuk teks Id yang ditampilkan
  const [padId, setPadId] = useState("Let's Play!");

  // Fungsi untuk meng-update teks Id yang ditampilkan
  const updatePadId = (padId) => {
    setPadId(padId);
  };

  return (
    <div className="container" id="drum-machine">
      <div id="display">{padId}</div>
      <div className="pads">
        {pads.map((pad, i) => (
          <DrumPad
            key={i}
            clip={pad.url}
            clipId={pad.id}
            keyCode={pad.keyCode}
            keyTrigger={pad.keyTrigger}
            updatePadId={updatePadId}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
