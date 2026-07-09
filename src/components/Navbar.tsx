import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-6 md:py-5 transition-all duration-300">
      <div className="w-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-3xl font-serif tracking-[0.15em] text-white">
          VILMA
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2">
          <Link
            href="#"
            className="px-3 py-[6px] text-[14px] font-medium tracking-[0.2px] text-white uppercase border-2 border-white rounded-full hover:bg-white hover:text-black transition-colors"
          >
            Recursos Gratuitos
          </Link>
          <Link
            href="#"
            className="px-3 py-[6px] text-[14px] font-medium tracking-[0.2px] text-white uppercase border-2 border-white rounded-full hover:bg-white hover:text-black transition-colors"
          >
            Libro
          </Link>
          <Link
            href="#"
            className="px-3 py-[6px] text-[14px] font-medium tracking-[0.2px] text-white uppercase border-2 border-white rounded-full hover:bg-white hover:text-black transition-colors"
          >
            Entrenamientos Gratuitos
          </Link>

          {/* Search Icon */}
          <button className="flex items-center justify-center w-[38px] h-[38px] ml-2 text-black bg-white rounded-full hover:scale-105 transition-transform">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[16px] h-[16px]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          {/* Menu Button */}
          <button className="flex items-center justify-center w-[38px] h-[38px] ml-1 text-[9px] font-bold tracking-widest text-black uppercase bg-white rounded-full hover:scale-105 transition-transform">
            Menu
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden flex items-center justify-center w-[38px] h-[38px] text-[9px] font-bold tracking-widest text-black uppercase bg-white rounded-full">
          Menu
        </button>
      </div>
    </header>
  );
}
