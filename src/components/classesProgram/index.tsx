import styles from "./styles.module.scss";
export const ClassesPropgram = () => {
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
          <button className={styles.button}>Записаться</button>
        </div>
      </div>
    </div>
  );
};
