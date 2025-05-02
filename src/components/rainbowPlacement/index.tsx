"use client";
import styles from "./styles.module.scss";
import Image from "next/image";
import { RainbowProps } from "@/types/rainbowPropos";
import { useLockScroll } from "../modalComponent/hook";
import { WannaTeach } from "../wannaTeach";
import Modal from "../modalComponent";
import { useSelector } from "react-redux";

import { toast } from "sonner";

export const RainbowPlacement = ({ img }: RainbowProps) => {
  const [showModal, setShowModal] = useLockScroll();
  const auth = useSelector((state: any) => state.userSlice.auth);
  const checkModal = () => {
    if (auth) {
      setShowModal(true);
    } else {
      toast("Запись", {
        description: "Для записи вам необходимо авторизироваться",
        action: {
          label: "скрыть",
          onClick: () => console.log("Undo"),
        },
      });
    }
  };
  return (
    <div className={styles.container}>
      <Image
        className={styles.img}
        src={img}
        alt="error"
        width={1200}
        height={800}
      />
      <div className={styles.green} />
      <Image
        src={"/green.png"}
        alt="error"
        width={1800}
        height={1800}
        className={styles.blue}
      />
      <button onClick={checkModal} className={styles.button}>
        Хочу заниматься
      </button>
      <p className={styles.text}>ОТКРОЙ МИР ЗНАНИЙ </p>
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
          }}
        >
          <WannaTeach />
        </Modal>
      )}
    </div>
  );
};
