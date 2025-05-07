"use client";
import styles from "./styles.module.scss";
import { EducationProps as Props } from "@/types/educationProps";
import { useRouter } from "next/navigation";

export const Component = ({ name, heading, date, document, id }: Props) => {
  const router = useRouter();
  console.log(date);
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}></div>
      <div className={styles.rightSide}>
        <div className={styles.middle}>
          <p className={styles.name}>{name}</p>
          <h1 className={styles.heading}>{heading}</h1>
          <p className={styles.date}>
            <span className={styles.dateSpan}>Срок Обучения: </span>
            {date?.map((item, index) => {
              return (
                <span key={index} style={{ display: "inline-block" }}>
                  <span className={styles.dateSpan} key={index}>
                    {item}
                  </span>
                  {index === date.length - 1 ? "" : ` -`}
                  &nbsp;
                </span>
              );
            })}
            месяцев
          </p>
          <p className={styles.document}>
            <span className={styles.documentSpan}>Документ: </span>
            {document}
          </p>
        </div>
        <button
          onClick={() => {
            router.push(`/educationPage/${id}`);
          }}
          className={styles.button}
        >
          Подробнее
        </button>
      </div>
    </div>
  );
};
