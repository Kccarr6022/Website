import fs from "fs";
import path from "path";
import matter from "gray-matter";

// This file must only be imported or executed on the server side (e.g., in getStaticProps or getServerSideProps)

const projectsDirectory = path.join(process.cwd(), "src/content/projects");
type ProjectImage = {
  src: string;
  width: number;
  height: number;
};

export type ProjectFrontMatter = {
  notionId: string;
  type: string;
  tags: string;
  date: Date;
  enabled: boolean;
  title: string;
  slug: string;
  githubUrl?: string;
  demoUrl?: string;
  description?: string;
  image?: ProjectImage;
};

export function getAllProjects() {
  const filenames = fs.readdirSync(projectsDirectory);

  const projects = filenames.map((filename) => {
    const filePath = path.join(projectsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    const project: ProjectFrontMatter = {
      notionId: String(data.notionId),
      type: String(data.type),
      tags: String(data.tags),
      date: new Date(data.date),
      enabled: Boolean(data.enabled),
      title: String(data.title),
      slug: data.slug || filename.replace(/\.md$/, ""),
      githubUrl: data.githubUrl,
      demoUrl: data.demoUrl,
      description: data.description,
      image: data.image,
    };

    return project;
  });

  return projects.filter((p) => p.enabled);
}
