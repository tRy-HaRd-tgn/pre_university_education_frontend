import $api from "../http";
export default class PasswordRecoveryService {
	static async sendRecoveryEmail(email: string) {
		return $api.post("/auth/password-recovery/reset", { email });
	}
	static async getRecoveryToken(token: string, password: string) {
		return $api.post(`/auth/password-recovery/new/${token}`, { password });
	}
}
