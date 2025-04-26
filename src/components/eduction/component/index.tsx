import styles from "./styles.module.scss";
import { EducationProps as Props } from "@/types/educationProps";

export const Component = ({ name, heading, date, document }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}></div>
      <div className={styles.rightSide}>
        <div className={styles.middle}>
          <p className={styles.name}>{name}</p>
          <h1 className={styles.heading}>{heading}</h1>
          <p className={styles.date}>
            <span className={styles.dateSpan}>Срок Обучения: </span>
            {date}
          </p>
          <p className={styles.document}>
            <span className={styles.documentSpan}>Документ: </span>
            {document}
          </p>
        </div>
        <button className={styles.button}>Подробнее</button>
      </div>
    </div>
  );
};
