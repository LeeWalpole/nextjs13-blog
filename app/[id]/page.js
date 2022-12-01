import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getPost(id) {
  try {
    const response = await fetch(`https://dummyjson.com/posts/${id}`);
    return response.json();
  } catch (error) {
    throw new Error(error);
  }
}

async function getUser(id) {
  const response = await fetch(`https://dummyjson.com/users/${id}`);
  return response.json();
}

export default async function Page({ params }) {
  const { id, title, body, tags } = await getPost(params.id);
  const { firstName, lastName, image, university } = await getUser(params.id);

  if (!title) {
    return notFound();
  }
  return (
    <div className={styles.blogContainer}>
      <div className={styles.cardImage}>
        <Image
          src={`https://picsum.photos/id/${id + 53}/1200/500`}
          alt={title}
          className={styles.postImage}
          fill
        />
        <div className={styles.userImage}>
          <Image src={image} alt={firstName} width={128} height={128} />
        </div>
      </div>
      <h3 className={styles.author}>
        {firstName} {lastName}
      </h3>
      <h5 className={styles.university}>{university}</h5>
      <h1 className={styles.title}>{title}</h1>
      <p>{body}</p>
      <div className={styles.tags}>
        {tags.map((tag) => (
          <span key={tag} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
