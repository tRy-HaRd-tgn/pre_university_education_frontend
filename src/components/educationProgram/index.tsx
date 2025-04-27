import styles from "./styles.module.scss";
import Image from "next/image";
export const EducationProgram = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>
        ПРОГРАММА &nbsp; <span className={styles.span}>ОБУЧЕНИЯ</span>
      </h2>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.leftTop}>
            <div className={styles.leftColor}></div>
            <p className={styles.leftText}>
              <span className={styles.leftTextSpan}>Цель программы</span> -
              способствовать умственному и творческому развитию детей,
              поддерживать их интерес к разным сферам учебной деятельности,
              содействовать формированию социальных навыков и навыков
              коммуникации
            </p>
          </div>
          <div className={styles.leftBottom}>
            <div className={styles.leftBottomText}>
              <h2 className={styles.heading}>Структура занятий:</h2>
              <p className={styles.leftBottomTextP}>
                <li>
                  <span className={styles.spanS}>МАТЕМАТИКА</span> - Учимся
                  решать математические задачи, развиваем логику и умение
                  рассуждать
                </li>
                <li>
                  <span className={styles.spanS}>ФИЗИКА </span>- Научим понимать
                  смысл физических явлений и решать задачи: от простых до
                  нестандартных.
                </li>
                <li>
                  <span className={styles.spanS}>РУССКИЙ ЯЗЫК</span> - В
                  занимательной форме знакомимся с разными языковыми явлениями,
                  учимся грамотно писать, формируем круг чтения.
                </li>
                <li>
                  <span className={styles.spanS}>АНГЛИЙСКИЙ ЯЗЫК</span> - Учим
                  грамотно строить предложения, обогащаем словарный запас,
                  тренируем навыки беседы и многое другое.
                </li>
                <li>
                  <span className={styles.spanS}>ИНФОРМАТИКА</span> -
                  Рассматриваем основы работы с компрьютером, графикой,
                  анимацией программированием
                </li>
              </p>
            </div>
            <div className={styles.rightColor}></div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.rightTop}>
            <div className={styles.rightTopColor} />
            <p className={styles.rightTopText}>
              Одним из важнейших факторов развития личностных и творческих
              качеств ребенка является помещение его в соответствующую  среду.  
              Приходя в нашу школу, ребенок попадает в  коллектив
              единомышленников, где желание узнать больше  не осмеивается
              сверстниками,  где  всячески приветствуется творческое
              любопытство, где нет культа «оценки», где появляется здоровый
              азарт и блеск в глазах детей.
            </p>
          </div>
          <div className={styles.rightBottom}>
            <p className={styles.rightBotomText}>О ШКОЛЕ</p>
            <Image
              className={styles.arrow}
              src={"/bottomArrow.svg"}
              alt="error"
              width={50}
              height={50}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
