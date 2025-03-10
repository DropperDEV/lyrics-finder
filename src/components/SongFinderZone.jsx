import { Input } from "./ui/Input";
import { Search } from "lucide-react";

export function SongFinderZone({ searchLyrics, setArtist, setSong }) {
  return (
    <div className="flex items-center gap-3 border border-gray-950 p-6">
      <div className="flex gap-3">
        <Input type={"text"} placeholder={"Artist Name"} onChange={setArtist} />
        <Input type={"text"} placeholder={"Song Name"} onChange={setSong} />
      </div>
      <button
        onClick={() => searchLyrics()}
        className="flex items-center ml-2 px-4 py-1 gap-1 bg-amber-400 rounded-md text-orange-950 cursor-pointer transition duration-200 border hover:border-gray-500"
      >
        <Search size={20} /> Find
      </button>
    </div>
  );
}
