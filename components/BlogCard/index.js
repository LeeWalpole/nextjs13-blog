import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";

function BlogCard({ title, body, id, tags, reactions, firstName, lastName }) {
  return (
    <Link href={`/${id}`} >
      <div className={styles.cardImage}>
        <Image
          src={`https://picsum.photos/id/${id + 53}/300/300`}
          alt="Blog Card Image"
          fill
        />
        {reactions > 0 ? (
          <div className={styles.reaction}>
            <span>👍 {reactions}</span>
          </div>
        ) : null}
      </div>
      <div className={styles.cardBody}>
        <h3>{title}</h3>
        <p>{body}</p>
        <div className={styles.details}>
          <div className={styles.tags}>
            {tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
          <div className={styles.author}>
            <span>
              {firstName} {lastName}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
