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
  date: Date; // ISO date string
  tags: string;
  enabled: boolean;
  title: string;
  slug: string;
  image?: BlogImage;
  description?: string;
  url?: string; // Optional URL for external blogs
  readingTime?: number; // Estimated reading time in minutes
};

export function getAllBlogs(): BlogFrontMatter[] {
  const filenames = fs.readdirSync(blogsDirectory);

  const blogs = filenames.map((filename) => {
    const filePath = path.join(blogsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    // Manual, explicit assignment to avoid type errors
    const blog: BlogFrontMatter = {
      notionId: String(data.notionId),
      type: String(data.type),
      date: new Date(data.date),
      tags: String(data.tags),
      enabled: Boolean(data.enabled),
      title: String(data.title),
      slug: data.slug || filename.replace(/\.md$/, ""),
      image: data.image,
      description: data.description,
      url: data.url,
      readingTime: data.readingTime,
    };

    return blog;
  });

  return blogs.filter((b) => b.enabled);
}