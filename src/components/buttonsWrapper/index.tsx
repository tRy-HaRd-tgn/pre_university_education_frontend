"use client";
import styles from "./styles.module.scss";
import { urls } from "./data";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
export const ButtonsWrapper = () => {
  const router = useRouter();
  return (
    <>
      {urls.map((item, index) => (
        <div key={index} className={styles.buttonWrapper}>
          <Button
            onClick={() => {
              router.replace(item.url);
            }}
            key={index}
            className={styles.button}
          >
            {item.text}
          </Button>
        </div>
      ))}
    </>
  );
};
