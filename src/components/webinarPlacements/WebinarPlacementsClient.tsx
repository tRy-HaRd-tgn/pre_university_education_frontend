"use client";
import styles from "./styles.module.scss";
import Image from "next/image";
import WebinarService from "@/service/webinarService";
import { Webinar } from "./webinar";
import { useEffect, useState } from "react";

export const WebinarPlacementsClient = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWebinars = async () => {
      try {
        const response = await WebinarService.getWebinars();
        setData(response.data);
      } catch (error) {
        console.error("Ошибка при загрузке вебинаров:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWebinars();

    // Обновляем данные каждые 30 секунд
    const interval = setInterval(fetchWebinars, 30000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.rightSide}>
          <div className={styles.webinarsScroller}>
            <p>Загрузка вебинаров...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Image
        className={styles.leftSide}
        src={"/chair.png"}
        width={1500}
        height={1500}
        alt={"error"}
        priority
      />
      <div className={styles.rightSide}>
        <div className={styles.webinarsScroller}>
          {data?.map((item: any, index: any) => {
            return (
              <Webinar
                key={index}
                heading={item.title}
                description={item.description}
                time={item.date}
                type={item.status}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
