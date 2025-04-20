import Image from "next/image";
import styles from "./main-page.module.scss";
import { Header } from "@/components/header";
// main page
export default function Home() {
  return (
    <div className={styles.container}>
      <Header flag={false}></Header>
    </div>
  );
}
