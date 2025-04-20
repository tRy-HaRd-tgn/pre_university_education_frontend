import styles from "./styles.module.scss";
import Image from "next/image";
type Props = {
  flag: boolean;
};
const logoStyle = {};

export const Header = ({ flag }: Props) => {
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
            <p className={styles.menudContentP}>Курсы</p>
            <p className={styles.menudContentP}>Преподаватели</p>
            <p className={styles.menudContentP}>Отзывы</p>
            <p className={styles.menudContentP}>Контакты</p>
          </div>
          {flag ? <></> : <></>}
          {/* заготовка на будущее */}
        </div>
      </div>
    </header>
  );
};
