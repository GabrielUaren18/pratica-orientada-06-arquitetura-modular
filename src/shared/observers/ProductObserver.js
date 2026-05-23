class ProductObserver {
    update(product) {
        console.log(
            "[OBSERVER]: Novo produto criado -> " +
            product.name
        );
    }
}

module.exports = ProductObserver;