import $api from "../http";
export default class ReviewsService {
  static async getReviews(category: string) {
    return $api.get(`/reviews`, { params: { category } });
  }
  static async getReview(id: string) {
    return $api.get(`/reviews/${id}`);
  }
}
