class ProductRepository {
    constructor() {
        this.products = [];
    }

    add(product) {
        this.products.push(product);
    }

    findAll() {
        return this.products;
    }
}

module.exports = ProductRepository;