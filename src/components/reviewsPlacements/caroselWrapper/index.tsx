import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Teacher } from "../teacher";
import styles from "./styles.module.scss";
import ReviewsService from "@/service/rewiewsService";

export const CaroselWrapper = async ({ category }: { category: string }) => {
  try {
    const response = await ReviewsService.getReviews(category);
    const data = response.data;
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
  } catch (error) {
    return (
      <Carousel className={styles.carousel}>
        <CarouselContent className={styles.carouselContent}></CarouselContent>
        <CarouselPrevious className={styles.previous} />
        <CarouselNext className={styles.next} />
      </Carousel>
    );
  }
};

// Добавляем revalidate для автоматического обновления данных каждые 60 секунд
export const revalidate = 60;
