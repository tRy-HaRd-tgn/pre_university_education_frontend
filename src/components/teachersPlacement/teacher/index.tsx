import styles from "./styles.module.scss";
import { Teacher as Props } from "@/types/teacher";
import Image from "next/image";
export const Teacher = ({
  info,
  subject,
  exam,
  years,
  balls,
  img,
  description,
}: Props) => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.img}
        src={img}
        alt="error"
        width={1500}
        height={1500}
      />
      <p className={styles.info}>{info}</p>
      <div className={styles.containerBottom}>
        <p className={styles.subject}>{subject}</p>
        <p className={styles.exam}>{exam}</p>
      </div>
      <p className={styles.text}>
        <span>Стаж: </span>
        {years}
      </p>
      <p className={styles.text}>
        <span>Сдал ЕГЭ на </span>
        {balls}
      </p>
      <p style={{ marginBottom: "10px" }} className={styles.text}>
        {description}
      </p>
    </div>
  );
};
