"use client";
import React from "react";
import styles from "./styles.module.css";

export default function Error() {
  return (
    <div className={styles.notFound}>
      <h1 className={styles.oops}>OOPS!</h1>
      <h3>Something went wrong.</h3>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}
