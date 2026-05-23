const ProductFactory = require("../factories/ProductFactory");

const ProductObserver = require("../../../shared/observers/ProductObserver");

class ProductService {
    constructor(productRepository) {
        this.productRepository = productRepository;

        this.observer = new ProductObserver();
    }

    createProduct(id, name, price) {
        const product = ProductFactory.create(
            id,
            name,
            price
        );

        this.productRepository.add(product);

        this.observer.update(product);

        return product;
    }

    listProducts() {
        return this.productRepository.findAll();
    }
}

module.exports = ProductService;