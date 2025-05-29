import fs from "fs";
import path from "path";
import matter from "gray-matter";

// This file must only be imported or executed on the server side (e.g., in getStaticProps or getServerSideProps)

const blogsDirectory = path.join(process.cwd(), "src/content/blogs");

type BlogImage = {
  src: string;
  width: number;
  height: number;
};

export type BlogFrontMatter = {
  notionId: string;
  type: string;
  date: string; // ISO date string
  tags: string;
  enabled: boolean;
  title: string;
  slug: string;
  image?: BlogImage;
  description?: string;
  githubUrl?: string;
  demoUrl?: string;
};

export function getAllBlogs() {
    const filenames = fs.readdirSync(blogsDirectory);

    const blogs = filenames.map((filename) => {
        const filePath = path.join(blogsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, "utf8");
        const { data } = matter(fileContents);

        const blog: BlogFrontMatter = {
            enabled: typeof data.enabled === "boolean" ? data.enabled : false,
            ...data,
            slug: data.slug || filename.replace(/\.md$/, ""),
        };

        return blog;
    });

    return blogs.filter((b) => b.enabled);
}
