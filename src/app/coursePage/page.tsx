import styles from "./styles.module.scss";
import { Header } from "@/components/header";
import { HeadingPlacemnent } from "@/components/headingPlacement";
import { Education } from "@/components/education";
import { QuestionsPlacement } from "@/components/questionPlacement";
import { Footer } from "@/components/footer";
import { TeachersPlacement } from "@/components/teachersPlacement";
import { RewiewsPlacements } from "@/components/reviewsPlacements";
export default function CoursePage() {
  return (
    <div className={styles.container}>
      <Header flag={true} />
      <div className={styles.headingPlacement}>
        <div className={styles.gradient}></div>
        <HeadingPlacemnent />
      </div>
      <div className={styles.coursePlacement}>
        <Education category={"EDUCATION"} />
      </div>
      <div className={styles.questions}>
        <div className={styles.questionsWrapper}>
          <h2 className={styles.questionsHeading}>Часто задаваемые вопросы</h2>
          <QuestionsPlacement />
        </div>
      </div>
      <div className={styles.teachersWrapper}>
        <TeachersPlacement category={"EDUCATION"} />
      </div>
      <div className={styles.reviews}>
        <RewiewsPlacements category={"EDUCATION"} />
      </div>
      <Footer />
    </div>
  );
}
