"use client";
import Image from "next/image";
import styles from "./styles.module.scss";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useLockScroll } from "@/components/modalComponent/hook";
import Modal from "@/components/modalComponent";
import { Test } from "./test";
export const TextAreaWrapper = () => {
  const auth = useSelector((state: any) => state.userSlice.auth);
  const [showModal, setShowModal] = useLockScroll();
  const [text, setText] = useState("");
  return (
    <>
      <Image
        onClick={() => {
          if (auth) {
            setShowModal(true);
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
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Оставьте отзыв..."
        className={styles.textarea}
        name=""
        id=""
      />
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
          }}
        >
          <Test text={text} />
        </Modal>
      )}
    </>
  );
};
