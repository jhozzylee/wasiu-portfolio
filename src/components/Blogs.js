import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Back to React Router
import { client } from "../lib/sanity";
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";

const BlogIntro = () => {
  const [latestBlogs, setLatestBlogs] = useState([]);
  const [olderBlogs, setOlderBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(6);

  useEffect(() => {
    let mounted = true;
    const fetchBlogs = async () => {
      try {
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
        setCurrentPage(1);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
    return () => { mounted = false; };
  }, []);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = olderBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.max(1, Math.ceil(olderBlogs.length / blogsPerPage));

  const handleNext = () => currentPage < totalPages && setCurrentPage((p) => p + 1);
  const handlePrev = () => currentPage > 1 && setCurrentPage((p) => p - 1);

  const formatDate = (d) => 
    d ? new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "";

  return (
    <section className="bg-background text-neutral-default py-24 sm:py-32">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-24">
          <div className="inline-block px-3 py-1 rounded-full border border-surface-dim bg-surface/50 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-primary">
            Insights & Perspectives
          </div>
          <h1 className="text-h2 sm:text-h1 font-satoshi font-bold">
            The <span className="text-brand-primary">Blog</span>
          </h1>
          <p className="text-body text-neutral-default/60 leading-relaxed">
            Welcome to my corner of the internet — a space where work meets real talk. 
          </p>
        </div>

        {/* Featured Section */}
        <div className="space-y-12 pb-24 border-b border-surface-dim">
          {latestBlogs.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {latestBlogs.map((blog) => (
                <Link
                  key={blog._id}
                  to={`/blog/${blog.slug?.current || ""}`}
                  className="group flex flex-col space-y-6"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] border border-surface-dim bg-surface-muted">
                    {blog.mainImage?.asset?.url && (
                      <img
                        src={blog.mainImage.asset.url}
                        alt={blog.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                      />
                    )}
                  </div>
                  <div className="space-y-3 px-2">
                    <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-neutral-default/40">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(blog.publishedAt)}
                    </div>
                    <h3 className="text-h3 font-satoshi font-bold group-hover:text-brand-primary transition-colors leading-tight">
                      {blog.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Archive / Older Blogs */}
        <div className="pt-24 space-y-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentBlogs.map((blog) => (
              <Link
                key={blog._id}
                to={`/blog/${blog.slug?.current || ""}`}
                className="group flex flex-col space-y-4 p-4 rounded-[24px] border border-transparent hover:border-surface-dim hover:bg-surface/30 transition-all"
              >
                <div className="relative aspect-video overflow-hidden rounded-[16px] border border-surface-dim bg-surface-muted">
                  {blog.mainImage?.asset?.url && (
                    <img
                      src={blog.mainImage.asset.url}
                      alt={blog.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  )}
                </div>
                <h3 className="text-lg font-satoshi font-bold leading-snug group-hover:text-brand-primary transition-colors">
                  {blog.title}
                </h3>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-4 pt-12">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="p-3 rounded-full border border-surface-dim text-neutral-default disabled:opacity-20 hover:bg-brand-primary hover:text-background transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <span className="text-sm font-generalsans">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="p-3 rounded-full border border-surface-dim text-neutral-default disabled:opacity-20 hover:bg-brand-primary hover:text-background transition-all"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogIntro;