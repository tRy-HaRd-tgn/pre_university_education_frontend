import styles from "./styles.module.scss";
import { PrivateRoute } from "@/components/privateRoute";
import { Header } from "@/components/header";
import { ProfileLogo } from "@/components/profileLogo";
import { Input } from "@/components/ui/input";
import { data } from "./data";
import { ButtonsWrapper } from "@/components/buttonsWrapper";

export default function Page() {
  return (
    <PrivateRoute>
      <Header flag={true}></Header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <ProfileLogo img={"/profile.png"} />
        </div>
        <div className={styles.rightSide}>
          {data.map((item, index) => (
            <Input
              className={styles.input}
              key={index}
              placeholder={item.placeholder}
            />
          ))}
          <ButtonsWrapper />
        </div>
      </div>
    </PrivateRoute>
  );
}
