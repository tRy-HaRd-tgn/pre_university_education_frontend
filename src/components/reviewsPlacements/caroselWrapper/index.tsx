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
                description={item.description}
                text={item.text}
                img={item.user.picture}
                course={item.user.course.name}
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
