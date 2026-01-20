import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client } from "../lib/sanity";

const BlogIntro = () => {
  const [latestBlogs, setLatestBlogs] = useState([]);
  const [olderBlogs, setOlderBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(6); // Number of blogs per page

  useEffect(() => {
    let mounted = true;
    const fetchBlogs = async () => {
      try {
        // Fetch all posts once, ordered newest first, then split in JS
        const all = await client.fetch(`*[_type == "post"] | order(publishedAt desc){
          _id,
          title,
          slug,
          excerpt,
          publishedAt,
          mainImage{ asset->{url} }
        }`);

        if (!mounted) return;
        setLatestBlogs(all.slice(0, 4));
        setOlderBlogs(all.slice(4));
        setCurrentPage(1); // reset to first page whenever data loads
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
    return () => {
      mounted = false;
    };
  }, []);

  // Pagination logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = olderBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.max(1, Math.ceil(olderBlogs.length / blogsPerPage));

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((p) => p + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((p) => p - 1);
  };

  const formatDate = (d) => (d ? new Date(d).toLocaleDateString() : "");

  return (
    <section className="bg-background text-neutral-default py-20 px-4 sm:px-6 lg:px-0 pt-24 sm:pt-28 lg:pt-36">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-4 xl:px-0 flex flex-col gap-12">
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-4">
          <h1 className="text-h2 sm:text-h1 lg:text-h1 font-satoshi">
            THE {" "}
            <span className="text-brand-primary">BLOG </span>
          </h1>
          <p className="text-body max-w-[736px] mx-auto">
          Welcome to my corner of the internet — a space where work meets real talk. Here, 
          I share insights on leadership, employee engagement, productivity, and building 
          workplaces people actually enjoy. You’ll find practical advice, fresh perspectives, 
          and stories that help leaders and teams thrive without burning out.
          </p>
        </div>

        {/* Latest Blogs */}
        <div className="flex flex-col gap-8 py-8">
        <div>
            <div className="flex items-center gap-2 justify-center">
              <div className="w-4 sm:w-6 md:w-8 h-1 bg-brand-primary" />
              <h3 className="uppercase tracking-wide text-center text-h3">
                News & Blogs
              </h3>
            </div>

            <h2 className="text-h2 font-satoshi text-center">
              Most Popular{" "}
              <span className="text-brand-primary">Blog Posts</span>
            </h2>
          </div>

          {latestBlogs.length === 0 ? (
            <p className="text-center text-neutral/70">No posts found.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {latestBlogs.map((blog) => (
                <Link
                  key={blog._id}
                  to={`/blog/${blog.slug?.current || ""}`}
                  className="group bg-surface rounded-[16px] overflow-hidden hover:shadow-lg flex flex-col"
                >
                  {blog.mainImage?.asset?.url && (
                    <img
                      src={blog.mainImage.asset.url}
                      alt={blog.title}
                      loading="lazy"
                      className="h-[306px] w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  <div className="flex flex-col py-6 gap-4 px-4">
                    <h3 className="text-h3 font-filson group-hover:text-primary">
                      {blog.title}
                    </h3>
                    <p className="text-body text-neutral line-clamp-3">{blog.excerpt}</p>
                    <span className="text-xs text-neutral">{formatDate(blog.publishedAt)}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Older Blogs with Pagination */}
        <div className="flex flex-col gap-8 mt-12">
          <h2 className="text-h2 text-center font-satoshi">
            All Blog Post
          </h2>

          {olderBlogs.length === 0 ? (
            <p className="text-center text-neutral/70">No older posts available yet.</p>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {currentBlogs.map((blog) => (
                  <Link
                    key={blog._id}
                    to={`/blog/${blog.slug?.current || ""}`}
                    className="group bg-surface overflow-hidden rounded-[16px] flex flex-col hover:shadow-lg transition-all duration-200"
                  >
                    {blog.mainImage?.asset?.url && (
                      <img
                        src={blog.mainImage.asset.url}
                        alt={blog.title}
                        loading="lazy"
                        className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                    <div className="flex flex-col py-6 px-4 gap-4">
                      <h3 className="text-h4 font-filson">{blog.title}</h3>
                      <span className="text-sm text-neutral">{formatDate(blog.publishedAt)}</span>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination Controls */}
              <div className="flex justify-center gap-4 mt-6 items-center">
                <button
                  onClick={handlePrev}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-surface-muted rounded disabled:opacity-50 hover:bg-surface-dim transition"
                >
                  Previous
                </button>

                <span className="px-2 py-2">
                  Page {currentPage} of {totalPages}
                </span>

                <button
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-surface-muted rounded disabled:opacity-50 hover:bg-surface-dim transition"
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogIntro;
