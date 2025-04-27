import styles from "./style.module.scss";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Teacher } from "./teacher";
import { data } from "./data";
export const TeachersPlacement = () => {
  return (
    <div className={styles.container} id="teachers">
      <h3 className={styles.heading}>
        НАШИ <span className={styles.headingSpan}>ПРЕПОДАВАТЕЛИ</span>
      </h3>
      <div className={styles.content}>
        <Carousel className={styles.carousel}>
          <CarouselContent className={styles.carouselContent}>
            {data.map((item, index) => {
              return (
                <CarouselItem className={styles.carouselItem} key={index}>
                  <Teacher
                    info={item.info}
                    subject={item.subject}
                    exam={item.exam}
                    years={item.years}
                    balls={item.balls}
                    img={item.img}
                    description={item.description}
                  />
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
