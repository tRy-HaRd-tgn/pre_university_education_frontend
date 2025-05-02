import styles from "./styles.module.scss";
import Image from "next/image";
export const ExamProgram = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.h2}>
				ПРОГРАММА &nbsp; <span className={styles.span}>ОБУЧЕНИЯ</span>
			</h2>
			<div className={styles.wrapper}>
				<div className={styles.left}>
					<div className={styles.leftTop}>
						<div className={styles.leftColor}></div>
						<div className={styles.leftText}>
							<span className={styles.leftTextSpan}>
								Структура занятий:
							</span>
							<ul>
								<li>Теоретические лекции</li>
								<li>Индивидуальные консультации</li>
								<li>Повторение материала</li>
								<li>Проведение тестов и контрольных работ</li>
							</ul>
						</div>
					</div>
					<div className={styles.leftBottom}>
						<div className={styles.leftBottomText}>
							<h2 className={styles.heading}>
								Программа подготовки к экзаменам:
							</h2>
							<p className={styles.leftBottomTextP}>
								предназначена для учеников, которые хотят
								повысить свои знания и навыки для успешной сдачи
								экзаменов. Программа включает в себя
								теоретические и практические занятия, а также
								индивидуальные консультации с преподавателями.
							</p>
						</div>
						<div className={styles.rightColor}></div>
					</div>
				</div>
				<div className={styles.right}>
					<div className={styles.rightTop}>
						<div className={styles.rightTopColor} />
						<p className={styles.rightTopText}>
							<span className={styles.heading}>
								Цель программы
							</span>{" "}
							- помочь ученикам лучше подготовиться к экзаменам и
							получить максимально возможный балл. Результаты
							обучения включают в себя глубокое понимание
							материала, улучшенные навыки решения задач и
							повышение уверенности в своих силах.
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
