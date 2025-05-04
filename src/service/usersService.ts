import $api from "../http";

export default class UsersService {
	static async getUserProfile() {
		return $api.get("/users/profile");
	}
	static async updateUserProfile() {
		return $api.patch("/users/profile", {});
	}
	static async updateProfilePicture(file: File) {
		const formData = new FormData();
		formData.append("file", file);
		return $api.patch("/users/profile/picture", formData);
	}
	static async sendReview(review: string) {
		return $api.post("/users/reviews", { text: review });
	}
}
