// types
import type { NextPage } from "next";

//images
import Bottle from "../public/Bottle.jpeg";

// next
import Image from "next/image";

// components
import NextHead from "../components/NextHead";

// styles
import styles from "../styles/index.module.css";

const Home: NextPage = () => {
  return (
    <>
      <NextHead />
      <div className={styles.container}>
        <div className={styles.photoFrame}>
          <Image src={Bottle} alt="" height={78} width={78} />
        </div>
        <div className={styles.profileText}>
          <h1 className={styles.fullName}>Yan Hauw</h1>
          <p className={styles.description}>Junior CS major at UCLA</p>
        </div>
      </div>
    </>
  );
};

export default Home;
