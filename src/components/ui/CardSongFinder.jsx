import { useState } from "react";
import { useLyricsContext } from "../../hooks/LyricsProvider";
import { Input } from "./Input";
import { Search } from "lucide-react";

export function CardSongFinder() {
  const { searchLyrics } = useLyricsContext();

  const [tempArtist, setTempArtist] = useState("");
  const [tempSong, setTempSong] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    searchLyrics(tempArtist, tempSong); 
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className="flex items-center justify-center gap-3 border border-[#e53170] p-6"
    >
      <div className="flex gap-3">
        <Input
          type="text"
          placeholder="Artist Name"
          value={tempArtist}
          onChange={(e) => setTempArtist(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Song Name"
          value={tempSong}
          onChange={(e) => setTempSong(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="flex items-center ml-2 px-4 py-1 gap-1 bg-[#ff8906] rounded-md text-orange-950 cursor-pointer transition duration-200 hover:border-[#e531b8] border-2 border-[#e53170]"
      >
        <Search size={20} /> Find
      </button>
    </form>
  );
}
