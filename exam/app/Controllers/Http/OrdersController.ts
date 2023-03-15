import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Order from 'App/Models/Order';
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class OrdersController {

    public async getById(ctx: HttpContextContract) {

        const order = await Order.query()
            .where('id', ctx.params.id)
            .preload('customer').preload('orderdetail')
        return order
    }

    public async getAll(ctx: HttpContextContract) {

        var result = await Order.query().preload("customer").preload("orderdetail");
        return result;

    }
    public async create(ctx: HttpContextContract) {

        const newSchema = schema.create({
            order_date: schema.date(),
            requied_date: schema.date(),
            shipped_date: schema.date(),
            status: schema.string(),
            comments: schema.string(),
            customer_id: schema.number(),

        });

        const fields = await ctx.request.validate({ schema: newSchema })

        var order = new Order();
        order.orderDate = fields.order_date;
        order.requiredDate = fields.requied_date;
        order.shippedDate = fields.shipped_date;
        order.status = fields.status;
        order.comments = fields.comments;
        order.customerId = fields.customer_id;
        var result = await order.save();
        return result;


    }

    public async update(ctx: HttpContextContract) {
        var fields = ctx.request.all();
        var id = fields.id;
        var order = await Order.findOrFail(id);
        order.orderDate = fields.order_date;
        order.requiredDate = fields.requied_date;
        order.shippedDate = fields.shipped_date;
        order.status = fields.status;
        order.comments = fields.comments;
        order.customerId = fields.customer_id;

        var result = await order.save();
        return result;
    }
    public async destroy({ params, response }: HttpContextContract) {
        const order = await Order.findOrFail(params.id)

        if (order.related('customer')) {
            return response.status(400).send({
                message: 'Order cannot be deleted because it is related to Customer'
            })
        }

        if (order.related('orderdetail')) {
            return response.status(400).send({
                message: 'Order cannot be deleted because it is related to an Order details'
            })
        }

        if (order.related('product')) {
            return response.status(400).send({
                message: 'order cannot be deleted because it is related to a product'
            })
        }

        // Delete the customer record
        await order.delete()

        return response.status(200).send({
            message: 'Order deleted successfully'
        })
    }

}
