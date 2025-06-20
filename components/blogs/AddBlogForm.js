import { useState } from 'react';

const AddBlogForm = ({ refreshBlogs }) => {
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    author: '',
    date: '',
  });
  const [thumbnail, setThumbnail] = useState(null);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleFileChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setThumbnail(reader.result); // this sets base64 string
    };
    reader.readAsDataURL(file);
  }
};

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!thumbnail || typeof thumbnail !== 'string' || !thumbnail.startsWith('data:image')) {
    setMessage("❌ Invalid image selected");
    return;
  }

  const blogData = {
    ...formData,
    imageBase64: thumbnail,
  };

  console.log("📤 Sending blog data to:", `${process.env.NEXT_PUBLIC_API_URL}/api/blogs`);
  console.log("📝 Blog payload:", {
    ...formData,
    imageBase64: thumbnail?.substring(0, 50) + '...',
  });

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(blogData),
  });

  const result = await res.json();
  if (res.ok) {
    setMessage("✅ Blog uploaded");
    refreshBlogs();
  } else {
    setMessage("❌ Upload failed");
    console.error("❌ Failed", result);
  }
};



  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        name="excerpt"
        placeholder="Excerpt"
        value={formData.excerpt}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        name="author"
        placeholder="Author"
        value={formData.author}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        name="date"
        type="date"
        value={formData.date}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="w-full p-2 border rounded"
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Blog
      </button>

      {message && <p className="text-green-600 mt-2">{message}</p>}
    </form>
  );
};

export default AddBlogForm;
