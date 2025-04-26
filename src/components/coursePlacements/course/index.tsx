"use client";
import Image from "next/image";
import styles from "./styles.module.scss";
import { CourseProps as Props } from "../../../types/courseProps";
import { useRouter } from "next/navigation";

export const Course = ({ name, description, img, size, color, url }: Props) => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.replace(`/${url}`);
      }}
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
      />
    </div>
  );
};
