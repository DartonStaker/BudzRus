import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Blog() {
  const blogPosts = [
    { id: 1, title: "The Ultimate Guide to Cannabis Edibles", date: "Jan 15, 2025", excerpt: "Learn everything you need to know about cannabis edibles..." },
    { id: 2, title: "Understanding Different Cannabis Strains", date: "Jan 10, 2025", excerpt: "Explore the world of cannabis strains and their effects..." },
    { id: 3, title: "420 Culture: A Celebration of Cannabis", date: "Jan 5, 2025", excerpt: "Discover the history and culture behind 420..." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-12 text-center">Stoners Blog</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gray-200 h-48"></div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h2 className="text-xl font-bold mb-3">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link href={`/stoners-blog/${post.id}`} className="text-budz-green font-semibold hover:text-budz-orange transition">
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

