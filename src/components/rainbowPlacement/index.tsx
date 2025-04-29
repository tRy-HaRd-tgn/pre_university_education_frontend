import styles from "./styles.module.scss";
import Image from "next/image";
import { RainbowProps } from "@/types/rainbowPropos";
export const RainbowPlacement = ({ img }: RainbowProps) => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.img}
        src={img}
        alt="error"
        width={1200}
        height={800}
      />
      <div className={styles.green} />
      <Image
        src={"/green.png"}
        alt="error"
        width={1800}
        height={1800}
        className={styles.blue}
      />
      <button className={styles.button}>Хочу заниматься</button>
      <p className={styles.text}>ОТКРОЙ МИР ЗНАНИЙ </p>
    </div>
  );
};
