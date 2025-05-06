import styles from "./styles.module.scss";
import { Header } from "@/components/header";
import { RainbowPlacement } from "@/components/rainbowPlacement";
import { EducationProgram } from "@/components/educationProgram";
import { ClassesPropgram } from "@/components/classesProgram";
import { RewiewsPlacements } from "@/components/reviewsPlacements";
import { TeachersPlacement } from "@/components/teachersPlacement";
import { Footer } from "@/components/footer";

export default async function Page() {
  return (
    <div className={styles.container}>
      <Header flag={true} />
      <div className={styles.childrenPlacement}>
        <RainbowPlacement img={"/children.png"} />
      </div>
      <div className={styles.educationProgram}>
        <EducationProgram />
      </div>
      <div className={styles.classes}>
        <ClassesPropgram />
      </div>
      <div className={styles.teachersPlacement}>
        <TeachersPlacement category={"RAINBOW"} />
      </div>
      <div className={styles.reviews}>
        <RewiewsPlacements category={"RAINBOW"} />
      </div>
      <Footer />
    </div>
  );
}
