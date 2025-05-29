import Nav from "@/components/Nav";
import { getAllBlogs } from "@/lib/blogs";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  const blogs = getAllBlogs();

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center">
      <Nav />
      <section className="max-w-3xl w-full mx-auto mt-14 p-10 bg-gray-800 rounded-2xl shadow-2xl flex flex-col items-center my-6">
        <h1 className="text-4xl font-extrabold text-white mb-3 font-serif tracking-tight">Blog</h1>
        <p className="text-gray-300 text-center mb-10 max-w-2xl italic">
          Welcome to my blog! Here you&apos;ll find articles, tutorials, and updates.
        </p>
        <div className="w-full flex flex-col gap-12">
          {blogs.map((blog, idx) => (
            <div key={blog.slug}>
              <Link
                href={blog.url || `/blog/${blog.slug}`}
                className="block focus:outline-none"
                tabIndex={-1}
              >
                <article className="bg-gray-700/90 p-7 rounded-2xl flex flex-col md:flex-row items-center shadow-lg border border-gray-600 transition-all hover:shadow-xl hover:border-gray-400 group">
                  {blog.image && (
                    <Image
                      src={blog.image.src}
                      alt={blog.title}
                      width={blog.image.width}
                      height={blog.image.height}
                      className="mb-4 md:mb-0 md:mr-8 rounded-lg shadow-lg max-h-36 object-cover w-full md:w-44 border border-gray-600"
                    />
                  )}
                  <div className="flex-1 flex flex-col items-center md:items-start">
                    <h2 className="text-2xl font-serif font-bold mb-2 text-white group-hover:underline transition">
                      {blog.title}
                    </h2>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 mb-3">
                      <span>{blog.date.toDateString()}</span>
                      {blog.readingTime && (
                        <>
                          <span>•</span>
                          <span>{blog.readingTime} min read</span>
                        </>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {blog.tags?.split(",").map((tag: string) => (
                        <span
                          key={tag}
                          className="bg-gray-600/80 text-xs px-3 py-1 rounded-full text-gray-100 font-semibold tracking-wide"
                        >
                          {tag.trim()}
                        </span>
                      ))}
                    </div>
                    {blog.description && (
                      <p className="text-gray-300 text-base mb-1 leading-relaxed">{blog.description}</p>
                    )}
                  </div>
                </article>
              </Link>
              {idx < blogs.length - 1 && (
                <div className="my-8 border-t border-gray-700 opacity-40" />
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
