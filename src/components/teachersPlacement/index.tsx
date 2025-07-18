"use client";
import styles from "./style.module.scss";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Teacher } from "./teacher";
import TeachersService from "@/service/teachersService";
import { useEffect, useState } from "react";

export const TeachersPlacement = ({ category }: any) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await TeachersService.getTeachers(category);
        setData(response.data);
      } catch (error) {
        console.error("Ошибка при загрузке преподавателей:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeachers();

    // Обновляем данные каждые 30 секунд
    const interval = setInterval(fetchTeachers, 30000);

    return () => clearInterval(interval);
  }, [category]);

  if (loading) {
    return (
      <div className={styles.container} id="teachers">
        <h3 className={styles.heading}>
          НАШИ <span className={styles.headingSpan}>ПРЕПОДАВАТЕЛИ</span>
        </h3>
        <div className={styles.content}>
          <p>Загрузка преподавателей...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container} id="teachers">
      <h3 className={styles.heading}>
        НАШИ <span className={styles.headingSpan}>ПРЕПОДАВАТЕЛИ</span>
      </h3>
      <div className={styles.content}>
        <Carousel className="w-full">
          <CarouselContent className="-ml-1">
            {data?.map((item: any, index: any) => {
              return (
                <CarouselItem
                  className="pl-5 md:basis-1/2 lg:basis-1/4 h-full"
                  key={index}
                >
                  <div className="p-7">
                    <Teacher
                      info={
                        item.surname + " " + item.name + " " + item.patronymic
                      }
                      subject={item.direction}
                      exam={"ЕГЭ"}
                      years={item.experience}
                      balls={item.egeScore}
                      img={item.picture}
                      description={item.description}
                    />
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className={styles.previous} />
          <CarouselNext className={styles.next} />
        </Carousel>
      </div>
    </div>
  );
};
