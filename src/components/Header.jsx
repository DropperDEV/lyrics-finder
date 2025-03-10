import Logo from "../assets/icons8-music.svg"

export function Header() {
  return (
    <header className="flex  justify-baseline items-center gap-1">
      <img src={Logo} alt="Logo" className="size-12"/>
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl text-left text-[#fffffe]">Lyrics Finder</h1>
        <span className="block w-36 h-[2px] bg-[#e53170]"></span>
      </div>
    </header>
  );
}
