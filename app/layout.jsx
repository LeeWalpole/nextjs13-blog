import styles from "./styles.module.css";
import "../styles/global.css";
import { Inter } from "@next/font/google";

import Header from "../components/Header";
import Footer from "../components/Footer";

const interFont = Inter();

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={interFont.className}>
      <body className={styles.container}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
