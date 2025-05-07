import $api from "../http";
export default class ApplicationService {
  static async application(phone: string, category: string, courseId: string) {
    return $api.post("/applications", { phone, category, courseId });
  }
}
