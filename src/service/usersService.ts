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
  static async updateProfilePicture(file: File) {
    const formData = new FormData();
    formData.append("file", file);
    return $api.patch("/users/profile/picture", formData);
  }
  static async sendReview(review: string, category: string) {
    return $api.post("/users/reviews", { text: review, category });
  }
}
