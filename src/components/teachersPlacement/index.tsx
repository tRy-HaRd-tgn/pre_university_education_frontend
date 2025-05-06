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
  const response = await TeachersService.getTeachers(category);
  const data = response.data;

  console.log(data);
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
                  className="pl-5 md:basis-1/2 lg:basis-1/4"
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
