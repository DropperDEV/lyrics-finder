export function CardLyrics({ artist, song, lyrics,error }) {
  return (
    <div className="scroll-auto w-full max-h-96 overflow-auto border p-4">
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <pre className="whitespace-pre-wrap break-words">
          {lyrics ? (
            <div className="flex flex-col gap-3">
              <p className=" font-bold">
                {artist} - {song}
              </p>
              {lyrics}
            </div>
          ) : (
            "Enter artist and song to find the lyrics."
          )}
        </pre>
      )}
    </div>
  );
}
