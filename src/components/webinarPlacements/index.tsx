import styles from "./styles.module.scss";
import Image from "next/image";
import { data } from "./data";
import { Webinar } from "./webinar";

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
        <div className={styles.webinarsScroller}>
          {data?.map((item, index) => {
            return (
              <Webinar
                key={index}
                heading={item.heading}
                description={item.description}
                time={item.time}
                type={item.type}
              ></Webinar>
            );
          })}
        </div>
      </div>
    </div>
  );
};
