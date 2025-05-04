import $api from "../http";
export default class CoursesService {
	static async getCourses() {
		return $api.get("/courses");
	}
	static async getCourse(id: string) {
		return $api.get(`/courses/${id}`);
	}
}
