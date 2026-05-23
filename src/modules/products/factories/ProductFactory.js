const Product = require("../entities/Product");

class ProductFactory {
    static create(id, name, price) {
        return new Product(id, name, price);
    }
}

module.exports = ProductFactory;