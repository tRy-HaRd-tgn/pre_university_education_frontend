"use client";
import { LogRegFormProps } from "../utils";
import styles from "./styles.module.scss";
import { Input } from "@/components/ui/input";
import { placeHolders } from "./data";
import { Button } from "@/components/ui/button";
import AuthService from "@/service/authService";
import { z } from "zod";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const RegForm = ({ setState }: LogRegFormProps) => {
  const [success, setSuccess] = useState(false);
  const loginSchema = z
    .object({
      email: z.string().email("Некорректный email"),
      password: z
        .string()
        .min(8, "Пароль должен быть не менее 8 символов")
        .refine(
          (val) =>
            /[A-Z]/.test(val) && /\d/.test(val) && /[!@#$%^&*]/.test(val),
          "Пароль должен содержать заглавную букву, цифру и спецсимвол (!@#$%^&*)"
        ),
      name: z
        .string()
        .min(2, "Имя должно быть не менее 2 символов")
        .refine(
          (val) => val[0] === val[0]?.toUpperCase(),
          "Имя должно начинаться с заглавной буквы"
        ),
      surname: z
        .string()
        .min(2, "Фамилия должна быть не менее 2 символов")
        .refine(
          (val) => val[0] === val[0]?.toUpperCase(),
          "Фамилия должно начинаться с заглавной буквы"
        ),
      patronymic: z
        .string()
        .min(2, "Отчество должно быть не менее 2 символов")
        .refine(
          (val) => val[0] === val[0]?.toUpperCase(),
          "Отчество должно начинаться с заглавной буквы"
        ),
      passwordRepeat: z.string(),
    })
    .refine((data) => data.password === data.passwordRepeat, {
      message: "Пароли не совпадают",
      path: ["passwordRepeat"],
    });
  type LoginFormData = z.infer<typeof loginSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = async (data: LoginFormData) => {
    try {
      setSuccess(false);
      setError("root", { message: "" });
      const response = await AuthService.register(
        data.name,
        data.surname,
        data.patronymic,
        data.email,
        data.password,
        data.passwordRepeat
      );
      setSuccess(true);
    } catch (e) {
      console.log(e);
      setError("root", { message: "Что-то пошло не так" });
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
      <h2 className={styles.heading}>Регистрация</h2>
      {placeHolders.map((item, index) => (
        <div
          style={{
            width: "70%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          key={index}
        >
          <Input
            type={item.type}
            {...register(item.name)}
            key={index}
            className={styles.input}
            placeholder={item.placeHolder}
            onChange={() => {
              setError("root", {});
            }}
          />
          {errors[item.name] && (
            <p className={styles.error}>{errors[item.name]?.message}</p>
          )}
        </div>
      ))}
      {errors.root && <p className={styles.error}>{errors.root?.message}</p>}
      {success && (
        <p className={styles.success}>На почту вам направлено сообщение</p>
      )}
      <Button type="submit" className={styles.btn}>
        {isSubmitting ? "Загрузка..." : "Зарегистрироваться"}
      </Button>
      <p className={styles.text}>
        Уже есть аккаунт?{" "}
        <span onClick={() => setState(true)} className={styles.span}>
          логин!
        </span>
      </p>
    </form>
  );
};
