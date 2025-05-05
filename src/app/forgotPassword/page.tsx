"use client";
import styles from "./styles.module.scss";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import PasswordRecoveryService from "@/service/passwordRecoveryService";
import { useState } from "react";
export default function Page() {
  const router = useRouter();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className={styles.container}>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            setError(false);
            setIsLoading(true);
            const response = await PasswordRecoveryService.sendRecoveryEmail(
              email
            );
            setIsLoading(false);
            setSuccess(true);
          } catch (e) {
            setError(true);
            setSuccess(false);
            setIsLoading(false);
          }
        }}
        className={styles.form}
        action=""
      >
        <Button
          onClick={() => router.replace("/")}
          className={styles.backButton}
          type="button"
        >
          Назад
        </Button>
        <h3 className={styles.heading}>Восстановление пароля</h3>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          placeholder="Почта"
          type="email"
        />
        {error && (
          <p className={styles.error}>
            Произошла ошибка, возможно email недействителен
          </p>
        )}
        {success && (
          <p className={styles.success}>Письмо отправлено на почту</p>
        )}
        <Button disabled={isLoading} type="submit">
          {isLoading ? "Отправка..." : "Отправить"}
        </Button>
      </form>
    </div>
  );
}
