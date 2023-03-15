import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Address from 'App/Models/Address';
import { schema } from '@ioc:Adonis/Core/Validator'


export default class AddressesController {


    

    public async getAll(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        var result = await Address.query().preload("city").preload('store').preload('staff');
        return result;
    }
    

    public async getById(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        const actor = await Address.query()
        .where('id', ctx.params.id)
        .preload('city').preload('staff').preload('store')
  
      return actor
    }
    public async create(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        const newSchema = schema.create({
            address: schema.string(),
            address2: schema.string(),
            district: schema.number(),
            city_id: schema.number(),
            postal_code: schema.number(),
            phone: schema.string(),
            location: schema.string(),
        
        });
        const fields = await ctx.request.validate({ schema: newSchema })

        var address = new Address();
        address.address = fields.address;
        address.address2 = fields.address2;
        address.district = fields.district;
        address.cityId = fields.city_id;
        address.postalCode = fields.postal_code;
        address.phone = fields.phone;
        address.location = fields.location;

        var result = await address.save();
        return result;
    }

    public async update(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        var fields = ctx.request.all();
        var id = fields.id;
        var address = await Address.findOrFail(id);
        address.address = fields.address;
        address.address2 = fields.address2;
        address.district = fields.district;
        address.cityId = fields.city_id;
        address.postalCode = fields.postal_code;
        address.phone = fields.phone;
        address.location = fields.location;

        var result = await address.save();
        return result;
    }
    

    
    public async destory(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        var id = ctx.params.id;
        var address = await Address.findOrFail(id);
        await address.delete();
        return { message: "The address has been deleted!" };
    }
    
}


