import { useState } from "react";
import "./App.css";
import Axios from "axios";
import { Input } from "./components/Input";
import { Search } from "lucide-react";

function App() {
  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");
  const [lyrics, setLyrics] = useState("");

  function searchLyrics() {
    if (artist === "" || song === "") {
      return;
    }
    Axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`).then((res) => {
      setLyrics(res.data.lyrics);
    });
  }
  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col items-  gap-4 mb-10">
        {" "}
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl text-left">Lyrics Finder</h1>
          <span className="block w-36 h-[2px] bg-amber-400"></span>
        </div>
        <div className="flex  items-center gap-3 border border-gray-950 p-6">
          <div className="flex  gap-3">
            <Input
              type={"text"}
              placeholder={"Artist Name"}
              onChange={setArtist}
            />
            <Input type={"text"} placeholder={"Song Name"} onChange={setSong} />
          </div>
          <button
            onClick={() => searchLyrics()}
            className=" flex items-center ml-2 px-4 py-1 gap-1 bg-amber-400 rounded-md text-orange-950 cursor-pointer transition duration-200 border hover:border-gray-500"
          >
            <Search size={20} /> Find
          </button>
        </div>
      </div>
      <div className="scroll-auto w-full max-h-96 overflow-auto border p-4">
        <pre className="whitespace-pre-wrap break-words">{lyrics}</pre>
      </div>
    </div>
  );
}

export default App;
