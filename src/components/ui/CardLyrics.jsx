import { useLyricsContext } from "../../hooks/LyricsProvider";

export function CardLyrics() {
  const { artist, song, lyrics, error } = useLyricsContext(); 

  return (
    <div className="scroll-auto w-full max-h-96 overflow-auto border p-4">
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <pre className="whitespace-pre-wrap break-words">
          {lyrics ? (
            <div>
              <p className="font-bold text-xl">
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
