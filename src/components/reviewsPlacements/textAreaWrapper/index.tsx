"use client";
import Image from "next/image";
import styles from "./styles.module.scss";
import { toast } from "sonner";
import { useSelector } from "react-redux";
export const TextAreaWrapper = () => {
  const auth = useSelector((state: any) => state.userSlice.auth);
  return (
    <>
      <Image
        onClick={() => {
          if (auth) {
          } else {
            toast("Запись", {
              description: "Для отзыва вам необходимо авторизироваться",
              action: {
                label: "скрыть",
                onClick: () => console.log("Undo"),
              },
            });
          }
        }}
        className={styles.arrow}
        src={"/arrow.svg"}
        width={100}
        height={100}
        alt={"error"}
      />
      <textarea
        placeholder="Оставьте отзыв..."
        className={styles.textarea}
        name=""
        id=""
      />
    </>
  );
};
