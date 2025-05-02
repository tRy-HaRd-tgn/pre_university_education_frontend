"use client";
import styles from "./styles.module.scss";
import { LogForm } from "./logForm";
import { RegForm } from "./regForm";
import { useState } from "react";
export const LogRegForm = () => {
  const [state, setState] = useState(true);
  return (
    <div className={styles.container}>
      {state ? (
        <LogForm setState={setState} />
      ) : (
        <RegForm setState={setState} />
      )}
    </div>
  );
};
