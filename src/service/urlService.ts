import $api from "../http";
export default class UrlService {
  static async getUrls(key: string) {
    return $api.get(`/url-container/${key}`);
  }
}
