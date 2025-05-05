"use client";
import styles from "./styles.module.scss";
import { PrivateRoute } from "@/components/privateRoute";
import { Header } from "@/components/header";
import { ProfileLogo } from "@/components/profileLogo";
import { Input } from "@/components/ui/input";
import { Footer } from "@/components/footer";
import { data } from "./data";
import { ButtonsWrapper } from "@/components/buttonsWrapper";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [profile, setProfile] = useState({});
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [patronymic, setPatronymic] = useState("");

  const userName = useSelector((state: any) => state.userSlice.name);
  const userSurname = useSelector((state: any) => state.userSlice.surname);
  const userPatronymic = useSelector(
    (state: any) => state.userSlice.patronymic
  );

  useEffect(() => {
    setName(userName);
    setSurname(userSurname);
    setPatronymic(userPatronymic);
  }, [userName, userSurname, userPatronymic]);

  useEffect(() => {
    setProfile({
      name,
      surname,
      patronymic,
    });
  }, [name, patronymic, surname]);

  const handleInputChange = (key: string, value: string) => {
    switch (key) {
      case "name":
        setName(value);
        break;
      case "surname":
        setSurname(value);
        break;
      case "patronymic":
        setPatronymic(value);
        break;
    }
  };

  return (
    <PrivateRoute>
      <Header flag={true} />
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <ProfileLogo img={"/profile.png"} />
        </div>
        <div className={styles.rightSide}>
          {Object.entries(profile).map(([key, value]) => (
            <Input
              value={value as string}
              onChange={(e) => handleInputChange(key, e.target.value)}
              className={styles.input}
              key={key}
              placeholder={key}
            />
          ))}
          <Button className={styles.button}>Cохранить</Button>
          <ButtonsWrapper />
        </div>
      </div>
      <Footer />
    </PrivateRoute>
  );
}
