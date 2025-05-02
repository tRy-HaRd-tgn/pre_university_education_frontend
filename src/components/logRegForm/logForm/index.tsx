import styles from "./styles.module.scss";
import { LogRegFormProps } from "../utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const LogForm = ({ setState }: LogRegFormProps) => {
  return (
    <form className={styles.container}>
      <h2 className={styles.heading}>Логин</h2>
      <Input className={styles.input} placeholder="почта"></Input>
      <Input className={styles.input} placeholder="пароль"></Input>
      <Button className={styles.btn}>Войти</Button>
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
