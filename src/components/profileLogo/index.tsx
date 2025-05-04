"use client";
import styles from "./styles.module.scss";
import Image from "next/image";
import { Input } from "../ui/input";
import { useState } from "react";
import { useEffect } from "react";
export const ProfileLogo = ({ img }: any) => {
  const [state, setState] = useState(img);
  const [tempState, setTempState] = useState();
  useEffect(() => {
    if (tempState) setState(URL.createObjectURL(tempState));
  }, [tempState]);
  const handleFileChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setTempState(e.target.files[0]);
    }
  };
  return (
    <div className={styles.container}>
      <Image
        className={styles.img}
        src={state}
        alt="error"
        width={100}
        height={100}
      />
      <Input
        onChange={handleFileChange}
        type="file"
        className={styles.input}
      ></Input>
    </div>
  );
};
