"use client";
import { data } from "./data";
import styles from "./styles.module.scss";
import { Course } from "./course";
export const CoursePlacement = () => {
  return (
    <div className={styles.flex}>
      <div className={styles.coursePlace}>
        {data?.map((item, index) => {
          return (
            <Course
              url={item.url}
              color={item.color}
              key={index}
              name={item.name}
              description={item.description}
              img={item.img}
              size={item.size}
            />
          );
        })}
      </div>
    </div>
  );
};
