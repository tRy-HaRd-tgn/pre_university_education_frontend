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
import { useSelector } from "react-redux";
import { toast } from "sonner";

export const RewiewsPlacements = () => {
  const auth = useSelector((state: any) => state.userSlice.auth);
  return (
    <div className={styles.container} id="reviews">
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
            onClick={() => {
              if (auth) {
              } else {
                toast("Запись", {
                  description: "Для отзыва вам необходимо авторизироваться",
                  action: {
                    label: "скрыть",
                    onClick: () => console.log("Undo"),
                  },
                });
              }
            }}
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
