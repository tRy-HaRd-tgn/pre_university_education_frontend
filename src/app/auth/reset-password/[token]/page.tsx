"use client";
import styles from "./styles.module.scss";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import PasswordRecoveryService from "@/service/passwordRecoveryService";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
export default function Page() {
  var { token } = useParams();
  const router = useRouter();
  const [success, setSuccess] = useState(false);
  const passwordRecoverySchema = z.object({
    password: z
      .string()
      .min(8, "Пароль должен быть не менее 8 символов")
      .refine(
        (val) => /[A-Z]/.test(val) && /\d/.test(val) && /[!@#$%^&*]/.test(val),
        "Пароль должен содержать заглавную букву, цифру и спецсимвол (!@#$%^&*)"
      ),
  });
  type PasswordRecoveryData = z.infer<typeof passwordRecoverySchema>;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<PasswordRecoveryData>({
    resolver: zodResolver(passwordRecoverySchema),
  });
  const send = async (data: PasswordRecoveryData) => {
    try {
      setSuccess(false);
      const reponse = await PasswordRecoveryService.getRecoveryToken(
        token as string,
        data.password
      );
      setSuccess(true);
    } catch (e) {
      setSuccess(false);
      console.log(e);
      setError("root", { message: "Что-то пошло не так" });
    }
  };
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(send)} className={styles.form} action="">
        <Button
          type="button"
          onClick={() => router.replace("/")}
          className={styles.backButton}
        >
          Вернуться
        </Button>
        <h3 className={styles.heading}>Восстановление пароля</h3>
        <Input
          {...register("password")}
          placeholder="пароль"
          type="text"
          className={styles.input}
          onChange={() => {
            setError("root", {});
          }}
        />
        {errors.password && (
          <p className={styles.error}>{errors.password?.message}</p>
        )}
        {errors.root && <p className={styles.error}>{errors.root?.message}</p>}
        {success && <p className={styles.success}>пароль успешно заменен</p>}
        <Button
          style={{ cursor: "pointer" }}
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "...замена пароля" : "Заменить пароль"}
        </Button>
      </form>
    </div>
  );
}
