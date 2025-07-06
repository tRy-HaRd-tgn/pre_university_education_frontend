import $api from "../http";
export default class CoursesService {
  static async getCourses(category: string) {
    try {
      const data = await $api.get("/courses", { params: { category } });
      return data;
    } catch (error) {
      console.error("Ошибка при получении курсов:", error);
      return { data: [] };
    }
  }
  static async getCourse(id: string) {
    try {
      return await $api.get(`/courses/${id}`);
    } catch (error) {
      console.error("Ошибка при получении курса:", error);
      throw error;
    }
  }
}
