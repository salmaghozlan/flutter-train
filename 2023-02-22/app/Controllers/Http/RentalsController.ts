import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Rental from 'App/Models/Rental'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class RentalsController {

    public async getById(ctx: HttpContextContract) {

        var object = await ctx.auth.authenticate();
        console.log(object);        
        const rental = await Rental.query()
        .where('id', ctx.params.id)
        .preload('staff')
        .preload('customer')
        .preload('inventory')
        .preload('payment')
        
      return rental
    }


    public async getAll(ctx: HttpContextContract) {

        var object = await ctx.auth.authenticate();
        console.log(object);
        var result = await Rental.query().preload("staff").preload('customer').preload('inventory').preload('payment');
        return result;
    }

    public async create(ctx: HttpContextContract) {
        
        var object = await ctx.auth.authenticate();
        console.log(object);
        const newSchema = schema.create({
            rental_date: schema.date(),
            inventory_id: schema.number(),
            customer_id: schema.number(),
            return_date: schema.date(),
            staff_id: schema.number(),
          
        });
        const fields = await ctx.request.validate({ schema: newSchema })

        var rental = new Rental();
        rental.rentalDate = fields.rental_date;
        rental.inventoryId = fields.inventory_id;
        rental.customerId = fields.customer_id;
        rental.returnDate = fields.return_date;
        rental.staffId = fields.staff_id;

        var result = await rental.save();
        return result;
    }

    public async update(ctx: HttpContextContract) {
        
        var object = await ctx.auth.authenticate();
        console.log(object);
        var fields = ctx.request.all();
        var id = fields.id;
        var rental = await Rental.findOrFail(id);
        rental.rentalDate = fields.rental_date;
        rental.inventoryId = fields.inventory_id;
        rental.customerId = fields.customer_id;
        rental.returnDate = fields.return_date;
        rental.staffId = fields.staff_id;

        var result = await rental.save();
        return result;
    }

    public async destory(ctx: HttpContextContract) {

        var object = await ctx.auth.authenticate();
        console.log(object);
        var id = ctx.params.id;
        var rental = await Rental.findOrFail(id);
        await rental.delete();
        return { message: "The rental has been deleted!" };
    }
}
