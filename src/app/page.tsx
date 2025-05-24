'use client';

import Nav from "@/components/Nav";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 flex flex-col items-center">
      <Nav />
      <section
        id="home"
        className="flex flex-col md:flex-row items-center justify-center mt-16 gap-10 w-full max-w-4xl px-4"
      >
        <Image
          src="/kaden.png"
          alt="Kaden Carr"
          width={160}
          height={160}
          className="rounded-full object-cover border-4 border-gray-700 shadow-lg"
        />
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-6 md:mt-0">
            Kaden Carr
          </h1>
          <p className="text-gray-300 mt-2 text-center md:text-left max-w-xl">
            Welcome to my portfolio! I am a passionate developer eager to build
            creative and impactful solutions. Explore my projects, learn more about
            me, or get in touch.
          </p>
        </div>
      </section>
    </main>
  );
}
