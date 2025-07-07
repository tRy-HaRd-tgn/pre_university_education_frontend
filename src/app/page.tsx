import styles from "./main-page.module.scss";
import { Header } from "@/components/header";
import { Metadata } from "next";
import { CoursePlacement } from "@/components/coursePlacements";
import { WebinarPlacements } from "@/components/webinarPlacements";
import { WebinarPlacementsClient } from "@/components/webinarPlacements/WebinarPlacementsClient";
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
        <WebinarPlacementsClient />
      </div>
      <div className={styles.teachers}>
        <RewiewsPlacements category={"OTHER"} />
      </div>
      <div className={styles.ufu}>
        <UfuDescription />
      </div>
      <Footer />
    </div>
  );
}

// Добавляем revalidate для автоматического обновления данных каждые 60 секунд
export const revalidate = 60;
