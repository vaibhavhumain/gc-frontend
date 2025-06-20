import Head from 'next/head';
import { useEffect, useState } from 'react';
import BlogPost from '../../components/blogs/BlogPost';
import AddBlogForm from '../../components/blogs/AddBlogForm';

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const fetchBlogs = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`);
      const data = await res.json();
      setBlogs(data.reverse());
    } catch (err) {
      console.error('Error fetching blogs:', err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
      <Head>
        <title>Gobind Coach Blog</title>
      </Head>

      <div className="max-w-4xl mx-auto space-y-10">
        {blogs.map((blog, idx) => (
          <BlogPost
            key={idx}
            post={{ postdata: blog, slug: blog._id }}
            postType="default"
          />
        ))}
      </div>

      {/* Floating Add Button */}
      <button
        onClick={() => setShowForm(true)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition z-50"
      >
        ➕ Add Blog
      </button>

      {/* Modal for Add Blog */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-xl relative animate-fadeIn">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-xl"
            >
              ✖
            </button>
            <AddBlogForm refreshBlogs={fetchBlogs} />
          </div>
        </div>
      )}
    </div>
  );
}
