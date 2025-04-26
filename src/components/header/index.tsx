"use client";
import styles from "./styles.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import path from "path";
type Props = {
  flag: boolean;
};
const logoStyle = {};

export const Header = ({ flag }: Props) => {
  const router = useRouter();
  const pathName = usePathname();
  console.log(pathName);
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
            {pathName === "/coursePage" ? (
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
            {pathName === "/" || pathName === "/coursePage" ? (
              <></>
            ) : (
              <p className={!flag ? styles.menuContentP : styles.menuContentPB}>
                Преподаватели
              </p>
            )}

            {pathName === "/coursePage" ? (
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
          </div>
          {flag ? <button className={styles.button}>Войти</button> : <></>}
        </div>
      </div>
    </header>
  );
};
