import styles from "./styles.module.scss";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PositionWrapper } from "@/components/positionWrapper";
import { PrivateRoute } from "@/components/privateRoute";
export default function Page() {
  return (
    <PrivateRoute>
      <div className={styles.container}>
        <Header flag={true} />
        <PositionWrapper />
        <Footer />
      </div>
    </PrivateRoute>
  );
}
