import PaymentRepository from "../repositories/PaymentRepository.js";

export default class PaymentService {

    constructor() {
        this.paymentRepository = new PaymentRepository();
    }

    async pay(data) {

        const payment = {
            id: Date.now(),
            orderId: data.orderId,
            amount: data.amount,
            status: "paid",
            createdAt: new Date()
        };

        this.paymentRepository.save(payment);

        return payment;
    }

    async list() {
        return this.paymentRepository.findAll();
    }
}