import AuthService from "../services/AuthService.js";

export default class AuthController {
    constructor() {
        this.authService = new AuthService();
    }

    async login(req, res) {
        try {
            const user = await this.authService.login(req.body);
            return res.json(user);
        } catch (err) {
            return res.status(401).json({ error: err.message });
        }
    }
}