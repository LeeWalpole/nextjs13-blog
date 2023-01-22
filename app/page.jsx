import BlogCard from "../components/BlogCard";
import styles from "./styles.module.css";

async function getPosts() {
  const response = await fetch("https://dummyjson.com/posts?limit=3");
  return response.json();
}


export default async function Home() {
  const { posts } = await getPosts();

  return (
    <div className={styles.blogsContainer}>
      {posts.map((post) => (
        // <BlogCard key={post.id} {...post} />
        <p key={post.id}> {post.title}</p>
      ))}
    </div>
  );
}
