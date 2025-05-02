import $api from "../http";

export default class UsersService {
  static async getUserProfile() {
    return $api.get("/users/profile");
  }
  static async updateUserProfile() {
    return $api.put("/users/profile", {});
  }
}
