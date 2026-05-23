const express = require("express");

const database = require("./shared/config/Database");

const authMiddleware = require("./shared/middlewares/authMiddleware");

const errorMiddleware = require("./shared/middlewares/errorMiddleware");

const Logger = require("./shared/utils/logger");

const ProductRepository = require("./modules/products/repositories/ProductRepository");

const ProductService = require("./modules/products/services/ProductService");

const ProductController = require("./modules/products/controllers/ProductController");

const app = express();

app.use(express.json());

Logger.info(database.connect());

const productRepository = new ProductRepository();

const productService = new ProductService(productRepository);

const productController = new ProductController(productService);

app.get(
    "/products",
    authMiddleware,
    (req, res) => productController.list(req, res)
);

app.post(
    "/products",
    authMiddleware,
    (req, res) => productController.create(req, res)
);

app.use(errorMiddleware);

app.listen(3000, () => {
    Logger.info("Servidor rodando na porta 3000");
});