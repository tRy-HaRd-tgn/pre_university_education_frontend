import styles from "./styles.module.scss";
import { Header } from "@/components/header";
import { HeadingPlacemnent } from "@/components/headingPlacement";
import { Education } from "@/components/eduction";
import { QuestionsPlacement } from "@/components/questionPlacement";
import { Footer } from "@/components/footer";
export default function CoursePage() {
  return (
    <div className={styles.container}>
      <Header flag={true} />
      <div className={styles.headingPlacement}>
        <div className={styles.gradient}></div>
        <HeadingPlacemnent />
      </div>
      <div className={styles.coursePlacement}>
        <Education />
      </div>
      <div className={styles.questions}>
        <div className={styles.questionsWrapper}>
          <h2 className={styles.questionsHeading}>Часто задаваемые вопросы</h2>
          <QuestionsPlacement />
        </div>
      </div>
      <Footer />
    </div>
  );
}
