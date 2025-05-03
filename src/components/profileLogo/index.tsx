import styles from "./styles.module.scss";
import Image from "next/image";
export const ProfileLogo = ({ img }: any) => {
  return (
    <div className={styles.container}>
      <Image src={img} alt="error" width={100} height={100}></Image>
    </div>
  );
};
