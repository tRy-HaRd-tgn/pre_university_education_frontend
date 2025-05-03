import styles from "./styles.module.scss";
import { Fblock, Sblock } from "./data";
export const ThemesWrapper = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.heading}>Темы аттестационных работ</h3>
        <div className={styles.line}></div>
      </div>
      <div className={styles.block}>
        <h3 className={styles.h3}>
          Уважаемые слушатели! <span></span>
        </h3>
        <p className={styles.p}>
          Для допуска к итоговой аттестации, а также для подготовки приказа
          ЮФУ«Об утверждении тем, научных руководителей аттестационных работ и
          допуске к итоговой аттестации слушателей ЦДО» вам необходимо за 3
          месяца до итоговой аттестации заполнить в учебном отделе заявление о
          выборе научного руководителя и темы аттестационной работы{" "}
          <span className={styles.a}>
            <a href="https://mrcpk.tgn.sfedu.ru/docs/liter/defence/Zayvlenie_rukovod.DOC">
              (бланк заявления)
            </a>
          </span>
          .
          <br />
          <span className={styles.span}>
            В случае непредоставления в указанные сроки заявления вы будете не
            допущены к итоговой аттестации.
          </span>
        </p>
        <p className={styles.p}>
          {Fblock.map((item, index) => (
            <div key={index}>
              <a className={styles.a} href={item.url}>
                {item.text}
              </a>
              <br />
            </div>
          ))}
        </p>
        <p className={styles.p}>
          {Sblock.map((item, index) => (
            <div key={index}>
              <a className={styles.a} href={item.url}>
                {item.text}
              </a>
              <br />
            </div>
          ))}
        </p>
      </div>
    </div>
  );
};
