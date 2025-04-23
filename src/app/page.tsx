import styles from "./main-page.module.scss";
import { Header } from "@/components/header";
import { LogosPlacements } from "@/components/logosPlacements";
import { CoursePlacement } from "@/components/coursePlacements";
import { WebinarPlacements } from "@/components/webinarPlacements";
import { TeachersPlacements } from "@/components/teachersPlacements";
import { UfuDescription } from "@/components/ufuDescription";
import { Footer } from "@/components/footer";
// main page
export default function Home() {
  return (
    <div className={styles.container}>
      <Header flag={false}></Header>
      <div className={styles.logos}>
        <LogosPlacements />
      </div>
      <div className={styles.courses}>
        <CoursePlacement />
      </div>
      <div className={styles.webinars}>
        <WebinarPlacements />
      </div>
      <div className={styles.teachers}>
        <TeachersPlacements />
      </div>
      <div className={styles.ufu}>
        <UfuDescription />
      </div>
      <Footer />
    </div>
  );
}
