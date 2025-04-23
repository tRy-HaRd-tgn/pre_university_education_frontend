import Image from "next/image";
import styles from "./styles.module.scss";
export const LogosPlacements = () => {
  return (
    <>
      <Image
        className={styles.img}
        style={{ position: "absolute", bottom: "25px", left: "50%" }}
        width={100}
        height={92}
        src="/inst.svg"
        alt="error"
      />
      <Image
        style={{
          position: "absolute",
          bottom: "25px",
          left: "65%",
          width: "20%",
        }}
        className={styles.img}
        width={100}
        height={92}
        src="/tg.svg"
        alt="error"
      />
      <Image
        className={styles.img}
        style={{
          position: "absolute",
          top: "0px",
          left: "82%",
          width: "10%",
        }}
        width={100}
        height={92}
        src="/tgBig.svg"
        alt="error"
      />
      <Image
        className={styles.img}
        style={{
          position: "absolute",
          bottom: "35px",
          left: "15%",
          width: "12%",
        }}
        width={100}
        height={92}
        src="/vk.svg"
        alt="error"
      />
      <Image
        style={{
          position: "absolute",
          top: "5%",
          width: "18%",
          left: "7%",
        }}
        className={styles.img}
        width={100}
        height={92}
        src="/instBig.svg"
        alt="error"
      />
      <div className={styles.wrapper}>
        <Image
          style={{ borderRadius: "10%" }}
          priority={true}
          quality={100}
          width={1000}
          height={920}
          src="/logoW.png"
          alt="error"
        />
        <p className={styles.description}>Лучшее будущее начинается здесь</p>
      </div>
    </>
  );
};
