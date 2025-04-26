import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../supabaseClient";

function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [repost, setRepost] = useState(null); // ✅ new for reposts
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  const [editMode, setEditMode] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");
  const [editImage, setEditImage] = useState("");
  const [editCategory, setEditCategory] = useState("");
  const [saveMessage, setSaveMessage] = useState("");

  useEffect(() => {
    fetchPost();
    fetchComments();
  }, [id]);

  const fetchPost = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error fetching post:", error);
    } else {
      setPost(data);
      setEditTitle(data.title);
      setEditContent(data.content);
      setEditImage(data.image_url);
      setEditCategory(data.category || "");

      // If this is a repost, fetch the original
      if (data.repost_of) {
        const { data: repostData, error: repostError } = await supabase
          .from("posts")
          .select("*")
          .eq("id", data.repost_of)
          .single();
        if (!repostError) {
          setRepost(repostData);
        }
      } else {
        setRepost(null);
      }
    }
    setLoading(false);
  };

  const fetchComments = async () => {
    const { data, error } = await supabase
      .from("comments")
      .select("*")
      .eq("post_id", id)
      .order("created_at", { ascending: true });

    if (error) {
      console.error("Error fetching comments:", error);
    } else {
      setComments(data);
    }
  };

  const handleUpvote = async () => {
    if (!post) return;
    const { error } = await supabase
      .from("posts")
      .update({ upvotes: post.upvotes + 1 })
      .eq("id", id);
    if (!error) fetchPost();
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from("comments").insert([
      { post_id: id, content: comment },
    ]);
    if (!error) {
      setComment("");
      fetchComments();
    }
  };

  const handleSaveEdit = async () => {
    if (editImage.trim().startsWith("data:image")) {
      setSaveMessage("❌ Base64 images not supported. Use a valid URL.");
      setTimeout(() => setSaveMessage(""), 4000);
      return;
    }

    const { error } = await supabase
      .from("posts")
      .update({
        title: editTitle,
        content: editContent,
        image_url: editImage,
        category: editCategory,
      })
      .eq("id", id);

    if (!error) {
      setEditMode(false);
      fetchPost();
      setSaveMessage("✅ Changes saved!");
      setTimeout(() => setSaveMessage(""), 3000);
    } else {
      console.error("Error saving post:", error.message);
      setSaveMessage("❌ Error saving changes.");
      setTimeout(() => setSaveMessage(""), 4000);
    }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this post?");
    if (!confirmDelete) return;
    const { error } = await supabase.from("posts").delete().eq("id", id);
    if (!error) window.location.href = "/";
  };

  if (loading) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <div className="spinner"></div>
        <p>Loading post...</p>
      </div>
    );
  }

  if (!post) return <p>Post not found.</p>;

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      {editMode ? (
        <div>
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            placeholder="Title"
            style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
          />
          <textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            placeholder="Content"
            rows={4}
            style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
          />
          <input
            type="text"
            value={editImage}
            onChange={(e) => setEditImage(e.target.value)}
            placeholder="Image URL"
            style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
          />
          <select
            value={editCategory}
            onChange={(e) => setEditCategory(e.target.value)}
            style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
          >
            <option value="">Select Category</option>
            <option value="question">Question</option>
            <option value="tip">Tip</option>
            <option value="opinion">Opinion</option>
          </select>

          <button
            onClick={handleSaveEdit}
            style={{
              padding: "0.6rem 1.2rem",
              backgroundColor: "#14b8a6",
              color: "white",
              border: "none",
              borderRadius: "6px",
              fontWeight: "bold",
              cursor: "pointer",
              marginBottom: "1rem"
            }}
          >
            💾 Save Changes
          </button>

          {saveMessage && (
            <p style={{ color: saveMessage.includes("✅") ? "green" : "red", fontWeight: "bold" }}>
              {saveMessage}
            </p>
          )}
        </div>
      ) : (
        <>
          <h1>{post.title}</h1>
          <p><strong>Category:</strong> {post.category || "Uncategorized"}</p>
          <p><strong>Posted by:</strong> {post.user_id || "Anonymous"}</p>

          {repost && (
            <div style={{ marginTop: "1rem", marginBottom: "1rem", padding: "1rem", backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
              <p>🔁 Reposted from <Link to={`/post/${repost.id}`} style={{ color: "#3b82f6" }}>Post ID {repost.id}</Link></p>
              <p><strong>{repost.title}</strong></p>
            </div>
          )}

          <p>{post.content}</p>

          {post.image_url ? (
            <img
              src={post.image_url}
              alt="Post visual"
              style={{
                maxWidth: "100%",
                marginTop: "1rem",
                borderRadius: "8px",
                objectFit: "contain",
              }}
              onError={(e) => (e.target.style.display = "none")}
            />
          ) : (
            <p><i>No image provided.</i></p>
          )}
        </>
      )}

      <p style={{ marginTop: "1rem" }}>Upvotes: {post.upvotes}</p>

      <button
        onClick={handleUpvote}
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          cursor: "pointer",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        🔼 Upvote
      </button>

      <p style={{ marginTop: "1rem" }}>
        Posted: {new Date(post.created_at).toLocaleString()}
      </p>

      <div style={{ marginTop: "1rem" }}>
        <button onClick={() => setEditMode(!editMode)} style={{ marginRight: "1rem" }}>
          ✏️ {editMode ? "Cancel Edit" : "Edit Post"}
        </button>
        <button
          onClick={handleDelete}
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "0.5rem",
            border: "none",
            borderRadius: "5px",
          }}
        >
          🗑️ Delete Post
        </button>
      </div>

      <hr style={{ margin: "2rem 0" }} />
      <h2>Comments</h2>

      <form onSubmit={handleCommentSubmit} style={{ marginBottom: "1rem" }}>
        <textarea
          placeholder="Write a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={3}
          style={{ width: "100%", padding: "0.5rem" }}
        />
        <button type="submit" style={{ marginTop: "0.5rem" }}>
          Post Comment
        </button>
      </form>

      {comments.map((c) => (
        <div
          key={c.id}
          style={{ borderBottom: "1px solid #ddd", padding: "0.5rem 0" }}
        >
          <p>{c.content}</p>
          <small>{new Date(c.created_at).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
}

export default PostPage;
