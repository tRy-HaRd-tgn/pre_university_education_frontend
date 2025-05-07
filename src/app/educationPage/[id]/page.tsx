"use client";
import styles from "./styles.module.scss";
import { educationPageProps as Props } from "@/types/educationPageProps";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import CoursesService from "@/service/coursesService";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Block } from "./(block)";
export default function Page({}: Props) {
  var { id } = useParams();
  const [data, setData] = useState<any>();
  async function getData() {
    try {
      const response = await CoursesService.getCourse(id as string);
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return (
    <div className={styles.container}>
      <Header flag={true} />
      <div className={styles.content}>
        <div className={styles.top}>
          <h3 className={styles.heading}>{data?.name}</h3>
          <div className={styles.line}></div>
        </div>
        <div className={styles.middle}>
          <p className={styles.p}>
            <span className={styles.pB}>Форма обучения: </span>
            {data?.studyFormat}
          </p>
          <p className={styles.p}>
            <span className={styles.pB}>Документ: </span>
            {data?.document}
          </p>
          <p className={styles.p}>
            <span className={styles.pB}>Начало обучения: </span>
            {data?.studyStart}
          </p>
          <p className={styles.p}>
            <span className={styles.pB}>
              Зачисление проходит без дополнительных испытаний
            </span>
          </p>
        </div>
        <div className={styles.bottom}>
          <p>
            В ЦДО работает консультационный пункт, где можно получить
            консультации по всем дисциплинам в рамках учебного плана. Для того,
            чтобы стать слушателем ЦДО необходимо заключить договор на оказание
            платных образовательных услуг в сфере дополнительного
            профессионального образования (обучение в ЦДО платное). При
            оформлении договора необходимо иметь при себе паспорт, а также
            предоставить в ЦДО:
          </p>
          <div className={styles.dots}>
            <li>3 фотографии 3х4см;</li>
            <li>ксерокопию паспорта со страницей прописки;</li>
            <li>
              ксерокопию диплома об имеющемся высшем или среднем
              профессиональном образовании, заверенную нотариально (или справку
              деканата, если вы являетесь студентом);
            </li>
            <li>
              в случае несовпадения фамилии (имени) в паспорте и дипломе,
              необходимо предоставить нотариально заверенную ксерокопию
              свидетельства об изменении фамилии (имени){" "}
            </li>
            <li>или о заключении брака;</li>
            <li>номер СНИЛС</li>
            <li>номер ИНН</li>
          </div>
          <p>
            Набор слушателей в ЦДО на обучение по различным программам
            дополнительного профессион ального образования производится в
            течение всего календарного года.
          </p>
        </div>
        <div className={styles.blocksWrapper}>
          {data?.priceOptions.map((item: any, index: number) => {
            return (
              <Block key={index} duration={item.duration} price={item.price} />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
