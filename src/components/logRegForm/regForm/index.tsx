import { LogRegFormProps } from "../utils";
import styles from "./styles.module.scss";
import { Input } from "@/components/ui/input";
import { placeHolders } from "./data";
import { Button } from "@/components/ui/button";

export const RegForm = ({ setState }: LogRegFormProps) => {
  return (
    <form className={styles.container}>
      <h2 className={styles.heading}>Регистрация</h2>
      {placeHolders.map((item) => (
        <Input className={styles.input} placeholder={item} />
      ))}
      <Button className={styles.btn}>Зарегистрироваться</Button>
      <p className={styles.text}>
        Уже есть аккаунт?{" "}
        <span onClick={() => setState(true)} className={styles.span}>
          логин!
        </span>
      </p>
    </form>
  );
};
