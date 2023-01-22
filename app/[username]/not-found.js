import React from "react";
import styles from "./styles.module.css";

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <h1 className={styles.oops}>OOPS!</h1>
      <h3>Looks like you got lost in space.</h3>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}
