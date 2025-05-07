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
  const [course, setCourse] = useState();
  const id = useSelector((state: any) => state.userSlice.courses);
  async function handleCourses() {
    try {
      const response = await CoursesService.getCourse(id);
      setCourse(response.data.name);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    handleCourses();
  }, []);
  return (
    <>
      <Popover>
        <PopoverTrigger className={styles.trigger}>
          Курсы, на которые вы записаны
        </PopoverTrigger>
        <PopoverContent>{course}</PopoverContent>
      </Popover>
    </>
  );
};
