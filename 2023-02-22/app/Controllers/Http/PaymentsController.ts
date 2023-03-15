import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Payment from 'App/Models/Payment'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class PaymentsController {

    public async getById(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        const payment = await Payment.query()
        .where('id', ctx.params.id)
        .preload('rental')
        .preload('staff')
        .preload('customer')
    
      return payment
    }
    public async getAll(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        var result = await Payment.query().preload("rental").preload('staff').preload('customer');
        return result;
    }

    public async create(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        const newSchema = schema.create({
            customer_id: schema.number(),
            staff_id: schema.number(),
            rental_id: schema.number(), 
            amount: schema.number(),
            payment_date: schema.date(),
         
        });
        const fields = await ctx.request.validate({ schema: newSchema })

        var payment = new Payment();
        payment.customerId = fields.customer_id;
        payment.staffId = fields.staff_id;
        payment.rentalId = fields.rental_id;
        payment.amount = fields.amount;
        payment.paymentDate = fields.payment_date;

     
        var result = await payment.save();
        return result;
    }

    public async update(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        var fields = ctx.request.all();
        var id = fields.id;
        var payment = await Payment.findOrFail(id);
        payment.customerId = fields.customer_id;
        payment.staffId = fields.staff_id;
        payment.rentalId = fields.rental_id;
        payment.amount = fields.amount;
        payment.paymentDate = fields.payment_date;

        var result = await payment.save();
        return result;
    }

    public async destory(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        var id = ctx.params.id;
        var payment = await Payment.findOrFail(id);
        await payment.delete();
        return { message: "The payment has been deleted!" };
    }
}
