"use client";
import styles from "./styles.module.scss";
import Modal from "../modalComponent";
import { WannaTeach } from "../wannaTeach";
import { useLockScroll } from "../modalComponent/hook";
import { useSelector } from "react-redux";
import { toast, Toaster } from "sonner";
import { useRouter } from "next/navigation";
export const ClassesPropgram = () => {
  const router = useRouter();
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
      <h2 className={styles.h2}>ЗАНЯТИЯ</h2>
      <div className={styles.bottomWrapper}>
        <h3 className={styles.h3}>
          О ШКОЛЕ ДЕТСКОГО ТВОРЧЕСКОГО РАЗВИТИЯ{" "}
          <span className={styles.h3Span}>РАДУГА</span>
        </h3>
        <div className={styles.list}>
          <li className={styles.li}>
            Занятия в средних группах в коллективе единомышленников
          </li>
          <li className={styles.li}>Уроки по 60 минут каждое воскресенье</li>
          <li className={styles.li}>Отсутствие “культа” оценки</li>
          <li className={styles.li}>
            Изучение предмета “за пределами стандарта”
          </li>
        </div>
        <div className={styles.bottom}>
          <div className={styles.bottomFlex}>
            <p className={styles.elem}>Математика</p>
            <p className={styles.elem}>Физика</p>
            <p className={styles.elem}>Информатика</p>
            <p className={styles.elem}>Русский Язык</p>
            <p className={styles.elem}>Английский Язык</p>
          </div>
          <div className={styles.buttonWrapper}>
            <button
              onClick={() => {
                router.replace(
                  "https://iues.sfedu.ru/raspv/HTML/Raspisan.html"
                );
              }}
              className={styles.button}
            >
              Расписание
            </button>
            <button onClick={checkModal} className={styles.button}>
              Записаться
            </button>
          </div>
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
