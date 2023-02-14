import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export const PostIndex = () => {
  const [posts, setPosts] = useState([] as any);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      const data = await res.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <ul>
      {posts.map((post: Post) => (
        <li key={post.id}>
          <Link to={`${post.id}`}>
            {post.id}: {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
