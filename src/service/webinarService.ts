import $api from "../http";

export default class WebinarService {
  static async getWebinars() {
    try {
      const data = await $api.get("/webinars");
      return data;
    } catch (error) {
      console.error("Ошибка при получении вебинаров:", error);
      return { data: [] };
    }
  }
}
