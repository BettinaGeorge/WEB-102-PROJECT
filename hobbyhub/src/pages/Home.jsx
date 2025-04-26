import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { Link } from "react-router-dom";
import "../styles/App.css";

function Home() {
  const [posts, setPosts] = useState([]);
  const [sort, setSort] = useState("newest");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchPosts();
  }, [sort]);

  const fetchPosts = async () => {
    let query = supabase.from("posts").select("*");

    if (sort === "newest") {
      query = query.order("created_at", { ascending: false });
    } else if (sort === "popular") {
      query = query.order("upvotes", { ascending: false });
    }

    const { data, error } = await query;

    if (error) {
      console.error("Error fetching posts:", error);
    } else {
      setPosts(data);
    }
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="navbar">
        <h1 className="logo">HobbyHub</h1>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/create" className="nav-link">Create New Post</Link>
        </div>
      </div>

      <div className="container">
        <div className="sort-buttons">
          <button onClick={() => setSort("newest")}>Newest</button>
          <button onClick={() => setSort("popular")}>Most Popular</button>
        </div>

        {filteredPosts.length === 0 ? (
          <p>No posts yet!</p>
        ) : (
          filteredPosts.map((post) => (
            <div className="post-card" key={post.id}>
              <p style={{ fontSize: "0.8rem", color: "#555" }}>
                Posted {timeAgo(post.created_at)} by {post.user_id || "Anonymous"}
              </p>

              {post.repost_of && (
                <p style={{ fontSize: "0.8rem", color: "#888", marginBottom: "0.5rem" }}>
                  🔁 Reposted from Post ID {post.repost_of}
                </p>
              )}

              <Link to={`/post/${post.id}`} className="post-title">
                {post.title}
              </Link>

              {post.category && (
                <p style={{ fontSize: "0.9rem", color: "#555", marginTop: "0.3rem" }}>
                  Category: {post.category}
                </p>
              )}

              <p style={{ marginTop: "0.5rem" }}>{post.upvotes} upvotes</p>
            </div>
          ))
        )}
      </div>
    </>
  );
}

// Utility function
function timeAgo(date) {
  const now = new Date();
  const postDate = new Date(date);
  const diff = Math.floor((now - postDate) / 1000);

  if (diff < 60) return `${diff} seconds ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
  if (diff < 604800) return `${Math.floor(diff / 86400)} days ago`;
  return postDate.toLocaleDateString();
}

export default Home;
