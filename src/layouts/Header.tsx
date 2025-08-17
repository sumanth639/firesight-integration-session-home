import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const headerStyles = `
  .nav-item {
    color: #86878d;
    font-feature-settings: "liga" off, "clig" off;
    font-family: Lekton;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    text-transform: uppercase;
    margin-left: 50px;
  }

  .nav-item:first-child {
    margin-left: 0;
  }

  .nav-item.active {
    font-weight: bold;
    color: white;
  }

  .nav-item.active img {
    display: inline;
  }

  .main-menu-box {
    background: rgba(255, 255, 255, 0.02) !important;
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(32px) !important;
    border-radius: 20px;
    position: absolute;
    top: 70px;
    left: 0;
    z-index: 1000;
  }

  .footer-box {
    background: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(32px);
  }

  .vertical-divider {
    width: 1px;
    background: rgba(255, 255, 255, 0.1);
  }
`;

export function Header({ scrolled = false }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return;
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      <style>{headerStyles}</style>
      <header
        className="fixed top-0 w-full h-[100px] text-white z-[1001] pt-4"
        style={{
          background: scrolled
            ? 'linear-gradient(180deg, #080B16 0%, rgba(8, 11, 22, 0.95) 35.39%, rgba(8, 11, 22, 0.85) 60.89%, rgba(8, 11, 22, 0.30) 82.39%, rgba(8, 11, 22, 0.00) 100%)'
            : 'transparent',
        }}
      >
        <div className="flex h-16 items-center mx-4 md:mx-14">
          {/* Main Navigation Container */}
          <nav className="hidden md:flex flex-auto items-center justify-between font-medium !text-[18px] w-full">
            {/* Left-aligned items and dropdown */}
            <div className="flex items-center relative space-x-16">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo.svg"
                  alt="Logo"
                  width={140}
                  height={36}
                  className="sm:w-[140px] sm:h-[36px] w-[90px] h-[24px]"
                  priority
                />
              </Link>
              <div className="relative">
                <button
                  className="px-2 text-white !text-[18px] !bg-transparent hover:text-white flex items-center"
                  onClick={() => setMenuOpen(!menuOpen)}
                  type="button"
                >
                  <div className="flex items-center">
                    <Image
                      src="/images/GreenBlurPolygon.svg"
                      alt="Session"
                      width={116}
                      height={116}
                      className="inline mx-[-40px]"
                    />
                    <span className="mr-2">FIRESIGHT | SESSIONS</span>
                    <Image
                      src={
                        menuOpen
                          ? '/images/icons/uparrow.png'
                          : '/images/icons/downarrow.png'
                      }
                      alt={menuOpen ? 'Up Arrow' : 'Down Arrow'}
                      width={14}
                      height={14}
                      className="ml-2 mb-1"
                    />
                  </div>
                </button>

                {menuOpen && (
                  <div
                    ref={menuRef}
                    className="main-menu-box text-white w-[388px] h-[250px] mr-0"
                  >
                    <div className="flex justify-end items-center mt-4 pr-5">
                      <button
                        onClick={() => setMenuOpen(false)}
                        className="p-0 bg-transparent"
                        type="button"
                      >
                        <Image
                          src="/images/mobile/menu-close.svg"
                          alt="Close"
                          width={24}
                          height={24}
                          className="lg:size-6 md:size-[18px] size-[20px]"
                        />
                      </button>
                    </div>
                    <div className="flex flex-col px-1">
                      <Link
                        href="/pulse/overview"
                        className=""
                        onClick={() => setMenuOpen(false)}
                      >
                        <div className="flex items-center justify-start h-[52px]">
                          <Image
                            src="/images/BlueBlurPolygon.svg"
                            alt=""
                            width={116}
                            height={116}
                            className="mx-[-33px] my-[-48px]"
                          />
                          FIRESIGHT | PULSE
                        </div>
                      </Link>
                      <div className="flex items-center justify-start h-[52px]">
                        <Image
                          src="/images/GreenBlurPolygon.svg"
                          alt=""
                          width={116}
                          height={116}
                          className="mx-[-33px] my-[-48px]"
                        />
                        <Link
                          href="/session"
                          className=""
                          onClick={() => setMenuOpen(false)}
                        >
                          FIRESIGHT | SESSIONS{' '}
                          <small>
                            <i>(Coming Soon)</i>
                          </small>
                        </Link>
                      </div>
                      <div className="flex items-center justify-start h-[52px]">
                        <Image
                          src="/images/PinkBlurPolygon.svg"
                          alt=""
                          width={116}
                          height={116}
                          className="mx-[-33px] my-[-48px]"
                        />
                        <Link
                          href="/platform"
                          className=""
                          onClick={() => setMenuOpen(false)}
                        >
                          FIRESIGHT | PLATFORM <small>(Coming Soon)</small>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Centered button with flexible space */}
            <div className="flex-grow flex justify-center">
              <button className="button-gradient py-2 px-8" type="button">
                <Link href="/session/start-session" className="start-session-btn">
                  Start Session Now
                </Link>
              </button>
            </div>

            {/* Right-aligned items */}
            <div className="flex items-center">
              <Link href="/about-us" className="nav-item lg:block hidden">
                <Image
                  className="mr-4 hidden"
                  src="/images/PurplePolygon.svg"
                  alt=""
                  width={24}
                  height={24}
                />
                ABOUT US
              </Link>
              <Link href="/ai-impact" className="nav-item">
                <Image
                  className="mr-4 hidden"
                  src="/images/PurplePolygon.svg"
                  alt=""
                  width={24}
                  height={24}
                />
                AI IMPACT INDEX
              </Link>
              <Link
                href="https://blog.firesight.ai/"
                className="nav-item lg:block hidden"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="mr-4 hidden"
                  src="/images/PurplePolygon.svg"
                  alt=""
                  width={24}
                  height={24}
                />
                BLOG
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden block ml-auto w-6 h-6"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open menu"
            type="button"
          >
            <Image
              src="/images/mobile/Menu.svg"
              alt="Menu"
              width={24}
              height={24}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="footer-box !p-6 pb-3 relative overflow-hidden">
            <div className="flex w-full justify-end">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-0 bg-transparent"
                type="button"
              >
                <Image
                  src="/images/mobile/menu-close.svg"
                  alt="Close"
                  width={24}
                  height={24}
                />
              </button>
            </div>

            <div className="flex flex-col space-y-6 text-white text-sm items-center">
              {/* Pulse Section */}
              <div className="flex w-full justify-between pt-8 pb-10 gap-4 font-bold">
                <div className="flex flex-col flex-1 items-center space-y-3">
                  <div>
                    Firesight |
                    <span className="ml-2 bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
                      PULSE
                    </span>
                  </div>
                  <Link href="/pulse/overview" className="hover:underline">
                    Overview
                  </Link>
                  <Link href="/pulse/platform" className="hover:underline">
                    Platform
                  </Link>
                  <Link href="/pulse/pricing" className="hover:underline">
                    Pricing
                  </Link>
                </div>

                <div className="w-px h-24 bg-white/10"></div>

                <div className="flex flex-col flex-1 items-center space-y-3">
                  <Link href="/ai-impact" className="hover:underline">
                    AI Impact Index
                  </Link>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                  <Link href="/about-us" className="hover:underline">
                    About Us
                  </Link>
                  <Link
                    href="https://blog.firesight.ai/"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Blog
                  </Link>
                </div>
              </div>

              <div className="w-full h-px bg-white/10"></div>

              {/* Platform & Sessions */}
              <div className="flex w-full justify-between py-10 gap-4 font-bold">
                <div className="flex flex-col flex-1 items-center space-y-3">
                  <div>
                    Firesight |
                    <span className="ml-2 text-red-400">PLATFORM</span>
                  </div>
                  <Link href="/platform/about" className="hover:underline">
                    About
                  </Link>
                </div>

                <div className="w-px h-12 bg-white/10"></div>

                <div className="flex flex-col flex-1 items-center space-y-3">
                  <div>
                    Firesight |
                    <span className="ml-2 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                      SESSIONS
                    </span>
                  </div>
                  <Link href="/sessions/about" className="hover:underline">
                    About
                  </Link>
                </div>
              </div>

              <div className="w-full h-px bg-white/10"></div>

              {/* Contact */}
              <div className="py-5">
                <a
                  href="mailto:hello@firesight.ai"
                  className="font-normal text-white"
                >
                  hello@firesight.ai
                </a>
              </div>

              <div className="w-full h-px bg-white/10"></div>

              {/* Social Icons */}
              <div className="flex gap-2 py-6">
                <Link
                  href="https://www.linkedin.com/company/firesightai/about/?viewAsMember=true"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs">in</span>
                  </div>
                </Link>
                <Link href="/" aria-label="CB">
                  <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs">CB</span>
                  </div>
                </Link>
                <Link
                  href="https://twitter.com/FiresightAi/"
                  aria-label="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-8 h-8 bg-black rounded flex items-center justify-center border border-white">
                    <span className="text-white text-xs">X</span>
                  </div>
                </Link>
                <Link
                  href="https://www.discord.com/"
                  aria-label="Discord"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs">D</span>
                  </div>
                </Link>
              </div>

              <div className="w-full h-px bg-white/10"></div>

              <div className="flex items-center my-8">
                <div className="text-white text-sm font-light tracking-wider">
                  D&apos;VINCI - WORK LESS
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
