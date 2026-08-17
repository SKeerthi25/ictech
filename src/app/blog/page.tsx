import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";

export default function Blog() {
  const posts = [
    {
      title: "The Future of Enterprise ERP Systems in 2027",
      excerpt: "Explore how artificial intelligence and machine learning are revolutionizing traditional Enterprise Resource Planning systems, making them more predictive than reactive.",
      author: "IC TECH Engineering",
      date: "August 12, 2026",
      category: "Business Software",
      readTime: "5 min read",
      imageColor: "bg-blue-900/30",
    },
    {
      title: "Smart Homes: Bridging the Gap Between Convenience and Security",
      excerpt: "As domestic IoT devices proliferate, we discuss the essential security protocols every smart home developer and owner needs to implement.",
      author: "Security Team",
      date: "July 28, 2026",
      category: "Domestic Solutions",
      readTime: "7 min read",
      imageColor: "bg-teal-900/30",
    },
    {
      title: "Why We Choose Next.js for Scalable Web Applications",
      excerpt: "A deep dive into our technical stack decisions. Here is why server-side rendering and the Next.js ecosystem provide the best ROI for our clients.",
      author: "Frontend Team",
      date: "July 15, 2026",
      category: "Web Development",
      readTime: "6 min read",
      imageColor: "bg-indigo-900/30",
    },
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Insights & Engineering Blog</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights from the IC TECH team on software engineering, technology trends, and digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden group hover:border-blue-500/50 transition-all flex flex-col h-full hover:-translate-y-1 hover:shadow-2xl">
              <div className={`h-48 ${post.imageColor} relative overflow-hidden flex items-center justify-center`}>
                 <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-blue-400 font-semibold uppercase tracking-wider mb-4">
                  {post.category}
                </div>
                <h2 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="pt-6 border-t border-slate-800/50 mt-auto">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <User size={14} className="mr-2" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-2" />
                      {post.date}
                    </div>
                  </div>
                  <Link href="#" className="inline-flex items-center mt-6 text-white hover:text-blue-400 transition-colors font-medium">
                    Read Article <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
