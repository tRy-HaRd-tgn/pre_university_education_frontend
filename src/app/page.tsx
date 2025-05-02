import styles from "./main-page.module.scss";
import { Header } from "@/components/header";
import { Metadata } from "next";
import { CoursePlacement } from "@/components/coursePlacements";
import { WebinarPlacements } from "@/components/webinarPlacements";
import { RewiewsPlacements } from "@/components/reviewsPlacements";
import { UfuDescription } from "@/components/ufuDescription";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "ЮФУ довузовская подготовка",
  description: "Создано it-кооперацией right wing it",
};
export default function Home() {
  return (
    <div className={styles.container}>
      <Header flag={false}></Header>
      <div className={styles.courses}>
        <CoursePlacement />
      </div>
      <div className={styles.webinars}>
        <WebinarPlacements />
      </div>
      <div className={styles.teachers}>
        <RewiewsPlacements />
      </div>
      <div className={styles.ufu}>
        <UfuDescription />
      </div>
      <Footer />
    </div>
  );
}
