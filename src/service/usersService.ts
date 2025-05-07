import $api from "../http";

export default class UsersService {
  static async getUserProfile() {
    return $api.get("/users/profile");
  }
  static async updateUserProfile(
    name: string,
    surname: string,
    patronymic: string
  ) {
    return $api.patch("/users/profile", { name, surname, patronymic });
  }
  static async updateProfilePicture(file: any) {
    const formData = new FormData();
    formData.append("file", file);
    return $api.patch("/users/profile/picture", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
  static async sendReview(review: string, courseId: string) {
    return $api.post("/users/profile/review", { text: review, courseId });
  }
}
