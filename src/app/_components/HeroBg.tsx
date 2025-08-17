'use client';
export default function HeroBG() {
  return (
    <div
      className="w-full h-full min-h-screen bg-cover bg-no-repeat bg-center opacity-70 backdrop-blur-md"
      style={{ backgroundImage: `url('/images/hero-bg.png')` }}
    ></div>
  );
}