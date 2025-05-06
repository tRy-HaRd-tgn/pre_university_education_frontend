import styles from "./styles.module.scss";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { RewiewsPlacements } from "@/components/reviewsPlacements";
import { TeachersPlacement } from "@/components/teachersPlacement";
import { RainbowPlacement } from "@/components/rainbowPlacement";
import { ExamProgram } from "@/components/examProgram";
import { ExamChoise } from "@/components/examChoise";
export default function Page() {
  return (
    <div className={styles.container}>
      <Header flag={true} />
      <div className={styles.rainbowPlace}>
        <RainbowPlacement img={"/students.png"} />
      </div>
      <div className={styles.examProgram}>
        <ExamProgram />
      </div>
      <div className={styles.exams}>
        <ExamChoise />
      </div>
      <div className={styles.teachers}>
        <TeachersPlacement category={"EXAM"} />
      </div>
      <div className={styles.reviews}>
        <RewiewsPlacements category={"EXAM"} />
      </div>
      <Footer />
    </div>
  );
}
