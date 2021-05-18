import React from "react";
import "./styles.css";
import { useState } from "react";

const musicDB = {
  rock: [
    { name: "Purple Haze", singer: "Jimi Hendrix" },
    { name: "Under Pressure", singer: "Queen & David Bowie" },
    { name: "Whole Lotta Love", singer: "Led Zeppelin" },
    { name: "Rockin’ in the Free World", singer: "Neil Young" }
  ],

  jazz: [
    { name: "Take Five", singer: "Dave Brubeck" },
    { name: "So What", singer: "Miles Davis" },
    { name: "Round Midnight", singer: "Thelonious Monk" },
    { name: "My Favorite Things", singer: "John Coltrane" }
  ],

  hiphop: [
    { name: "Grindin", singer: "Clipse" },
    { name: "Lose Yourself", singer: "Eminem" },
    { name: "Get Ur Freak On", singer: "Missy Elliott" },
    { name: "Jesus Walks", singer: "Kanye West" }
  ],

  classical: [
    { name: "Lag Ja Gaale", singer: "Lata Mangeshkar" },
    { name: "Ajeeb Dastan Hain Yeh", singer: "Lata Mangeshkar" },
    { name: "Tere bina zindagi se koi", singer: " Kishore Kumar" },
    { name: "Tujhse Naraz Nahi Zindagi", singer: "Anup Ghoshal" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("classical");
  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>🎼 Musicala - Top chartbuster music</h1>
      <p>Select the genre to get started</p>

      <div>
        {Object.keys(musicDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              padding: "0.5rem 0.5rem",
              cursor: "pointer",
              border: "1px solid black",
              margin: "0.5rem 0.1rem",
              backgroundColor: "lightgrey",
              borderRadius: "1rem"
            }}
          >
            {" "}
            {genre}{" "}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {musicDB[selectedGenre].map((music) => (
            <li
              style={{
                padding: "1rem",
                border: "1px solid #D4D4D8",
                width: "50%",
                margin: "1rem",
                borderRadius: "1rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {music.name} </div>
              <div style={{ fontSize: "smaller" }}> {music.singer} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
