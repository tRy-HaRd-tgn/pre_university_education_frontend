"use client";
import styles from "./styles.module.scss";
import { Component } from "./component";
import { useEffect } from "react";
import CoursesService from "@/service/coursesService";
import { useState } from "react";

export const Education = ({ category }: { category: string }) => {
  const [data, setData] = useState([]);
  async function getData() {
    try {
      const response = await CoursesService.getCourses(category);
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={styles.container}>
      {data?.map((item: any, index: number) => {
        var array = new Array();
        for (let i = 0; i < item.priceOptions.length; i++) {
          array.push(item.priceOptions[i].duration);
        }
        return (
          <Component
            key={index}
            name={item?.name}
            heading={item.header}
            date={array}
            document={item.document}
            id={item.id}
          />
        );
      })}
    </div>
  );
};
