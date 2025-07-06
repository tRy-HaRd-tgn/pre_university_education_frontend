import $api from "../http";
export default class TeachersService {
  static async getTeachers(category: string) {
    try {
      const data = await $api.get("/teachers", { params: { category } });
      return data;
    } catch (error) {
      console.error("Ошибка при получении преподавателей:", error);
      return { data: [] };
    }
  }
  static async getTeacher(id: string) {
    try {
      return await $api.get(`/teachers/${id}`);
    } catch (error) {
      console.error("Ошибка при получении преподавателя:", error);
      throw error;
    }
  }
}
