import { useLyricsContext } from "../../hooks/LyricsProvider";

export function CardLyrics() {
  const { artist, song, lyrics, error } = useLyricsContext(); 

  return (
<div className="scroll-auto w-full max-h-96 overflow-auto border border-[#e53170] p-4 bg-scroll 
               scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-[#e53170] scrollbar" >      {error ? (
        <p className="text-[#f25f4c]">{error}</p>
      ) : (
        <pre className="whitespace-pre-wrap break-words text-[#a7a9be] text-center ">
          {lyrics ? (
            <div className="">
              <p className="font-bold text-xl text-[#ff8906]">
                {artist} - {song}
              </p>
              <p>{lyrics}</p>
            </div>
          ) : (
            "Enter artist and song to find the lyrics."
          )}
        </pre>
      )}
    </div>
  );
}
