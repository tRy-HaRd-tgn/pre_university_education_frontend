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

export default function Page() {
  const [array, setArray] = useState(
    useSelector((state: any) => state.userSlice)
  );
  console.log(array);
  return (
    <PrivateRoute>
      <Header flag={true} />
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <ProfileLogo img={"/profile.png"} />
        </div>
        <div className={styles.rightSide}>
          {data.map((item, index) => (
            <Input
              value={array[item.type]}
              className={styles.input}
              key={index}
              placeholder={item.placeholder}
            />
          ))}
          <ButtonsWrapper />
        </div>
      </div>
      <Footer />
    </PrivateRoute>
  );
}
