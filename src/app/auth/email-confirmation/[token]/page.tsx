"use client";
import { useEffect } from "react";
import styles from "./styles.module.scss";
import { useParams } from "next/navigation";
import AuthService from "@/service/authService";
import { useState } from "react";
export default function Page() {
  var { token } = useParams();
  console.log(token);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    try {
      const responce = AuthService.confirmEmail(token as string);
      setSuccess(true);
    } catch (e) {
      console.log(e);
      setError(true);
    }
  }, []);
  return (
    <div className={styles.container}>
      {success ? (
        <>
          {" "}
          <p className={styles.success}>Регистрация прошла успешно</p>
          <a className={styles.a} href="/">
            Вернуться на главную
          </a>
        </>
      ) : (
        <p className={styles.error}>
          Произошла ошибка, возможно токен недействителен
        </p>
      )}
    </div>
  );
}
