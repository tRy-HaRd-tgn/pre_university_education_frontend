import styles from "./styles.module.scss";
import Image from "next/image";
export const HeadingPlacemnent = () => {
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
        <button className={styles.button}>
          записаться{" "}
          <Image className={styles.buttonImg} src={"/btn.svg"} alt="error" width={40} height={25} />
        </button>
      </div>
    </div>
  );
};
