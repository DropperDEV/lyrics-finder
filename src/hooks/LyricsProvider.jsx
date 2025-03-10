import { createContext, useContext } from "react";
import { useLyrics } from "./useLyrics"; 

const LyricsContext = createContext();

export function LyricsProvider({ children }) {
  const lyricsState = useLyrics(); 

  return (
    <LyricsContext.Provider value={lyricsState}>
      {children}
    </LyricsContext.Provider>
  );
}

export function useLyricsContext() {
  return useContext(LyricsContext);
}
