type FieldName =
  | "name"
  | "surname"
  | "patronymic"
  | "email"
  | "password"
  | "passwordRepeat";
type PlaceHolder = { placeHolder: string; name: FieldName; type: string };
export const placeHolders: PlaceHolder[] = [
  { placeHolder: "имя", name: "name", type: "text" },
  { placeHolder: "фамилия", name: "surname", type: "text" },
  { placeHolder: "отчество", name: "patronymic", type: "text" },
  { placeHolder: "почта", name: "email", type: "email" },
  { placeHolder: "пароль", name: "password", type: "password" },
  { placeHolder: "повторите пароль", name: "passwordRepeat", type: "password" },
];
