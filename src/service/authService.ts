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
  static async login(email: string, password: string) {
    return $api.post("/auth/login", { email, password });
  }
  static async logout() {
    return $api.post("/auth/logout");
  }
  static async confirmEmail(token: string) {
    return $api.post("/auth/email-confirmation", { token });
  }
}
