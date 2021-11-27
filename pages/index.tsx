// types
import type { NextPage } from "next";

// components
import NextHead from "../components/NextHead";

// styles
import styles from "../styles/index.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <NextHead />
    </div>
  );
};

export default Home;
