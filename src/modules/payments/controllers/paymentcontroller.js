import PaymentService from "../services/PaymentService.js";

export default class PaymentController {

    constructor() {
        this.paymentService = new PaymentService();
    }

    async pay(req, res) {

        try {

            const payment = await this.paymentService.pay(req.body);

            return res.status(201).json({
                message: "Pagamento realizado com sucesso",
                data: payment
            });

        } catch (error) {

            return res.status(500).json({
                error: error.message
            });
        }
    }

    async list(req, res) {

        const payments = await this.paymentService.list();

        return res.json(payments);
    }
}