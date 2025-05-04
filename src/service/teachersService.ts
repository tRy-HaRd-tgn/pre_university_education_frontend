import $api from "../http";
export default class TeachersService {
	static async getTeachers() {
		return $api.get("/teachers");
	}
	static async getTeacher(id: string) {
		return $api.get(`/teachers/${id}`);
	}
}
