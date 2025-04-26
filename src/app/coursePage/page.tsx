import styles from "./styles.module.scss";
import { Header } from "@/components/header";
import { HeadingPlacemnent } from "@/components/headingPlacement";
export default function CoursePage() {
  return (
    <div className={styles.container}>
      <Header flag={true} />
      <div className={styles.headingPlacement}>
        <div className={styles.gradient}></div>
        <HeadingPlacemnent />
      </div>
    </div>
  );
}
