"use client";
import styles from "./styles.module.scss";
import { useState } from "react";
import { useLockScroll } from "@/components/modalComponent/hook";
import Modal from "@/components/modalComponent";
import { WannaTeach } from "@/components/wannaTeach";
export const Block = ({
  duration,
  price,
}: {
  duration: number;
  price: number;
}) => {
  const [showModal, setShowModal] = useLockScroll();
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <p>Срок обучения: {duration} месяцев</p>{" "}
          <p>Стоимость обучения: {price} рублей</p>
        </div>
        <div className={styles.block} onClick={() => setShowModal(true)}>
          Записаться
        </div>
      </div>
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
