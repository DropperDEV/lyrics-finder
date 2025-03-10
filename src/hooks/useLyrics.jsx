import { useState } from "react";
import Axios from "axios";

export function useLyrics() {
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

  return {
    artist,
    setArtist,
    song,
    setSong,
    lyrics,
    error,
    searchLyrics,
  };
}
