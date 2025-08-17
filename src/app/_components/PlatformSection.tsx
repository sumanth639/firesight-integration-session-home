"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { platformSectionCardInfo } from "@/utils/constant/firesight";

const pages = [
  [0, 3],
  [3, 3],
];

const swipeConfidenceThreshold = 100;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default function PlatformSection() {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage(([prevPage]) => {
      const newPage = (prevPage + newDirection + pages.length) % pages.length;
      return [newPage, newDirection];
    });
  };

  return (
    <section className="relative md:px-14 px-4 w-full flex flex-col items-center justify-center mb-[73px]">
      <div className="red-purple-shine-session z-[-100000] md:w-[80.56vw] md:h-[69.44vw] w-[223.47vw] h-[164vw] md:top-[16.66vw] top-[150px]"></div>
      <div className="flex md:gap-11 gap-3 text-white items-center justify-between md:mt-59 mt-[90px] md:mb-29 mb-0 md:h-16 h-[30px]">
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={214}
            height={53}
            priority
            className="md:w-[264px] md:h-[64px] w-[124px] h-[30px]"
            style={{ width: "auto", height: "auto" }}
          />
        </Link>
        <span className="md:text-[45px] text-[20px]">|</span>
        <span className="md:text-[60px] text-[30px] font-publica-play">
          Platform
        </span>
      </div>
      <div
        style={{
          background: 'url("/images/platforms.svg") no-repeat',
          backgroundSize: "cover",
          width: "72.57vw",
          height: "60.14vw",
        }}
        className="hidden md:block"
      >
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(8, 11, 22, 0.00) 31.41%, rgba(8, 11, 22, 0.93) 80.91%, #080B16 100%)",
            width: "100%",
            height: "100%",
          }}
        ></div>
      </div>
      <div
        style={{
          background: 'url("/images/mobile/platform-show-mobile.svg")',
          backgroundSize: "contain",
        }}
        className="w-[100vw] h-[206.07vw] bg-no-repeat block md:hidden"
      ></div>

      <div className="w-full main-box text-white absolute md:mt-[-21.46vw] mt-[-93.8vw] md:!p-15 md:!pl-22 !p-[16px] !pb-[30px]">
        <div className="flex flex-wrap w-full mb-16 gap-5">
          <div className="lg:flex-2 w-full">
            <h2 className="md:text-[43.8px] text-[28px] font-extrabold uppercase leading-11">
              Unified intelligence
              <br /> platform
            </h2>
            <p className="text-[12px] leading-normal text-white block md:hidden mt-2">
              SaaS solution designed to centralize and optimize workflows for
              independent professionals. Tailored for freelancers,
              solopreneurs, and consultants in cognitive labor fields, it
              delivers an all-in-one tool to streamline tasks, manage
              projects, and access actionable insights. With seamless
              integration of personal data, apps, and workflows, the
              platform&apos;s Unified Dashboard serves as the command center,
              bringing everything you need into one intuitive space
            </p>
            <Button
              variant="outline"
              className="cursor-pointer red-btn-bg text-[16px] mt-[20px] bg-transparent border-0 px-8 py-5 text-white hover:text-black font-bold"
            >
              Explore Platform
            </Button>
          </div>
          <div className="md:text-[18px] text-[12px] lg:flex-3 w-full hidden md:block">
            SaaS solution designed to centralize and optimize workflows for
            independent professionals. Tailored for freelancers, solopreneurs,
            and consultants in cognitive labor fields, it delivers an
            all-in-one tool to streamline tasks, manage projects, and access
            actionable insights. With seamless integration of personal data,
            apps, and workflows, the platform&apos;s Unified Dashboard serves as
            the command center, bringing everything you need into one
            intuitive space
          </div>
        </div>
        <div className="sm:flex flex-wrap w-full justify-between lg:gap-y-16 md:gap-y-10 gap-y-3 gap-x-0 items-stretch hidden">
          {platformSectionCardInfo.map((item, index) => (
            <div
              className="main-small-box lg:!w-[30%] sm:!w-[46%] !w-full relative cursor-pointer"
              key={index}
            >
              <div className="md:p-6 p-[16px] opacity-80">
                <div className="flex items-center justify-between w-full">
                  <h3 className="md:text-[30px] text-[20px] font-extrabold">
                    {item.title}
                  </h3>
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={23}
                    height={23}
                    className="md:mr-4 mr-1 md:h-[23px] h-[20px]"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
                <p className="md:text-[15px] text-[12px]">{item.content}</p>
                <div className="red-polygon-piece absolute bottom-0 right-0 w-[150px] h-[150px] pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        <div className="relative w-full shadow h-72 rounded overflow-hidden sm:hidden block">
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
              transition={{ duration: 0.1 }}
              className="absolute w-full h-full flex items-center justify-stretch"
            >
              <div className="flex flex-col w-full h-full justify-stretch gap-3 items-stretch">
                {platformSectionCardInfo
                  .slice(pages[page][0], pages[page][0] + pages[page][1])
                  .map((item, index) => (
                    <div
                      className="main-small-box lg:!w-[30%] sm:!w-[46%] !w-full relative cursor-pointer"
                      key={index}
                    >
                      <div className="md:p-6 p-[16px] opacity-80">
                        <div className="flex items-center justify-between w-full">
                          <h3 className="md:text-[30px] text-[20px] font-extrabold">
                            {item.title}
                          </h3>
                          <Image
                            src={item.icon}
                            alt={item.title}
                            width={23}
                            height={23}
                            className="md:mr-4 mr-1 md:h-[23px] h-[20px]"
                            style={{ width: "auto", height: "auto" }}
                          />
                        </div>
                        <p className="md:text-[15px] text-[12px]">
                          {item.content}
                        </p>
                        <div className="red-polygon-piece absolute bottom-0 right-0 w-[150px] h-[150px] pointer-events-none" />
                      </div>
                    </div>
                  ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center gap-2 mt-5 sm:hidden">
          {pages.map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index - page)}
              className={`${
                page === index
                  ? "h-[8.66px] w-[26px]"
                  : "w-[10px] h-[10px] opacity-50"
              }`}
            >
              {page === index ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="10"
                  viewBox="0 0 26 10"
                  fill="none"
                >
                  <path
                    d="M25.5275 4.21311C25.8175 4.69611 25.8124 5.30088 25.5143 5.77894L23.7404 8.62384C23.4665 9.06317 22.9853 9.33018 22.4676 9.33018L3.44896 9.33018C2.92224 9.33018 2.43412 9.05391 2.16298 8.60234L0.463642 5.77221C0.178291 5.29698 0.178291 4.70312 0.463642 4.22788L2.16298 1.39776C2.43412 0.946186 2.92225 0.669921 3.44897 0.669921L22.551 0.669922C23.0778 0.669922 23.5659 0.946188 23.837 1.39776L25.5275 4.21311Z"
                    fill="white"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                >
                  <path
                    opacity="0.5"
                    d="M9.56699 4.25C9.83494 4.7141 9.83494 5.2859 9.56699 5.75L7.93301 8.58013C7.66506 9.04423 7.16987 9.33013 6.63397 9.33013L3.36603 9.33013C2.83013 9.33013 2.33494 9.04423 2.06699 8.58013L0.433013 5.75C0.165064 5.2859 0.165064 4.7141 0.433013 4.25L2.06699 1.41987C2.33494 0.955771 2.83013 0.669872 3.36603 0.669872L6.63397 0.669873C7.16987 0.669873 7.66506 0.955771 7.93301 1.41987L9.56699 4.25Z"
                    fill="white"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
