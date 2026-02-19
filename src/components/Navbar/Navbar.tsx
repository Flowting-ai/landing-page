"use client";
import { ChevronLeft, Ellipsis, Moon, Sun, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useLayoutEffect, useState } from "react";

const SCROLL_HIDE_THRESHOLD = 70;

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolledPastThreshold, setIsScrolledPastThreshold] = useState(false);

  useLayoutEffect(() => {
    const handleScroll = () => {
      setIsScrolledPastThreshold(window.scrollY > SCROLL_HIDE_THRESHOLD);
    };
    handleScroll(); // set initial value
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    return (
      saved ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
    );
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);
  const toggleMobileMenu = useCallback(
    () => setIsMobileMenuOpen((prev) => !prev),
    [],
  );

  useLayoutEffect(() => {
    if (isMobileMenuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isMobileMenuOpen]);

  // Memoized theme application function
  const applyTheme = useCallback((newTheme: "light" | "dark") => {
    const root = document.documentElement;

    if (newTheme === "dark") {
      root.setAttribute("data-theme", "dark");
      root.classList.add("dark");
    } else {
      root.removeAttribute("data-theme");
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", newTheme);
  }, []);

  // Sync DOM with theme state (no setState call inside)
  useLayoutEffect(() => {
    applyTheme(theme);
  }, [theme, applyTheme]);

  // Memoized theme change handler
  const handleThemeChange = useCallback(
    (newTheme: "light" | "dark") => {
      applyTheme(newTheme);
      setTheme(newTheme);
      setIsDropdownOpen(false);
    },
    [applyTheme],
  );

  // Memoized dropdown toggle
  const toggleDropdown = useCallback(() => {
    setIsDropdownOpen((prev) => !prev);
  }, []);

  return (
    <>
    {/* Desktop */}
    <nav className="hidden lg:flex w-full h-auto">
      <div className="w-full sm:hidden block font-medium tracking-tight text-center text-lg lg:text-[18px] text-transparent bg-clip-text bg-linear-to-r from-zinc-300 via-zinc-700 to-zinc-300">
        <p>FlowtingAI</p>
      </div>
      <div className="w-full h-12 lg:h-14 bg-nav-bg rounded-2xl shadow-xs shadow-main-border flex items-center justify-between pl-4 pr-2 md:px-5 py-2.5">
        {/* Left - Logo*/}
        <div className="relative w-auto h-full flex items-center gap-4">
          {theme === "light" ? (
            <Image
              src="./hero/FlowtingLogo.svg"
              alt="Flowting AI Logo"
              width={28}
              height={28}
              className="w-6 h-6 lg:w-7 lg:h-7"
            />
          ) : (
            <Image
              src="./hero/FlowtingLogoSilver.svg"
              alt="Flowting AI Logo"
              width={28}
              height={28}
              className="w-6 h-6 lg:w-7 lg:h-7"
            />
          )}
          <p className="hidden sm:block font-normal tracking-tight text-sm md:text-base text-black lg:text-[18px]">
            FlowtingAI
          </p>
        </div>

        {/* Right - Navigation CTAS & Theme Selector */}
        <div className="w-full md:w-auto h-full flex items-center justify-end gap-2 md:gap-3">
          {/* Theme Selector Dropdown */}
          <div className="hidden relative">
            <button
              onClick={toggleDropdown}
              className="cursor-pointer flex items-center gap-2 text-xs md:text-sm lg:text-base text-text bg-main-bg border border-main-border rounded-xl shadow-sm hover:scale- px-3 py-2 transition-all duration-300"
              aria-label="Toggle theme"
              aria-expanded={isDropdownOpen}
              title={`Current theme: ${theme}`}
            >
              {theme === "light" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
              <span className="hidden sm:inline">
                {theme === "light" ? "Light" : "Dark"}
              </span>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-background border border-main-border rounded-xl shadow-lg z-50 overflow-hidden">
                <button
                  onClick={() => handleThemeChange("light")}
                  className={`cursor-pointer w-full text-left px-4 py-3 text-sm flex items-center gap-2 transition-colors ${
                    theme === "light"
                      ? "bg-main-bg text-text font-medium"
                      : "text-text hover:bg-main-bg"
                  }`}
                  type="button"
                >
                  <Sun className="w-4 h-4" />
                  Light
                </button>
                <button
                  onClick={() => handleThemeChange("dark")}
                  className={`cursor-pointer w-full text-left px-4 py-3 text-sm flex items-center gap-2 transition-colors ${
                    theme === "dark"
                      ? "bg-main-bg text-text font-medium"
                      : "text-text hover:bg-main-bg"
                  }`}
                  type="button"
                >
                  <Moon className="w-4 h-4" />
                  Dark
                </button>
              </div>
            )}
          </div>

          <a
            href="https://app.flowtingai.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs md:text-sm lg:text-base text-foreground bg-main-bg hover:bg-zinc-300/40 border border-main-border rounded-xl shadow-sm px-4 py-2 transition-all duration-300"
          >
            Sign In
          </a>
          {pathname === "/" ? (
            <Link
              href={"/contact"}
              className="text-xs md:text-sm lg:text-base text-nav-bg bg-nav-button-bg border border-nav-button-bg rounded-xl shadow-sm px-4 py-2 transition-all duration-300"
            >
              Get Started
            </Link>
          ) : pathname === "/contact" ? (
            <Link
              href="/"
              className="text-xs md:text-sm lg:text-base text-text! hover:text-black bg-main-bg hover:bg-zinc-300/40 border border-main-border rounded-xl shadow-sm transition-colors px-4 py-2 inline-flex items-center gap-1"
            >
              <ChevronLeft /> Back to Home
            </Link>
          ) : null}
        </div>
      </div>
    </nav>

    {/* Mobile */}
    <nav className="z-100 fixed top-0 w-full h-auto flex lg:hidden px-4 py-1">
          <div className="relative w-full h-12 flex items-center justify-between">
            {/* Logo */}
            <button className="bg-white/50 border border-main-border rounded-xl backdrop-blur-sm p-2">
            <Image
              src="./hero/FlowtingLogo.svg"
              alt="Flowting AI Logo"
              width={28}
              height={28}
              className="w-6 h-6 lg:w-7 lg:h-7 object-contain"
            /></button>
            <h3
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-medium tracking-tight text-center text-lg text-transparent bg-clip-text bg-linear-to-br from-zinc-400 via-zinc-700 to-zinc-400 transition-opacity duration-300 ${
                isScrolledPastThreshold ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
            >
              FlowtingAI
            </h3>            
            {/* Navigation CTA - opens slide-in menu */}
            <button
              onClick={toggleMobileMenu}
              className="bg-white/50 border border-main-border rounded-xl backdrop-blur-sm p-2 transition-transform active:scale-95"
              aria-label="Open menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Ellipsis className="w-6 h-6 lg:w-7 lg:h-7" />
            </button>
          </div>
    </nav>

    {/* Mobile slide-in menu from left */}
    <div
      className={`lg:hidden fixed inset-0 z-100 h-screen ${isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!isMobileMenuOpen}
    >
      {/* Backdrop */}
      <button
        type="button"
        onClick={closeMobileMenu}
        className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Close menu"
      />
      {/* Panel */}
      <aside
        className={`absolute top-0 left-0 h-full w-[min(85vw,320px)] bg-nav-bg/95 backdrop-blur-xl border-r border-main-border shadow-2xl flex flex-col transition-all duration-300 ease-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="relative w-full h-full flex flex-col overflow-hidden">
        <div className="z-2 bg-white/50 flex items-center justify-between border-b border-main-border backdrop-blur-xs px-5 py-4">
          <span className="font-medium tracking-tight text-lg text-transparent bg-clip-text bg-linear-to-br from-zinc-400 via-zinc-700 to-zinc-400">
            FlowtingAI
          </span>
          <button
            onClick={closeMobileMenu}
            className="w-8 h-8 text-foreground hover:bg-white/10 border border-main-border rounded-xl flex items-center justify-center active:scale-95 transition-all"
            aria-label="Close menu"
          >
            <X className="w-4 h-4 text-text" />
          </button>
        </div>
        
        <nav className="z-2 flex flex-col gap-2 p-4 pt-6">
          <a
            href="https://app.flowtingai.com/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobileMenu}
            className="text-foreground bg-main-bg border border-main-border rounded-xl shadow-sm px-4 py-3 text-center font-medium transition-all hover:bg-main-bg/80 active:scale-[0.98]"
          >
            Sign In
          </a>
          {pathname === "/" ? (
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="text-nav-bg bg-nav-button-bg border border-nav-button-bg rounded-xl shadow-sm px-4 py-3 text-center font-medium transition-all hover:opacity-90 active:scale-[0.98]"
            >
              Get Started
            </Link>
          ) : pathname === "/contact" ? (
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="text-text hover:text-black transition-colors px-4 py-3 text-center font-medium inline-flex items-center justify-center gap-1"
            >
              <ChevronLeft className="w-4 h-4" /> Back to Home
            </Link>
          ) : null}
        </nav>

        {/* <div className="z-10 bg-white/50 mt-auto border-t border-main-border backdrop-blur-xs p-4">
          <button
            onClick={closeMobileMenu}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-foreground bg-main-bg border border-main-border font-medium transition-all duration-300 hover:bg-main-bg/80 active:scale-[0.98]"
            aria-label="Close menu"
          >
            <X className="w-4 h-4" /> Close
          </button>
        </div> */}
        <Image
              src="./hero/FlowtingLogo.svg"
              alt="Flowting AI Logo"
              fill
              className="scale-192 z-1 absolute -translate-x-22 -translate-y-6 object-center object-contain opacity-10"
            />
        </div>
      </aside>
    </div>
    </>
  );
}
