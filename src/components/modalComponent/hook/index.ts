import { useState, useEffect, useRef } from "react";
export const useLockScroll = () => {
  const [showModal, setShowModal] = useState(false);
  const scrollPosition = useRef(0);

  useEffect(() => {
    if (typeof document === "undefined") return;

    const { body, documentElement } = document;

    if (showModal) {
      // Сохраняем позицию
      scrollPosition.current = window.scrollY;

      // Блокируем скролл
      body.style.overflow = "hidden";
      body.style.position = "fixed";
      body.style.width = "100%";
      body.style.top = `-${scrollPosition.current}px`;

      // Компенсируем скроллбар
      const scrollbarWidth = window.innerWidth - documentElement.clientWidth;
      if (scrollbarWidth > 0) {
        body.style.paddingRight = `${scrollbarWidth}px`;
      }
    } else {
      // Разблокируем
      body.style.overflow = "";
      body.style.position = "";
      body.style.width = "";
      body.style.top = "";
      body.style.paddingRight = "";

      // Восстанавливаем позицию
      window.scrollTo(0, scrollPosition.current);
    }
  }, [showModal]);

  return [showModal, setShowModal] as any;
};
