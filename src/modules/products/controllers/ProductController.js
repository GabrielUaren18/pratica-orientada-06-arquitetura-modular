class ProductController {
    constructor(productService) {
        this.productService = productService;
    }

    create(req, res) {
        const { id, name, price } = req.body;

        const product = this.productService.createProduct(
            id,
            name,
            price
        );

        return res.json(product);
    }

    list(req, res) {
        const products = this.productService.listProducts();

        return res.json(products);
    }
}

module.exports = ProductController;