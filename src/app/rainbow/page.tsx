import styles from "./styles.module.scss";
import { Header } from "@/components/header";
import { RainbowPlacement } from "@/components/rainbowPlacement";
export default function Page() {
  return (
    <div className={styles.container}>
      <Header flag={true} />
      <div className={styles.childrenPlacement}>
        <RainbowPlacement />
      </div>
    </div>
  );
}
