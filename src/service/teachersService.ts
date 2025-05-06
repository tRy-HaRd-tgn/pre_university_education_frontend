import { data } from "@/components/coursePlacements/data";
import $api from "../http";
export default class TeachersService {
  static async getTeachers(category: string) {
    try {
      const data = await $api.get("/teachers", { params: { category } });
      return data;
    } catch (error) {
      return { data: [] };
    }
  }
  static async getTeacher(id: string) {
    return $api.get(`/teachers/${id}`);
  }
}
