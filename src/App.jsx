import { useState } from "react";
import "./App.css";
import Axios from "axios";
import { CardLyrics } from "./components/CardLyrics";
import { SongFinderZone } from "./components/SongFinderZone";
import { ZoneTitle } from "./components/ui/ZoneTitle";

function App() {
  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [error, setError] = useState("");

  function searchLyrics() {
    if (artist === "" || song === "") {
      return;
    }
    Axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`)
      .then((res) => {
        setLyrics(res.data.lyrics);
        setError("");
      })
      .catch(() => {
        setError("Song or artist not found. Please try again.");
        setLyrics("");
      });
  }

  return (

  );
}

export default App;
