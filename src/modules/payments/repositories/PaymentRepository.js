export default class PaymentRepository {

    constructor() {
        this.payments = [];
    }

    save(payment) {
        this.payments.push(payment);
    }

    findAll() {
        return this.payments;
    }
}