import BlogCard from "../components/BlogCard";
import styles from "./styles.module.css";

async function getPosts() {
  const response = await fetch("https://dummyjson.com/posts?limit=10");
  return response.json();
}

async function getUsers() {
  const response = await fetch("https://dummyjson.com/users?limit=10");
  return response.json();
}

export default async function Home() {
  const { posts } = await getPosts();
  const { users } = await getUsers();

  const zipped = posts.map((post, index) => {
    return { ...post, ...users[index] };
  });

  return (
    <div className={styles.blogsContainer}>
      {zipped.map((post) => (
        <BlogCard key={post.id} {...post} />
      ))}
    </div>
  );
}
