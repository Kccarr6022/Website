import Image from "next/image";
import Nav from "@/components/Nav";
import { getAllProjects } from "@/lib/projects";

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <main className="min-h-screen bg-gray-900 flex flex-col items-center">
      <Nav />
      <section className="max-w-3xl w-full mx-auto mt-12 p-8 bg-gray-800 rounded-lg shadow-lg flex flex-col items-center my-4">
        <h1 className="text-4xl font-bold text-white mb-2">Projects</h1>
        <p className="text-gray-300 text-center mb-8 max-w-2xl">
          Explore a selection of my recent work, demonstrating my experience with modern web technologies and my commitment to quality solutions.
        </p>
        <div className="w-full flex flex-col gap-8">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="bg-gray-700 p-6 rounded-xl text-white flex flex-col md:flex-row items-center shadow transition-transform hover:scale-[1.02] hover:shadow-xl"
            >
              {project.image && (
                <div className="relative mb-4 md:mb-0 md:mr-6 w-full md:w-40 h-32 overflow-hidden rounded-lg shadow">
                  <Image
                    src={project.image.src}
                    alt={project.title}
                    width={project.image.width}
                    height={project.image.height}
                    className="object-cover w-full h-full"
                  />
                </div>
              )}
              <div className="flex-1 flex flex-col items-center md:items-start">
                <h2 className="text-2xl font-semibold mb-1">{project.title}</h2>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags?.split(",").map((tag: string) => (
                    <span
                      key={tag}
                      className="bg-gray-600 text-xs px-2 py-1 rounded-full text-gray-200"
                    >
                      {tag.trim()}
                    </span>
                  ))}
                </div>
                {project.description && (
                  <p className="text-gray-300 text-sm mb-2">{project.description}</p>
                )}
                <div className="flex gap-3 mt-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline text-xs"
                    >
                      GitHub
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:underline text-xs"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
