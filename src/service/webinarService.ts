import $api from "../http";

export default class WebinarService {
  static async getWebinars() {
    return $api.get("/webinars");
  }
}
