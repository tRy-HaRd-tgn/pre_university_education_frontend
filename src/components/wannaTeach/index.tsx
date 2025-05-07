"use client";
import styles from "./styles.module.scss";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useSelector, UseSelector } from "react-redux";
import CoursesService from "@/service/coursesService";
import ApplicationService from "@/service/applicationService";

export const WannaTeach = () => {
  const [name, setName] = useState("");
  const nameT = useSelector((state: any) => state.userSlice.name);
  const [type, setType] = useState("");
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [phone, setPhone] = useState("");
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    setName(nameT);
  }, []);
  async function getData() {
    if (type != "") {
      try {
        const response = await CoursesService.getCourses(type);
        setData(response.data);
      } catch (e) {
        console.log(e);
      }
    }
  }
  useEffect(() => {
    getData();
  }, [type]);
  const FieldName = new Map<string, string>([
    ["радуга", "RAINBOW"],
    ["егэ", "EXAM"],
    ["переквалификация", "EDUCATION"],
  ]);
  return (
    <div className={styles.container}>
      <Image
        className={styles.fone}
        alt=""
        width={1500}
        height={1500}
        src="/fone.png"
      />
      <div className={styles.content}>
        <div className={styles.left}>
          <h2 className={styles.h2}>Хотите у нас учиться?</h2>
          <p className={styles.text}>Оставьте контакты и мы с вами свяжемся!</p>
        </div>
        <div className={styles.right}>
          <form
            onSubmit={async (e) => {
              try {
                e.preventDefault();
                setError(false);
                setLoading(true);
                const response = await ApplicationService.application(
                  phone,
                  type,
                  id
                );
                setLoading(false);
                setSuccess(true);
                setName("");
                setType("");
                setPhone("");
              } catch (e) {
                console.log(e);
                setError(true);
                setLoading(false);
                setSuccess(false);
              }
            }}
            className={styles.form}
            action=""
          >
            <Select
              onValueChange={(e) => {
                setType(FieldName.get(e) || "");
              }}
            >
              <SelectTrigger className={styles.select}>
                <SelectValue
                  className={styles.placeholder}
                  placeholder="Выберите программу"
                />
              </SelectTrigger>
              <SelectContent style={{ zIndex: "9999" }}>
                <SelectItem value="радуга">радуга</SelectItem>
                <SelectItem value="егэ">егэ</SelectItem>
                <SelectItem value="переквалификация">
                  переквалификация
                </SelectItem>
              </SelectContent>
            </Select>
            {data?.length !== 0 ? (
              <Select onValueChange={(e) => setId(e)}>
                <SelectTrigger className={styles.select}>
                  <SelectValue
                    className={styles.placeholder}
                    placeholder="Выберите направление"
                  />
                </SelectTrigger>
                <SelectContent style={{ zIndex: "9999" }}>
                  {data?.map((el: any, index: number) => (
                    <SelectItem
                      onClick={() => setId(el.id)}
                      key={index}
                      value={el.id}
                    >
                      {el.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ) : (
              <></>
            )}
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.input}
              placeholder="Имя"
            />
            <Input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={styles.input}
              placeholder="Телефон"
            />
            <button disabled={loading} type="submit" className={styles.button}>
              {loading ? "Отправка..." : "Отправить"}
            </button>
            {success ? (
              <p className={styles.success}>Заявка отправлена!</p>
            ) : (
              <></>
            )}
            {error ? (
              <p className={styles.error}>Что-то пошло не так</p>
            ) : (
              <></>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
