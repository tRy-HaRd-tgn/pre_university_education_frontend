"use client";
import styles from "./styles.module.scss";
import Image from "next/image";
import { Input } from "../ui/input";
import { useState } from "react";
import { useEffect } from "react";
import UsersService from "@/service/usersService";
export const ProfileLogo = ({ img }: any) => {
  const [state, setState] = useState(img);
  const [tempState, setTempState] = useState();
  useEffect(() => {
    if (tempState) setState(URL.createObjectURL(tempState));
  }, [tempState]);

  const handleFileChange = async (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setTempState(e.target.files[0]);
      try {
        const response = await UsersService.updateProfilePicture(
          e.target.files[0]
        );
      } catch (e) {
        console.log(e);
      }
    }
  };
  return (
    <div className={styles.container}>
      <Image
        className={styles.img}
        src={state !== "" ? state : "/photo.avif"}
        alt="error"
        width={500}
        height={500}
      />
      <Input onChange={handleFileChange} type="file" className={styles.input} />
    </div>
  );
};
