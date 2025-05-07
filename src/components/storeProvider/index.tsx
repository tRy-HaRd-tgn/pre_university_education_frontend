"use client";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import UsersService from "@/service/usersService";
import {
  updateAuth,
  updateUserCourses,
  updateUserInfo,
} from "../../../store/slices/userSlice";
import styles from "./styles.module.scss";
import { Spinner } from "@/components/ui/spinner";

interface PrivateRouteProps {
  children: React.ReactNode;
}
export const StoreProvider = ({ children }: PrivateRouteProps) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  async function getUserProfile() {
    try {
      const response = await UsersService.getUserProfile();
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
      dispatch(updateUserCourses(response.data.courseId));
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
        <div className={styles.container}>
          <Spinner className="size-8" />
        </div>
      ) : (
        children
      )}
    </>
  );
};
