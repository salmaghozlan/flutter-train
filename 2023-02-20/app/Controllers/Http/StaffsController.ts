import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Staff from 'App/Models/Staff'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class StaffsController {

    public async getById(ctx: HttpContextContract) {
        const staff = await Staff.query()
        .where('id', ctx.params.id)
        .preload('store')
        .preload('address')
        .preload('payment')
        .preload('rental')
        
      return staff
    }


    public async getAll() {

        var result = await Staff.query().preload('store').preload('address').preload('payment').preload('rental');
        return result;
    }  

    public async create(ctx: HttpContextContract) {
        const newSchema = schema.create({
            first_name: schema.string(),
            last_name: schema.string(),
            address_id: schema.number(),
            email: schema.string(),
            store_id: schema.number(),
            active: schema.boolean(),
            user_name: schema.string(),
            password: schema.string(),
          
        });
        const fields = await ctx.request.validate({ schema: newSchema })

        var staff = new Staff();
        staff.firstName = fields.first_name;
        staff.lastName = fields.last_name;
        staff.addressId = fields.address_id;
        staff.email = fields.email;
        staff.storeId = fields.store_id;
        staff.active = fields.active;
        staff.username = fields.user_name;
        staff.password = fields.password;
      
        var result = await staff.save();
        return result;
    }

    public async update(ctx: HttpContextContract) {
        var fields = ctx.request.all();
        var id = fields.id;
        var staff = await Staff.findOrFail(id);
        staff.firstName = fields.first_name;
        staff.lastName = fields.last_name;
        staff.addressId = fields.address_id;
        staff.email = fields.email;
        staff.storeId = fields.store_id;
        staff.active = fields.active;
        staff.username = fields.username;
        staff.password = fields.password;

       
        var result = await staff.save();
        return result;
    }
    public async destory(ctx: HttpContextContract) {

        var id = ctx.params.id;
        var staff = await Staff.findOrFail(id);
        await staff.delete();
        return { message: "The staff has been deleted!" };
    }
}
