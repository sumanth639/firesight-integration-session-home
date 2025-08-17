"use client";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="flex items-center justify-center space-x-6 w-full pt-[200px] md:pt-[250px] md:px-[140px] mb-20">
      <Link href="/">
        <Image
          src="/images/logo.svg"
          alt="Firesight Logo"
          width={214}
          height={53}
          priority
          className="w-full h-full"
        
        />
      </Link>
      <div className="h-10 w-[1px] bg-white opacity-20"></div>
      <h1 className="font-publica-play text-6xl font-extrabold tracking-wide text-white">
        Sessions
      </h1>
    </div>
  );
}