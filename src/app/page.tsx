import styles from "./main-page.module.scss";
import { Header } from "@/components/header";
import { Metadata } from "next";
import { CoursePlacement } from "@/components/coursePlacements";
import { WebinarPlacementsClient } from "@/components/webinarPlacements/WebinarPlacementsClient";
import { RewiewsPlacements } from "@/components/reviewsPlacements";
import { UfuDescription } from "@/components/ufuDescription";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Центр дополнительного образования ЮФУ (ЦДО ИУЭС ЮФУ)",
  description:
    "Центр дополнительного образования Южного федерального университета. Дополнительные образовательные программы, курсы повышения квалификации, профессиональная переподготовка.",
  keywords:
    "дополнительное образование, ЮФУ, курсы, повышение квалификации, профессиональная переподготовка, образование,ЦДП, ЮФУ, ЕГЭ, МРЦПК, ЦДО, Центр довузовской подготовки, Довузовская подготовка, подкурсы, репетиция ЕГЭ, Пробники, Пробный ЕГЭ, Подготовка к ЕГЭ, ИУЭС, репетиторство, русский, математика, физика, ОГЭ, ЕГЭ, Переподготовка, юриспруденция, экономика, юрист, экономист, военное право, экономическая безопасность, IT юрист, профессиональная переподготовка, переобучение, второй диплом, второе образование, повышение квалификации",
  authors: [{ name: "ЦДО ИУЭС ЮФУ" }],
  creator: "ЦДО ИУЭС ЮФУ",
  publisher: "Южный федеральный университет",
  robots: "index, follow",
  openGraph: {
    title: "Центр дополнительного образования ЮФУ (ЦДО ИУЭС ЮФУ)",
    description:
      "Центр дополнительного образования Южного федерального университета. Дополнительные образовательные программы, курсы повышения квалификации, профессиональная переподготовка, ",
    type: "website",
    locale: "ru_RU",
    siteName: "ЦДО ИУЭС ЮФУ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Центр дополнительного образования ЮФУ (ЦДО ИУЭС ЮФУ)",
    description:
      "Центр дополнительного образования Южного федерального университета. Дополнительные образовательные программы, курсы повышения квалификации, профессиональная переподготовка.",
  },
  alternates: {
    canonical: "/",
  },
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
