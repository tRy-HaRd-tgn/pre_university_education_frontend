import styles from "./styles.module.scss";
import Image from "next/image";
import { Map } from "../map";
import { Globe, House, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contacts" className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.leftSide}>
          <h2 className={styles.heading}>Контактная информация</h2>
          <div className={styles.top}>
            <div className={styles.topRight}>
              <div className={styles.imgWrapper}>
                <House width={20} height={20} className={styles.img} />
                <h2 className={styles.heading}>Адрес</h2>
              </div>
              <p className={styles.text}>
                г. Таганрог, ул. Чехова 24 Проезд трамваями № 2, 3, 5, 8, 9
                остановка "Университет", маршрутными такси № 6, 56, 60, 73
                остановка "Университет", № 19, 30, 74 остановка "переулок
                Гарибальди"
              </p>
            </div>
            <div className={styles.topRight}>
              <div className={styles.imgWrapper}>
                <Phone className={styles.img} width={20} height={20} />
                <h2 className={styles.heading}>Телефоны</h2>
              </div>
              <p className={styles.text}>
                г. Таганрог, ул. Чехова 24 Проезд трамваями № 2, 3, 5, 8, 9
                остановка "Университет", маршрутными такси № 6, 56, 60, 73
                остановка "Университет", № 19, 30, 74 остановка "переулок
                Гарибальди"
              </p>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.bottomLeft}>
              <div className={styles.imgWrapper}>
                <Mail width={20} height={20} className={styles.img} />
                <h2 className={styles.heading}>Почта</h2>
              </div>
              <div className={styles.textWrapper}>
                <p className={styles.text}>
                  Руководитель ЦДП Петренко Светлана Владимировна
                  <br />
                  <a className={styles.a} href="mailto:svstash@sfedu.ru">
                    svstash@sfedu.ru
                  </a>
                </p>
                <p className={styles.text}>
                  Заместитель руководителя ЦДП Лада Ольга Вячеславовна
                  <br />
                  <a className={styles.a} href="mailto:lada@sfedu.ru">
                    lada@sfedu.ru
                  </a>
                </p>
                <p className={styles.text}>
                  Специалист по учебно-методической работе Палагина Ангелина
                  Александровна
                  <br />
                  <a className={styles.a} href="mailto:apalagina@sfedu.ru">
                    apalagina@sfedu.ru 
                  </a>
                </p>
                <p className={styles.text}>
                  Руководитель школы "Радуга" Касьянова Алла Николаевна
                  <br />
                  <a className={styles.a} href="mailto:kasyanovaan@sfedu.ru">
                    kasyanovaan@sfedu.ru
                  </a>
                </p>
              </div>
            </div>
            <div className={styles.bottomRight}>
              <div className={styles.imgWrapper}>
                <Globe className={styles.img} width={20} height={20} />
                <h2 className={styles.heading}>Социальные сети</h2>
              </div>
              <div className={styles.text}>
                <span>Вконтакте</span>
                <br />
                ЦДП:&nbsp;
                <a
                  className={styles.a}
                  style={{ marginBottom: "15px" }}
                  href="https://vk.com/cdp_tgn"
                >
                  https://vk.com/cdp_sfu
                </a>
                <br />
                <span>МРЦПК:&nbsp;</span>
                <a className={styles.a} href="https://vk.com/mrcpk_tgn">
                  https://vk.com/mrcpk_tgn
                </a>
                <div style={{ marginTop: "15px" }} className={styles.text}>
                  <span>Телеграмм</span>
                  <br />
                  ЦДП:&nbsp;
                  <a
                    className={styles.a}
                    style={{ marginBottom: "15px" }}
                    href="https://t.me/s/cdp_sfedu"
                  >
                    https://t.me/s/cdp_sfedu
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightSide}>
          <Map />
        </div>
      </div>
    </footer>
  );
};
