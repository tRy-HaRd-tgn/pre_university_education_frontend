"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import UsersService from "@/service/usersService";
import { updateAuth, updateUserInfo } from "../../../store/slices/userSlice";
interface PrivateRouteProps {
  children: React.ReactNode;
}
export const StoreProvider = ({ children }: PrivateRouteProps) => {
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
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getUserProfile();
  }, []);
  return <>{children}</>;
};
