function authMiddleware(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({
            error: "Token nao informado"
        });
    }

    if (token !== "fake-token") {
        return res.status(403).json({
            error: "Token invalido"
        });
    }

    next();
}

module.exports = authMiddleware;