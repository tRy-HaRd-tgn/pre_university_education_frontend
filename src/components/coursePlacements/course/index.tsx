import Image from "next/image";
import styles from "./styles.module.scss";
type Props = {
  name: string;
  description: string;
  img: string;
  size: string;
  color: string;
};

export const Course = ({ name, description, img, size, color }: Props) => {
  return (
    <div
      className={styles.container}
      style={
        size === "short"
          ? { width: "48%", backgroundColor: color }
          : { width: "100%", backgroundColor: color }
      }
    >
      <div className={styles.left}>
        <p className={styles.top}>{name}</p>
        <p className={styles.bottom}>{description}</p>
      </div>
      <Image
        width={2700}
        height={2700}
        className={styles.right}
        src={img}
        alt="error"
      ></Image>
    </div>
  );
};
