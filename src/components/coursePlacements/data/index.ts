type Section = {
  name: string;
  description: string;
  img: string;
  color: string;
  size: "short" | "wide"; // если size может быть только 'short' или 'full'
};
export const data: Section[] = [
  {
    name: 'Секция "секция радуга "',
    description: "Творческая секция для детей от 5 лет",
    img: "/boy.png",
    size: "short",
    color: "#35C29A",
  },
  {
    name: "ЕГЭ-2024",
    description: "Математика, химия,физика, биология",
    img: "/woman.png",
    size: "short",
    color: "#C23E7E",
  },
  {
    name: "Переквалификация",
    description: "Юриспруденция, психология, экономика",
    img: "/man.png",
    size: "wide",
    color: "#4267DB",
  },
];
