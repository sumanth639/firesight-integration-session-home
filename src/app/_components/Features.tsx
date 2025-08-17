'use client';
import { sessionSectionCardInfo } from '@/utils/constant/firesight';

export default function Features() {
  return (
    <section className="w-full flex justify-center">
      <div className="max-w-[1440px] w-full px-4 flex flex-col">
        <h3 className="gradient-text text-left text-2xl font-semibold">FEATURES</h3>
        <h2 className="text-white text-left text-2xl md:text-5xl font-bold uppercase leading-tight mt-8  mb-12">
          AI-Driven Collaboration
          <br />
          TRANSFORM YOUR WORKFLOW
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full text-white">
          {sessionSectionCardInfo.map((item, index) => (
            <div key={index} className="main-small-box relative cursor-pointer">
              <div className="md:p-6 p-[16px] opacity-80">
                <h3 className="md:text-[30px] text-[20px] font-extrabold">
                  {item.title}
                </h3>
                <p className="md:text-[15px] text-[12px]">{item.content}</p>
                <div className="green-polygon-piece absolute bottom-0 right-0 w-[150px] h-[150px] pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
