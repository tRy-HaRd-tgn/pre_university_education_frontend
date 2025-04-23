"use client";
import styles from "./styles.module.scss";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { data } from "./data";
import { Teacher } from "./teacher";

export const TeachersPlacements = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftSide}>
          <Carousel className={styles.carousel}>
            <CarouselContent className={styles.carouselContent}>
              {data.map((item, index) => {
                return (
                  <CarouselItem key={index}>
                    <Teacher
                      name={item.name}
                      description={item.description}
                      text={item.text}
                    />
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className={styles.previous} />
            <CarouselNext className={styles.next} />
          </Carousel>
        </div>
        <div className={styles.rightSide}>
          <Image
            className={styles.arrow}
            src={"/arrow.svg"}
            width={100}
            height={100}
            alt={"error"}
          />
          <textarea
            placeholder="Оставьте отзыв..."
            className={styles.textarea}
            name=""
            id=""
          />
        </div>
      </div>
    </div>
  );
};
