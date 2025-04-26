import styles from "./styles.module.scss";
import { Component } from "./component";
import { data } from "./data";
export const QuestionsPlacement = () => {
  return (
    <div className={styles.container}>
      {data.map((item, index) => {
        return (
          <Component
            key={index}
            question={item.question}
            answer={item.answer}
          />
        );
      })}
    </div>
  );
};
