"use client";
import styles from "./styles.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { data } from "./data";
import Modal from "../modalComponent";
import { useLockScroll } from "../modalComponent/hook";
import { LogRegForm } from "../logRegForm";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import AuthService from "@/service/authService";
import { UseSelector } from "react-redux";
type Props = {
  flag: boolean;
};
const logoStyle = {};

export const Header = ({ flag }: Props) => {
  const router = useRouter();
  const pathName = usePathname();
  const [showModal, setShowModal] = useLockScroll();
  const auth = useSelector((state: any) => state.userSlice.auth);
  const name = useSelector((state: any) => state.userSlice.name);
  const surname = useSelector((state: any) => state.userSlice.surname);
  return (
    <header className={flag ? styles.header : styles.headerB}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Image
            src={flag ? "/logo.webp" : "/logoB.webp"}
            width={100}
            height={92}
            priority={true}
            style={logoStyle}
            alt="error"
          />
          <p className={styles.logoDescription}>
            <span>Центр</span>
            <span>Дополнительного</span>
            <span>Образования</span>
          </p>
        </div>
        <div className={styles.menu}>
          <div className={styles.menuContent}>
            <p
              onClick={() => {
                router.replace("/");
              }}
              className={!flag ? styles.menuContentP : styles.menuContentPB}
            >
              Главная
            </p>
            {pathName === "/coursePage" ||
            pathName === "/rainbow" ||
            pathName === "/profile" ||
            pathName === "/themes" ||
            pathName === "/exam" ||
            pathName === "/defense" ||
            pathName === "/position" ? (
              <></>
            ) : (
              <p
                onClick={() => {
                  router.replace("#course");
                }}
                className={!flag ? styles.menuContentP : styles.menuContentPB}
              >
                Курсы
              </p>
            )}
            {pathName === "/" ||
            pathName === "/coursePage" ||
            pathName === "/profile" ||
            pathName === "/themes" ||
            pathName === "/defense" ||
            pathName === "/position" ? (
              <></>
            ) : (
              <p
                onClick={() => {
                  router.replace("#teachers");
                }}
                className={!flag ? styles.menuContentP : styles.menuContentPB}
              >
                Преподаватели
              </p>
            )}

            {pathName === "/coursePage" ||
            pathName === "/profile" ||
            pathName === "/themes" ||
            pathName === "/defense" ||
            pathName === "/position" ? (
              <></>
            ) : (
              <p
                onClick={() => {
                  router.replace("#reviews");
                }}
                className={!flag ? styles.menuContentP : styles.menuContentPB}
              >
                Отзывы
              </p>
            )}
            <p
              onClick={() => {
                router.replace("#contacts");
              }}
              className={!flag ? styles.menuContentP : styles.menuContentPB}
            >
              Контакты
            </p>
            <p
              onClick={() => {
                window.open(data.url, "_blank", "noopener,noreferrer");
              }}
              className={!flag ? styles.menuContentP : styles.menuContentPB}
            >
              Расписание
            </p>
          </div>
          {!auth ? (
            <button
              onClick={() => setShowModal(true)}
              className={!flag ? styles.buttonB : styles.button}
            >
              Войти
            </button>
          ) : (
            <div className={styles.profileWrapper}>
              <div className={styles.leftSide}>
                <p className={flag ? styles.p : styles.pB}>{name}</p>
                <p className={flag ? styles.p : styles.pB}>{surname}</p>
              </div>
              <Button
                className={flag ? styles.profileButton : styles.profileButtonB}
                onClick={() => {
                  router.replace("/profile");
                }}
              >
                Профиль
              </Button>
              <Button
                className={flag ? styles.profileButton : styles.profileButtonB}
                onClick={async () => {
                  await AuthService.logout();
                  window.location.reload();
                }}
              >
                Выйти
              </Button>
            </div>
          )}
        </div>
        {showModal && (
          <Modal
            onClose={() => {
              setShowModal(false);
            }}
          >
            <LogRegForm />
          </Modal>
        )}
      </div>
    </header>
  );
};
