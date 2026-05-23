function errorMiddleware(err, req, res, next) {
    console.log("[ERROR]: ", err.message);

    return res.status(500).json({
        error: "Erro interno do servidor"
    });
}

module.exports = errorMiddleware;