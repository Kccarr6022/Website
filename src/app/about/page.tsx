"use client";
import Nav from "@/components/Nav";
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-gray-900 flex flex-col items-center">
      <Nav />
      <section className="max-w-2xl w-full mx-auto mt-12 p-8 bg-gray-800 rounded-lg shadow-lg flex flex-col items-center">
        <Image
          src="/kaden.png"
          alt="Kaden Carr"
          width={100}
          height={100}
          className="rounded-full object-cover border-4 border-gray-700 shadow mb-4"
        />
        <h1 className="text-3xl font-bold text-white mb-2">About Me</h1>
        <p className="text-gray-300 text-center">
          Hi! I&apos;m Kaden Carr, a passionate developer who loves building creative and impactful solutions.
          I enjoy working with modern web technologies and am always eager to learn and take on new challenges.
          Whether it&apos;s front-end, back-end, or full-stack development, I strive to deliver clean, efficient, and user-friendly experiences.
        </p>
      </section>
    </main>
  );
}
