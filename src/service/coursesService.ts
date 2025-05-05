import $api from "../http";
export default class CoursesService {
	static async getCourses(category: string) {
		return $api.get("/courses", { params: { category } });
	}
	static async getCourse(id: string) {
		return $api.get(`/courses/${id}`);
	}
}
