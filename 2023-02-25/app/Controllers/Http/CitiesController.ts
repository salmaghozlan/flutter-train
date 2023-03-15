import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import City from 'App/Models/City';
import { schema, } from '@ioc:Adonis/Core/Validator'

export default class CitiesController {

    public async getById(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        const city = await City.query()
        .where('id', ctx.params.id)
        .preload('country')
        .preload('address')
        
      return city
    }


    public async getAll(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        const page = ctx.request.input('page', 1)
        var countryId = ctx.request.input("country_id");
        const limit = 10
        
        const query =  City.query()

        if (countryId) {
            query.where("country_id", countryId);
        }
       
        var result = await query.paginate(page, limit);
        return result;

    }
    // public async getAll(ctx: HttpContextContract) {
    //     var object = await ctx.auth.authenticate();
    //     console.log(object);

    //     var result = await City.query().preload("country").preload('address');
    //     return result;
    // }
    

    public async create(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);

        const newSchema = schema.create({
            city: schema.string(),
            country_id: schema.number(),
            
        });
        const fields = await ctx.request.validate({ schema: newSchema})

        var city  = new city();
        city.city = fields.city;
        city.countryId = fields.country_id;

        var result = await city.save();
        return result;

    }

    public async update(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);

        var fields = ctx.request.all();
        var id = fields.id;
        var city  = await city.findOrFail(id);
        city.city = fields.city;
        city.countryId = fields.country_id;

        var result = await city.save();
        return result;
    }

    public async destory(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);

        var id = ctx.params.id;
        var city= await City.findOrFail(id);
        await city.delete();
        return { message: "The city has been deleted!" };

    }
}
