import React from "react";

//images
import Bottle from "../../public/Bottle.jpeg";

// next
import Image from "next/image";

// styles
import styles from "./index.module.css";

const ProfileSection = () => {
  return (
    <div id="profilesection" className={styles.container}>
      <div className={styles.profileBox}>
        <div className={styles.photoFrame}>
          <Image src={Bottle} alt="" height={78} width={78} />
        </div>

        <div className={styles.profileText}>
          <h1 className={styles.fullName}>Yan Hauw</h1>

          <p className={styles.description}>Junior CS major at UCLA</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
