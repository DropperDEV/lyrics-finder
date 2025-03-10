import "./App.css";
import { Header } from "./components/Header";
import { LyricsProvider } from "./hooks/LyricsProvider";
import { CardSongFinder } from "./components/ui/CardSongFinder";
import { CardLyrics } from "./components/ui/CardLyrics";

 function App() {
  return (
    <LyricsProvider>
      <div className="flex flex-col gap-4">
        <Header />
        <CardSongFinder />
        <CardLyrics />
      </div>
    </LyricsProvider>
  );
}

export default App;