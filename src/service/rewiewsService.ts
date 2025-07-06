import $api from "../http";
export default class ReviewsService {
  static async getReviews(category: string) {
    try {
      const data = await $api.get(`/reviews`, { params: { category } });
      return data;
    } catch (error) {
      console.error("Ошибка при получении отзывов:", error);
      return { data: [] };
    }
  }
  static async getReview(id: string) {
    try {
      return await $api.get(`/reviews/${id}`);
    } catch (error) {
      console.error("Ошибка при получении отзыва:", error);
      throw error;
    }
  }
}
