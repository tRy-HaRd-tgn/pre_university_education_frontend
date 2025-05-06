import styles from "./styles.module.scss";
import Image from "next/image";
import WebinarService from "@/service/webinarService";
import { Webinar } from "./webinar";

export const WebinarPlacements = async () => {
  const response = await WebinarService.getWebinars();
  const data = response.data;
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
          {data?.map((item: any, index: any) => {
            return (
              <Webinar
                key={index}
                heading={item.title}
                description={item.description}
                time={item.date}
                type={item.status}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
