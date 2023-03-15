import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Customer from 'App/Models/Customer';
import { schema } from '@ioc:Adonis/Core/Validator'

export default class CustomersController {
    public async getById(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        const customer = await Customer.query()
        .where('id', ctx.params.id)
        .preload('address')
        .preload('store')
        .preload('payment')
        .preload('rental')
        
      return customer
    }


    public async getAll(ctx: HttpContextContract) {

        var object = await ctx.auth.authenticate();
        console.log(object);
        var result = await Customer.query().preload("address").preload('store').preload('payment').preload('rental');
        return result;
    }

    public async create(ctx: HttpContextContract) {

        var object = await ctx.auth.authenticate();
        console.log(object);
       
        const newSchema = schema.create({
            store_id: schema.number(),
            first_name: schema.string(),
            last_name: schema.string(),
            email: schema.string(),
            address_id: schema.number(),
            active: schema.boolean(),
         
        });
        const fields = await ctx.request.validate({ schema: newSchema })

        var customer = new Customer();
        customer.storeId = fields.store_id;
        customer.firstName = fields.first_name;
        customer.lastName = fields.last_name;
        customer.email = fields.email;
        customer.addressId = fields.address_id;
        customer.active = fields.active;

        var result = await customer.save();
        return result;
    }

    public async update(ctx: HttpContextContract) {
        
        var object = await ctx.auth.authenticate();
        console.log(object);
        var fields = ctx.request.all();
        var id = fields.id;
        var customer = await Customer.findOrFail(id);
        customer.storeId = fields.store_id;
        customer.firstName = fields.first_name;
        customer.lastName = fields.last_name;
        customer.email = fields.email;
        customer.addressId= fields.address_id;
        customer.active = fields.active;

        var result = await customer.save();
        return result;
    }


    public async destory(ctx: HttpContextContract) {

        var object = await ctx.auth.authenticate();
        console.log(object);
        var id = ctx.params.id;
        var customer = await Customer.findOrFail(id);
        await customer.delete();
        return { message: "The customer has been deleted!" };
    }

}
