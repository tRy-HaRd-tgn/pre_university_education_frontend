"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Teacher } from "./teacher";
import styles from "./caroselWrapper/styles.module.scss";
import ReviewsService from "@/service/rewiewsService";
import { useEffect, useState } from "react";

export const CarouselWrapperClient = ({ category }: { category: string }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await ReviewsService.getReviews(category);
        setData(response.data);
      } catch (error) {
        console.error("Ошибка при загрузке отзывов:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();

    // Обновляем данные каждые 30 секунд
    const interval = setInterval(fetchReviews, 30000);

    return () => clearInterval(interval);
  }, [category]);

  if (loading) {
    return (
      <Carousel className={styles.carousel}>
        <CarouselContent className={styles.carouselContent}>
          <CarouselItem>
            <p>Загрузка отзывов...</p>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className={styles.previous} />
        <CarouselNext className={styles.next} />
      </Carousel>
    );
  }

  return (
    <Carousel className={styles.carousel}>
      <CarouselContent className={styles.carouselContent}>
        {data.map((item: any, index: any) => {
          return (
            <CarouselItem key={index}>
              <Teacher
                name={item.user.name}
                description={item.course.name}
                text={item.text}
                img={item.user.picture}
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className={styles.previous} />
      <CarouselNext className={styles.next} />
    </Carousel>
  );
};
