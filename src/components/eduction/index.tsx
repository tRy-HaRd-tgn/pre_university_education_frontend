import styles from "./styles.module.scss";
import { data } from "./data";
import { Component } from "./component";
export const Education = () => {
  return (
    <div className={styles.container}>
      {data.map((item, index) => {
        return (
          <Component
            key={index}
            name={item.name}
            heading={item.heading}
            date={item.date}
            document={item.document}
          />
        );
      })}
    </div>
  );
};
