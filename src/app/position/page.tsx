import styles from "./styles.module.scss";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PositionWrapper } from "@/components/positionWrapper";
export default function Page() {
  return (
    <div className={styles.container}>
      <Header flag={true} />
      <PositionWrapper />
      <Footer />
    </div>
  );
}
