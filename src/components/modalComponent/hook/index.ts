import { useState, useEffect, useRef } from "react";
export const useLockScroll = () => {
  const [showModal, setShowModal] = useState(false);
  const scrollPosition = useRef(0);

  useEffect(() => {
    if (typeof document === "undefined") return;

    const { body, documentElement } = document;

    if (showModal) {
      scrollPosition.current = window.scrollY;

      body.style.overflow = "hidden";
      body.style.position = "fixed";
      body.style.width = "100%";
      body.style.top = `-${scrollPosition.current}px`;

      const scrollbarWidth = window.innerWidth - documentElement.clientWidth;
      if (scrollbarWidth > 0) {
        body.style.paddingRight = `${scrollbarWidth}px`;
      }
    } else {
      body.style.overflow = "";
      body.style.position = "";
      body.style.width = "";
      body.style.top = "";
      body.style.paddingRight = "";

      window.scrollTo(0, scrollPosition.current);
    }
  }, [showModal]);

  return [showModal, setShowModal] as any;
};
