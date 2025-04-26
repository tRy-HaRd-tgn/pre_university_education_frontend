"use client";
import styles from "./styles.module.scss";
import { QuestionsProps as Props } from "@/types/questionsProps";
import { useState } from "react";
import Image from "next/image";
export const Component = ({ question, answer }: Props) => {
  const [state, setState] = useState(false);
  return (
    <div className={styles.container}>
      {!state ? (
        <div className={styles.content}>
          <p className={styles.question}>{question}</p>
          <button onClick={() => setState(!state)} className={styles.btn}>
            <Image
              className={styles.arrow}
              src={"/middleArrow.svg"}
              width={100}
              height={100}
              alt="error"
            />
          </button>
        </div>
      ) : (
        <div className={styles.content}>
          <p className={styles.question}>{answer}</p>
          <button
            style={{ backgroundColor: "#9c8499" }}
            onClick={() => setState(!state)}
            className={styles.btn}
          >
            <Image
              className={styles.arrow}
              src={"/middleArrow.svg"}
              width={100}
              height={100}
              alt="error"
            />
          </button>
        </div>
      )}
    </div>
  );
};
