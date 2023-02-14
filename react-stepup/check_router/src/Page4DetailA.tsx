import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const Page4DetailA = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({} as any);
  
  useEffect(() => {
    const fetchPost = async() => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      const data = await res.json()
      setPost(data)
    }
    fetchPost()
  }, [postId]);

  return (
    <>
      <h2>取得したパラメータ:{postId}</h2>
      <ul>
        <li>ID: {post.id}</li>
        <li>タイトル: {post.title}</li>
        <li>内容: {post.body}</li>
      </ul>
    </>
  );
};
