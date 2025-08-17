'use client';
import './page.css';
import HeroSection from './_components/HeroSection';
// import PulseSection from './_components/PulseSection';
// import SessionsSection from './_components/SessionsSection';
// import PlatformSection from './_components/PlatformSection';
// import HeroBG from './_components/HeroBg';
import AIConferenceSection from './_components/AIConferenceSection';
import Features from './_components/Features';
import Pricing from './_components/Pricing';

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <HeroBG /> */}
      <div >
        <AIConferenceSection />
      </div>
      <Features />
      <Pricing/>
      {/* <PulseSection /> */}
      {/* <SessionsSection /> */}
      {/* <PlatformSection /> */}
    </>
  );
}
