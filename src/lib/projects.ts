import fs from "fs";
import path from "path";
import matter from "gray-matter";

// This file must only be imported or executed on the server side (e.g., in getStaticProps or getServerSideProps)

const projectsDirectory = path.join(process.cwd(), "src/content/projects");

type ProjectFrontMatter = {
  enabled: boolean;
  slug?: string;
  [key: string]: any;
};

export function getAllProjects() {
  const filenames = fs.readdirSync(projectsDirectory);

  const projects = filenames.map((filename) => {
    const filePath = path.join(projectsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    const project: ProjectFrontMatter = {
      enabled: typeof data.enabled === "boolean" ? data.enabled : false,
      ...data,
      slug: data.slug || filename.replace(/\.md$/, ""),
    };

    return project;
  });

  return projects.filter((p) => p.enabled);
}
