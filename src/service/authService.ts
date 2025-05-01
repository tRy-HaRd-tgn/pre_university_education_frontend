import $api from "../http";
export default class AuthService {
  static async register(
    name: string,
    surname: string,
    patronymic: string,
    email: string,
    password: string,
    passwordRepeat: string
  ) {
    return $api.post("/auth/register", {
      name,
      surname,
      patronymic,
      email,
      password,
      passwordRepeat,
    });
  }
  static async login(email: string, password: string, code: number) {
    return $api.post("/auth/login", { email, password, code });
  }
  static async logout() {
    return $api.post("/auth/logout");
  }
}
