"use client";
import styles from "./styles.module.scss";
import { Component } from "./component";
import { useEffect } from "react";
import { useState } from "react";
import FaqService from "@/service/faqService";
import { Axios, AxiosResponse } from "axios";
export const QuestionsPlacement = () => {
  const [faq, setFaq] = useState([]);
  async function getFAQ() {
    try {
      const response = await FaqService.getFaq();
      setFaq(response.data);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getFAQ();
  }, []);
  return (
    <div className={styles.container}>
      {faq?.map((item: any, index: any) => {
        return (
          <Component
            key={index}
            question={item.question}
            answer={item.answer}
          />
        );
      })}
    </div>
  );
};
