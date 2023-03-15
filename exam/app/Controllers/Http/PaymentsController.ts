import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Customer from 'App/Models/Customer';
import Payment from 'App/Models/Payment';
import { schema, rules } from '@ioc:Adonis/Core/Validator'
export default class PaymentsController {

    public async getById(ctx: HttpContextContract) {
    
        const payment = await Payment.query()
        .where('id', ctx.params.id)
        .preload("customer")  
      return payment
    }
    
    public async getAll(ctx: HttpContextContract) {

        var result = await Payment.query().preload("customer");
        return result;
        
    }
    public async create(ctx: HttpContextContract) {

        const newSchema = schema.create({
            customer_id: schema.number(),
            check_number: schema.string(),
            payment_date : schema.date(),
            amount : schema.number(),
        });

        const fields = await ctx.request.validate({ schema: newSchema })

        var payment = new Payment();
        payment.customerId = fields.customer_id;
        payment.checkNumber= fields.check_number;
        payment.paymentDate = fields.payment_date;
        payment.amount = fields.amount;

        var result = await payment.save();
        return result;


    }

    public async update(ctx: HttpContextContract) {
        var fields = ctx.request.all();
        var id = fields.id;
        var payment = await Payment.findOrFail(id);
        payment.customerId = fields.customer_id;
        payment.checkNumber= fields.check_number;
        payment.paymentDate = fields.payment_date;
        payment.amount = fields.amount;

       

        var result = await payment.save();
        return result;
    }
    public async destroy({ params, response }: HttpContextContract) {
        const payment = await Payment.findOrFail(params.id)

        if (payment.related('customer')) {
            return response.status(400).send({
                message: 'Payment cannot be deleted because it is related to a customer'
            })
        }

       

        // Delete the customer record
        await payment.delete()

        return response.status(200).send({
            message: 'Payment deleted successfully'
        })
    }

}
