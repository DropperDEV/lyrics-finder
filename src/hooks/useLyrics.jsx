import { useState } from "react";
import Axios from "axios";

export function useLyrics() {
  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [error, setError] = useState("");

  function searchLyrics(artistInput, songInput) {
    if (artistInput === "" || songInput === "") {
      return;
    }

    Axios.get(`https://api.lyrics.ovh/v1/${artistInput}/${songInput}`)
      .then((res) => {
        setLyrics(res.data.lyrics);
        setError("");
      })
      .catch(() => {
        setError("Song or artist not found. Please try again.");
        setLyrics("");
      });

    setArtist(artistInput);
    setSong(songInput);
  }

  return {
    artist,
    song,
    lyrics,
    error,
    searchLyrics,
  };
}
