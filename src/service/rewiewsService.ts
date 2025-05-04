import $api from "../http";
export default class ReviewsService {
	static async getReviews() {
		return $api.get(`/reviews`);
	}
	static async getReview(id: string) {
		return $api.get(`/reviews/${id}`);
	}
}
