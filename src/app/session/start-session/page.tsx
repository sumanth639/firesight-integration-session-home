"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// Total number of slides will be determined after slideData is defined

export default function StartSessionPage() {
  const [[page, direction], setPage] = useState([0, 0]);

  const swipeConfidenceThreshold = 100;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setPage(([prevPage]) => {
      const newPage = (prevPage + newDirection + totalSlides) % totalSlides;
      return [newPage, newDirection];
    });
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 4000); // Change slide every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const subData = [
    {
      icon: "/images/icons/green-pin.svg",
      title: "Pin to Toolbar",
    },
    {
      icon: "/images/icons/green-pin.svg",
      title: "Pin to Startbar",
    },
    {
      icon: "/images/icons/green-download.svg",
      title: "Save as Desktop App",
    },
  ];

  const slideData = [
    { alt: "ai-co-pilot", image: "/images/session/ai-co-pilot.svg" },
    {
      alt: "meeting-summaries",
      image: "/images/session/meeting-summaries.svg",
    },
    {
      alt: "session-libraries",
      image: "/images/session/session-libraries.svg",
    },
    {
      alt: "intelligence-knowledge-base",
      image: "/images/session/intelligence-knowledge-base.svg",
    },
    { alt: "meeting-flow", image: "/images/session/meeting-flow.svg" },
    {
      alt: "best-in-class-performance",
      image: "/images/session/best-in-class-performance.svg",
    },
  ];
  const totalSlides = slideData.length;
  return (
    <div className="w-full flex relative md:px-14 px-4 flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-[-100]">
        <div className="green-shine-session-mobile md:hidden block"></div>
        <div className="green-shine-session md:block hidden"></div>
        <div className="green-shine-session-small md:block hidden"></div>
        <div className="green-shine-session-2nd-small md:block hidden"></div>
        <div className="green-shine-session-3rd-small md:block hidden"></div>
      </div>
      <div className="flex flex-wrap p-[50px] -top-[20px] text-white items-center justify-between border bg-[rgba(255,255,255,0.01)] border-[rgba(255,255,255,0.1)] backdrop-blur-[32px] rounded-[20px] w-full relative">
        <div className="md:w-5/9 w-full pt-[30px] pr-[100px]">
          <h2 className="uppercase text-[35px] font-bold">
            smarter calls,{" "}
            <span className="bg-gradient-to-b from-[rgba(20,255,0,0.55)] to-[rgba(0,240,255,0.62)] bg-clip-text text-transparent">
              faster decisions
            </span>
          </h2>
          <p className="text-[16px] pt-[40px]">
            Sessions is an AI-Native browser-based video conferencing platform
            and your real-time decision co-pilot. Move from discussion to
            decision faster with Firesight | Sessions.
          </p>
          <div className="flex flex-wrap mt-[50px] gap-4">
            <Link href="/conference">
              <button
                className="flex items-center text-[18px] px-[36px] py-[14px] text-white font-bold cursor-pointer"
                style={{
                  border: "1px solid rgba(15, 251, 73, 0.59)",
                  borderRadius: "55px",
                  background:
                    "linear-gradient(88deg, rgba(3, 139, 152, 0.06) 5.46%, rgba(15, 251, 73, 0.06) 71.42%)",
                  boxShadow: "0 3.131px 46.972px 0 rgba(13, 63, 46, 0.5)",
                }}
              >
                <img src="/images/icons/camera.svg" alt="New Session" className="pr-2" />
                New Session
              </button>
            </Link>
            <button
              className="flex items-center text-[18px] px-[36px] py-[14px] text-white font-bold"
              style={{
                border: "1px solid #262933",
                borderRadius: "55px",
                background: "rgba(8, 11, 22, 0.50)",
                boxShadow: "0 3.131px 46.972px 0 rgba(13, 63, 46, 0.5)",
              }}
            >
              <img
                src="/images/icons/link.svg"
                alt="New Session"
                className="pr-2"
              />
              Enter Session Link
            </button>
          </div>
          <div className="border border-b-[1px] border-[rgba(255,255,255,0.1)] mt-[45px] w-full"></div>
          <div className="flex flex-wrap mt-[50px] gap-4">
            {subData.map((item, index) => (
              <div key={index} className="flex items-center gap-2 p-2 ">
                <img src={item.icon} alt={item.title} className="w-6 h-6" />
                <span className="text-[14px]">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="border border-[rgba(255,255,255,0.1)] px-[30px] pt-[30px] pb-[10px] md:w-4/9 w-full rounded-[20px] relative flex flex-col items-center min-h-[450px] h-[450px] justify-between">
          <div className="flex-1 w-full flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) paginate(1);
                  else if (swipe > swipeConfidenceThreshold) paginate(-1);
                }}
                variants={{
                  enter: (dir: number) => ({
                    x: dir > 0 ? 300 : -300,
                    opacity: 0,
                  }),
                  center: {
                    x: 0,
                    opacity: 1,
                  },
                  exit: (dir: number) => ({
                    x: dir < 0 ? 300 : -300,
                    opacity: 0,
                  }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-full flex items-center justify-center"
              >
                {(() => {
                  const currentIndex = page % slideData.length;
                  const item = slideData[currentIndex];
                  return (
                    <img
                      src={item.image}
                      alt={item.alt}
                      key={item.alt}
                      className="mx-auto"
                    />
                  );
                })()}
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Custom Polygon Pagination */}
          <div className="flex items-center justify-center gap-3 mt-6 mb-2 z-10">
            {slideData.map((item, idx) => (
              <button
                key={item.alt}
                onClick={() => setPage([idx, idx > page ? 1 : -1])}
                className={`h-6 flex items-center justify-center bg-transparent border-none p-0 focus:outline-none transition-all duration-200 ${page === idx ? "w-[18px]" : "w-[10px]"
                  }`}
                style={{ background: "none" }}
                aria-label={`Go to slide ${idx + 1}`}
              >
                <img
                  src={
                    page === idx
                      ? "/images/icons/polygon-active.svg"
                      : "/images/icons/polygon.svg"
                  }
                  alt={page === idx ? "Active" : "Inactive"}
                  width={page === idx ? 18 : 10}
                  height={10}
                  style={{
                    display: "block",
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                    transition: "width 0.2s",
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
      <div
        style={{
          background: 'url("/images/mobile/sessions-show-mobile.svg")',
          backgroundSize: "contain",
        }}
        className="w-[100vw] h-[206.07vw] bg-no-repeat block md:hidden"
      ></div>
    </div>
  );
}
