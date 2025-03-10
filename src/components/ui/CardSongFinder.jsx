import { useLyricsContext } from "../../hooks/LyricsProvider";
import { Input } from "./Input";
import { Search } from "lucide-react";

export function CardSongFinder() {
  const { artist, setArtist, song, setSong, searchLyrics } = useLyricsContext();

  return (
    <div className="flex items-center gap-3 border border-gray-950 p-6">
      <div className="flex gap-3">
        <Input
          type="text"
          placeholder="Artist Name"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Song Name"
          value={song}
          onChange={(e) => setSong(e.target.value)}
        />
      </div>
      <button
        onClick={searchLyrics}
        className="flex items-center ml-2 px-4 py-1 gap-1 bg-amber-400 rounded-md text-orange-950 cursor-pointer transition duration-200 border hover:border-gray-500"
      >
        <Search size={20} /> Find
      </button>
    </div>
  );
}
