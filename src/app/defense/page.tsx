import styles from "./styles.module.scss";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DefenseWrapper } from "@/components/defenseWrapper";
import { PrivateRoute } from "@/components/privateRoute";
export default function Page() {
  return (
    <PrivateRoute>
      <div className={styles.container}>
        <Header flag={true} />
        <DefenseWrapper />
        <Footer />
      </div>
    </PrivateRoute>
  );
}
