import styles from "./styles.module.scss";
import Image from "next/image";
export const UfuDescription = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftSide}>
          <h2 className={styles.heading}>
            О НАШЕЙ&nbsp;
            <span className={styles.specialHeading}> ОРГАНИЗАЦИИ</span>
          </h2>
          <p className={styles.description}>
            Центр довузовской подготовки (ЦДП) Таганрогского технологического
            института Южного федерального университета (ТТИ ЮФУ) образован в
            октябре 1995 года. Действует на основании лицензии Министерства
            образования РФ. До 2007 года являлся структурным подразделением
            Таганрогского радиотехнического университета (ТРТУ). После
            преобразования ТРТУ в ТТИ ЮФУ продолжил работу в рамках факультета
            естественно-научной и гуманитарной подготовки ТТИ ЮФУ.
          </p>
        </div>
        <Image
          className={styles.img}
          src={"/ufu.png"}
          width={1700}
          height={1700}
          alt="error"
        />
      </div>
    </div>
  );
};
