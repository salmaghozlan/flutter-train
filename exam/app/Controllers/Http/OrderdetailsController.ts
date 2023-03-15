import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Orderdetail from 'App/Models/Orderdetail';

export default class OrderdetailsController {
    public async getById(ctx: HttpContextContract) {
    
        const orderdetail = await Orderdetail.query()
        .where('id', ctx.params.id)
        .preload("order").preload("product")  
      return orderdetail
    }

    public async getAll(ctx: HttpContextContract) {

        var result = await Orderdetail.query().preload("order").preload("product");
        return result;
        
    }
    
    public async create(ctx: HttpContextContract) {

        const newSchema = schema.create({ 
            order_id: schema.number(),
            quantity: schema.number(),
            price:schema.number(),
            order_line_number:schema.number(),
            product_id : schema.number(),

          
        });

        const fields = await ctx.request.validate({ schema: newSchema})
        
        var orderdetail = new Orderdetail();
        orderdetail.order_id = fields.order_id;
        orderdetail.quantity = fields.quantity;
        orderdetail.price = fields.price;
        orderdetail.orderLineNumber = fields.order_line_number;
        orderdetail.productId = fields.product_id;

       
       
          
        var result = await orderdetail.save();
        return result;
    
        
    }

    public async update(ctx: HttpContextContract) {
        var fields = ctx.request.all();
        var id = fields.id;
        var orderdetail = await Orderdetail.findOrFail(id);
        orderdetail.order_id = fields.order_id;
        orderdetail.quantity = fields.quantity;
        orderdetail.price = fields.price;
        orderdetail.orderLineNumber = fields.order_line_number;
        orderdetail.productId = fields.product_id;

        var result = await orderdetail.save();
        return result;
    }

    public async destroy({ params, response }: HttpContextContract) {
        const orderdetail = await Orderdetail.findOrFail(params.id)

        if (orderdetail.related('order')) {
            return response.status(400).send({
                message: 'Order details cannot be deleted because it is related to an order'
            })
        }

        if (orderdetail.related('product')) {
            return response.status(400).send({
                message: 'Order details cannot be deleted because it is related to a product'
            })
        }

       

        // Delete the customer record
        await orderdetail.delete()

        return response.status(200).send({
            message: 'Order details deleted successfully'
        })
    }


}
