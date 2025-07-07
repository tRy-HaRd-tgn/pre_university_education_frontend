import styles from "./styles.module.scss";
import { CaroselWrapper } from "./caroselWrapper";
import { CarouselWrapperClient } from "./CarouselWrapperClient";
import { TextAreaWrapper } from "./textAreaWrapper";

export const RewiewsPlacements = ({ category }: { category: string }) => {
  return (
    <div className={styles.container} id="reviews">
      <div className={styles.content}>
        <div className={styles.leftSide}>
          <CarouselWrapperClient category={category} />
        </div>
        <div className={styles.rightSide}>
          <TextAreaWrapper />
        </div>
      </div>
    </div>
  );
};
