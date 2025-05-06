import styles from "./styles.module.scss";
import Image from "next/image";
import { webinarProps as Props } from "../../../types/webinarProps";
export const Webinar = ({ heading, description, time, type }: Props) => {
  var Ttime = time.slice(11, 16);
  return (
    <div className={styles.container}>
      <div className={styles.topWrapper}>
        <div className={styles.Gblock}>
          <Image
            className={styles.gBlockImage}
            src={"/watch.svg"}
            width={100}
            height={100}
            alt="error"
          />
          <p className={styles.time}>{Ttime}</p>
        </div>
        <div className={styles.Gblock}>
          {type === "OPEN" ? "открытый вебинар" : "закрытый вебинар"}
        </div>
      </div>
      <h2 className={styles.heading}>{heading}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
