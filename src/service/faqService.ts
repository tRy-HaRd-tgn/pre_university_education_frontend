import $api from "../http";
export default class FaqService {
	static async getFaq() {
		return $api.get("/faqs");
	}
}
