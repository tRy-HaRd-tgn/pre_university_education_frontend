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
export const TeachersPlacement = async ({ category }: any) => {
  const response = await TeachersService.getTeachers("RAINBOW");
  const data = response.data;

  console.log(data);
  return (
    <div className={styles.container} id="teachers">
      <h3 className={styles.heading}>
        НАШИ <span className={styles.headingSpan}>ПРЕПОДАВАТЕЛИ</span>
      </h3>
      <div className={styles.content}>
        <Carousel className={styles.carousel}>
          <CarouselContent className={styles.carouselContent}>
            {data?.map((item: any, index: any) => {
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
