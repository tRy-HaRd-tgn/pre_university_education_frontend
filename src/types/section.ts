export type Section = {
  name: string;
  description: string;
  img: string;
  color: string;
  size: "short" | "wide"; // если size может быть только 'short' или 'full'
};
