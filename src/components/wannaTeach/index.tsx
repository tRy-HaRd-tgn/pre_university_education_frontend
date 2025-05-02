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

export const WannaTeach = () => {
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
            onSubmit={(e) => e.preventDefault()}
            className={styles.form}
            action=""
          >
            <Select>
              <SelectTrigger className={styles.select}>
                <SelectValue
                  className={styles.placeholder}
                  placeholder="Выберите программу"
                />
              </SelectTrigger>
              <SelectContent style={{ zIndex: "9999" }}>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
            <Input className={styles.input} placeholder="Имя" />
            <Input className={styles.input} placeholder="Телефон" />
            <button type="submit" className={styles.button}>
              Оставить заявку
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
