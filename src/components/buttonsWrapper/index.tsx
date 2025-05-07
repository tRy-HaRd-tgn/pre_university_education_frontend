"use client";
import styles from "./styles.module.scss";
import { urls } from "./data";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import UrlService from "@/service/urlService";
import { useEffect } from "react";

export const ButtonsWrapper = () => {
  const router = useRouter();
  var array = [];
  async function getUrls() {
    try {
      var temp = await UrlService.getUrls("ТЕМЫ АТТЕСТАЦИОННЫХ РАБОТ");
      array.push(temp);
      temp = await UrlService.getUrls("ПОЛОЖЕНИЕ");
      array.push(temp);
      temp = await UrlService.getUrls("ПРОЦЕДУРА ЗАЩИТЫ АТТЕСТАЦИОННЫХ РАБОТ");
      array.push(temp);
      temp = await UrlService.getUrls("ЛИТЕРАТУРА");
      array.push(temp);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getUrls();
  }, []);

  return (
    <div className={styles.container}>
      {urls.map((item, index) => (
        <div key={index} className={styles.buttonWrapper}>
          <Button
            onClick={() => {
              router.replace(item.url);
            }}
            key={index}
            className={styles.button}
          >
            {item.text}
          </Button>
        </div>
      ))}
    </div>
  );
};
