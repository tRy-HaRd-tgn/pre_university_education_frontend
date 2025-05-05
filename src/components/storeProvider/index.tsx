"use client";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import UsersService from "@/service/usersService";
import { updateAuth, updateUserInfo } from "../../../store/slices/userSlice";
import styles from "./styles.module.scss";

interface PrivateRouteProps {
  children: React.ReactNode;
}
export const StoreProvider = ({ children }: PrivateRouteProps) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  async function getUserProfile() {
    try {
      const response = await UsersService.getUserProfile();
      console.log(response);
      dispatch(
        updateUserInfo({
          name: response.data.name,
          surname: response.data.surname,
          patronymic: response.data.patronymic,
          picture: response.data.picture,
          email: response.data.email,
        })
      );
      dispatch(updateAuth(true));
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }
  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <>
      {loading ? (
        <html className={styles.container}>
          <body>loading</body>
        </html>
      ) : (
        children
      )}
    </>
  );
};
