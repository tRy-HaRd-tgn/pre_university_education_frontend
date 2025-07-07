"use client";
import styles from "./styles.module.scss";
import { PrivateRoute } from "@/components/privateRoute";
import { Header } from "@/components/header";
import { ProfileLogo } from "@/components/profileLogo";
import { Input } from "@/components/ui/input";
import { Footer } from "@/components/footer";
import { ButtonsWrapper } from "@/components/buttonsWrapper";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import UsersService from "@/service/usersService";
import { useDispatch } from "react-redux";
import { updateFIO } from "../../../store/slices/userSlice";
import { PopOverWrapper } from "./(popOverWrapper)";

export default function Page() {
  const dispatch = useDispatch();
  const [profile, setProfile] = useState({});
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [patronymic, setPatronymic] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const userName = useSelector((state: any) => state.userSlice.name);
  const userSurname = useSelector((state: any) => state.userSlice.surname);
  const userPatronymic = useSelector(
    (state: any) => state.userSlice.patronymic
  );
  const img = useSelector((state: any) => state.userSlice.picture);

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
          <div className={styles.logoWrapper}>
            <ProfileLogo img={img} />
            <p className={styles.text}>Нажмите на фотографию для изменения</p>
          </div>
          <PopOverWrapper />
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
          <div>
            <Button
              disabled={isLoading}
              onClick={async () => {
                try {
                  setError(false);
                  setIsLoading(true);
                  await UsersService.updateUserProfile(
                    name,
                    surname,
                    patronymic
                  );
                  dispatch(updateFIO({ name, surname, patronymic }));
                  setIsLoading(false);
                } catch (e) {
                  setIsLoading(false);
                  setError(true);
                }
              }}
              className={styles.button}
            >
              {isLoading ? "Загрузка..." : "Сохранить"}
            </Button>
            {error && <p className={styles.error}>Произошла ошибка</p>}
          </div>
          <ButtonsWrapper />
        </div>
      </div>
      <Footer />
    </PrivateRoute>
  );
}
