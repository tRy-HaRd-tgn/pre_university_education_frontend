import { LogRegFormProps } from "../utils";
import styles from "./styles.module.scss";
import { Input } from "@/components/ui/input";
import { placeHolders } from "./data";
import { Button } from "@/components/ui/button";
import AuthService from "@/service/authService";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const RegForm = ({ setState }: LogRegFormProps) => {
  const loginSchema = z.object({
    email: z.string().email("Некорректный email"),
    password: z.string().min(6, "Пароль должен быть не менее 6 символов"),
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
  const onSubmit = async (data: LoginFormData) => {};
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className={styles.container}
    >
      <h2 className={styles.heading}>Регистрация</h2>
      {placeHolders.map((item, index) => (
        <Input key={index} className={styles.input} placeholder={item} />
      ))}
      <Button type="submit" className={styles.btn}>
        Зарегистрироваться
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
