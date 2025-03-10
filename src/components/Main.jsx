export function Main() {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col  gap-4 mb-10">
        <ZoneTitle />
        <SongFinderZone
          searchLyrics={searchLyrics}
          setArtist={setArtist}
          setSong={setSong}
        />
      </div>
      <CardLyrics song={song} artist={artist} lyrics={lyrics} error={error} />
    </div>
  );
}
