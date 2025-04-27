import styles from "./styles.module.scss";
import { Teacher as Props } from "@/types/rewiew";
import Image from "next/image";
export const Teacher = ({ name, description, text }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Image
          className={styles.img}
          src={"/profile.png"}
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
