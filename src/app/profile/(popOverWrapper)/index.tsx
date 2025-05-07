"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import CoursesService from "@/service/coursesService";
import { useSelector } from "react-redux";

export const PopOverWrapper = () => {
  const courses = useSelector((state: any) => state.userSlice.courses);

  return (
    <>
      <Popover>
        <PopoverTrigger className={styles.trigger}>
          Курсы, на которые вы записаны
        </PopoverTrigger>
        <PopoverContent>
          {courses?.map((item: any) => item.name)}
        </PopoverContent>
      </Popover>
    </>
  );
};
