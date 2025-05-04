import styles from "./styles.module.scss";
import { LogRegFormProps } from "../utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthService from "@/service/authService";
import { useDispatch } from "react-redux";
import { updateAuth } from "../../../../store/slices/userSlice";
import { useRouter } from "next/navigation";

export const LogForm = ({ setState }: LogRegFormProps) => {
  const router = useRouter();
  const dispatch = useDispatch();
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
  const onSubmit = async (data: LoginFormData) => {
    try {
      setError("root", { message: "" });
      const response = await AuthService.login(data.email, data.password);
      dispatch(updateAuth(true));
      router.replace("/profile");
      console.log("Успешный вход:", response.data);
    } catch (error) {
      setError("root", { message: "Неправильная почта или пароль" });
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
      <h2 className={styles.heading}>Логин</h2>
      <Input
        {...register("email")}
        type="email"
        className={styles.input}
        placeholder="почта"
        onChange={() => {
          setError("root", { message: "" });
        }}
      />
      {errors.email && <p className={styles.error}>{errors.email.message}</p>}
      <Input
        {...register("password")}
        type="password"
        className={styles.input}
        placeholder="пароль"
        onChange={() => {
          setError("root", { message: "" });
        }}
      />
      {errors.password && (
        <p className={styles.error}>{errors.password.message}</p>
      )}
      {errors.root && <p className={styles.error}>{errors.root.message}</p>}
      <div className={styles.buttons}>
        <Button type="submit" className={styles.btn}>
          {isSubmitting ? "Вход..." : "Войти"}
        </Button>
        <Button type="button" className={styles.btn}>
          Забыли пароль
        </Button>
      </div>
      <p className={styles.text}>
        {" "}
        Ещё нет аккаунта ?{" "}
        <span onClick={() => setState(false)} className={styles.span}>
          Зарегистрироваться!
        </span>
      </p>
    </form>
  );
};
