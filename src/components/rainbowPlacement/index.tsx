"use client";
import styles from "./styles.module.scss";
import Image from "next/image";
import { RainbowProps } from "@/types/rainbowPropos";
import { useLockScroll } from "../modalComponent/hook";
import { WannaTeach } from "../wannaTeach";
import Modal from "../modalComponent";

export const RainbowPlacement = ({ img }: RainbowProps) => {
  const [showModal, setShowModal] = useLockScroll();
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
      <button onClick={() => setShowModal(true)} className={styles.button}>
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
