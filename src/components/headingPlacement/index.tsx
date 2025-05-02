"use client";
import styles from "./styles.module.scss";
import Image from "next/image";
import { useLockScroll } from "../modalComponent/hook";
import Modal from "../modalComponent";
import { WannaTeach } from "../wannaTeach";
import { useSelector } from "react-redux";
import { toast } from "sonner";
export const HeadingPlacemnent = () => {
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
        src={"/преподы.png"}
        width={1900}
        height={1900}
        alt="error"
      />
      <div className={styles.rightSide}>
        <h2 className={styles.heading}>
          С нами Ваше профессиональное мастерство достигнет новых высот!
        </h2>
        <p className={styles.text}>
          Наш центр занимается повышением квалификации и переподготовкой
          специалистов.
        </p>
        <button onClick={checkModal} className={styles.button}>
          записаться{" "}
          <Image
            className={styles.buttonImg}
            src={"/btn.svg"}
            alt="error"
            width={40}
            height={25}
          />
        </button>
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
