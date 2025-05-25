"use client";
import Nav from "@/components/Nav";

export default function Projects() {
  return (
    <main className="min-h-screen bg-gray-900 flex flex-col items-center">
      <Nav />
      <section className="max-w-2xl w-full mx-auto mt-12 p-8 bg-gray-800 rounded-lg shadow-lg flex flex-col items-center">
        <h1 className="text-3xl font-bold text-white mb-2">Projects</h1>
        <p className="text-gray-300 text-center">
          Here y&apos;ll find a showcase of my projects. Check back soon for updates!
        </p>
      </section>
    </main>
  );
}