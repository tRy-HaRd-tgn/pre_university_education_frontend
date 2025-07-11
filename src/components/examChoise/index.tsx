"use client";
import styles from "./styles.module.scss";
import { data } from "./data";
import { useState } from "react";
import { useLockScroll } from "../modalComponent/hook";
import Modal from "../modalComponent";
import { WannaTeach } from "../wannaTeach";
import { useSelector } from "react-redux";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
export const ExamChoise = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useLockScroll();
  const [state, setState]: [boolean, any] = useState(false);
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
      <div className={styles.heading}>
        <h3
          className={styles.oge}
          style={
            state
              ? {
                  background: "#ffffff",
                  border: "8px solid #35c29a",
                  color: "#35c29a",
                }
              : {}
          }
          onClick={() => setState(false)}
        >
          ОГЭ
        </h3>
        <h3
          style={state ? { backgroundColor: "#c23e7e", color: "white" } : {}}
          onClick={() => setState(true)}
          className={styles.ege}
        >
          ЕГЭ
        </h3>
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottomContent}>
          <h3 className={styles.h3}>
            О КУРСЕ ПОДГОТОВКИ К{" "}
            <span
              style={state ? { backgroundColor: "#c23e7e" } : {}}
              className={styles.egeSpan}
            >
              {!state ? "ОГЭ" : "ЕГЭ"}
            </span>
          </h3>
          <div className={styles.middle}>
            <li className={styles.liContent}>
              Небольшие группы до 10 человек для эффективности занятий
            </li>
            <li className={styles.liContent}>
              Занятия 1-2 раза в неделю на территории университета
            </li>
            <li className={styles.liContent}>
              Подготовка с высококвалифицированными преподавателями ВУЗа
            </li>
            <li className={styles.liContent}>
              Повышение осведомленности о процессе экзамена и проведение
              пробников
            </li>
          </div>
          <div className={styles.bottom}>
            <div className={styles.bottomLeft}>
              {data.map((value, index) => {
                return (
                  <div
                    style={state ? { backgroundColor: "#c23e7e" } : {}}
                    className={styles.itemG}
                    key={index}
                  >
                    <p className={styles.p}>{value.name}</p>
                  </div>
                );
              })}
            </div>
            <div className={styles.bottomRight}>
              <button
                style={state ? { backgroundColor: "#c23e7e" } : {}}
                className={styles.greenB}
                onClick={() => {
                  router.replace(
                    "https://iues.sfedu.ru/raspv/HTML/Raspisan.html"
                  );
                }}
              >
                РАСПИСАНИЕ
              </button>
              <button
                style={state ? { backgroundColor: "#c23e7e" } : {}}
                className={styles.greenB}
                onClick={checkModal}
              >
                ЗАПИСАТЬСЯ
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
    </div>
  );
};
