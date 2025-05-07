import styles from "./styles.module.scss";
import { rewiew as Props } from "@/types/rewiew";
import Image from "next/image";
export const Teacher = ({ name, description, text, img, course }: Props) => {
  console.log(img);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Image
          className={styles.img}
          src={img}
          width={100}
          height={100}
          alt="error"
        />
        <div>
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};
