import { Input } from "./components/ui/Input";
import { Search } from "lucide-react";
import { CardLyrics } from "./ui/CardLyrics";
import { CardSongFinder } from "./ui/CardSongFinder";

export function Main() {
  return (
    <main className="flex flex-col justify-between">
      <CardSongFinder/>
      <CardLyrics />
    </main>
  );
}
