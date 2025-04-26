// Awesome – let's start! Here's the FINAL full project setup you asked for.
// This is the updated **CreatePost.jsx** with stretch features: pseudo-auth, repost, and flag!

import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate, useParams } from "react-router-dom";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("");
  const [repostId, setRepostId] = useState("");
  const navigate = useNavigate();

  // Create a random user ID once if it doesn't exist
  useEffect(() => {
    if (!localStorage.getItem("user_id")) {
      const randomId = Math.random().toString(36).substring(2, 10);
      localStorage.setItem("user_id", randomId);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("user_id");

    const { error } = await supabase.from("posts").insert([
      {
        title,
        content,
        image_url: imageUrl,
        category,
        repost_id: repostId || null,
        upvotes: 0,
        user_id: userId,
      },
    ]);

    if (error) {
      alert("Error creating post");
      console.error(error);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="create-post-wrapper">
      <form onSubmit={handleSubmit} className="create-post-form">
        <h1>Create a New Post</h1>
        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Post Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL (optional)"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ marginBottom: "1rem" }}
        >
          <option value="">Select Category</option>
          <option value="question">Question</option>
          <option value="tip">Tip</option>
          <option value="opinion">Opinion</option>
        </select>
        <input
          type="text"
          placeholder="Optional: Repost Post ID"
          value={repostId}
          onChange={(e) => setRepostId(e.target.value)}
        />
        <button type="submit" className="submit-btn">Submit Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
