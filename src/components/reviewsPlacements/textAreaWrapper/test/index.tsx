"use client";
import { useSelector } from "react-redux";
import styles from "./styles.module.scss";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import UsersService from "@/service/usersService";
import { useState } from "react";
export const Test = ({ text }: { text: string }) => {
  const array = useSelector((state: any) => state.userSlice.courses);
  const name = useSelector((state: any) => state.userSlice.name);
  const [success, setSuccess] = useState(false);
  const [errror, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");
  async function handleClick() {
    try {
      setError(false);
      setLoading(true);
      const response = await UsersService.sendReview(text, id);
      setLoading(false);
      setSuccess(true);
    } catch (e) {
      setError(true);
      setLoading(false);
      setSuccess(false);
    }
  }
  return (
    <div className={styles.content}>
      <h3 className={styles.heading}>Оставить отзыв</h3>
      <Select onValueChange={(e) => setId(e)}>
        <SelectTrigger className={styles.select}>
          <SelectValue placeholder="курс" />
        </SelectTrigger>
        <SelectContent style={{ zIndex: "9999" }}>
          {array.map((item: any) => (
            <SelectItem
              style={{ cursor: "pointer" }}
              key={item.id}
              value={item.id}
            >
              {item.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button className={styles.button} onClick={handleClick}>
        {loading ? "Отправка..." : "Отправить"}
      </Button>
      {errror && <p className={styles.error}>Произошла ошибка</p>}
      {success && <p className={styles.success}>Отзыв отправлен</p>}
    </div>
  );
};
