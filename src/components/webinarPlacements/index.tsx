import styles from "./styles.module.scss";
import Image from "next/image";

export const WebinarPlacements = () => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.leftSide}
        src={"/chair.png"}
        width={1500}
        height={1500}
        alt={"error"}
        priority
      />
      <div className={styles.rightSide}>
        <div className={styles.webinarsScroller}></div>
      </div>
    </div>
  );
};
