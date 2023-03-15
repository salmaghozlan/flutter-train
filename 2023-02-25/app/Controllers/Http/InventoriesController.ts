import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Inventory from 'App/Models/Inventory'
import { schema} from '@ioc:Adonis/Core/Validator'

export default class InventoriesController {
    public async getById(ctx: HttpContextContract) {
        const inventory = await Inventory.query()
        .where('id', ctx.params.id)
        .preload('film')
        .preload('store')
        .preload('rental')
      return inventory
    }


    public async getAll(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        const page = ctx.request.input('page', 1)
        var storeId = ctx.request.input("store_id");
        const limit = 10
        
        const query =  Inventory.query()

        if (storeId) {
            query.where("store_id", storeId);
        }
       
        var result = await query.paginate(page, limit);
        return result;

    }

    // public async getAll(ctx: HttpContextContract) {
    //     var object = await ctx.auth.authenticate();
    //     console.log(object);
    //     var result = await Inventory.query().preload("film").preload('store').preload('rental');
    //     return result;
    // }

    public async create(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        const newSchema = schema.create({
            film_id: schema.number(),
            store_id: schema.number(),
         
        });
        const fields = await ctx.request.validate({ schema: newSchema })

        var inventory = new Inventory();
        inventory.filmId = fields.film_id;
        inventory.storeId = fields.store_id;

        var result = await inventory.save();
        return result;
    }

    public async update(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        var fields = ctx.request.all();
        var id = fields.id;
        var inventory = await Inventory.findOrFail(id);
        inventory.filmId = fields.film_id;
        inventory.storeId = fields.store_id;
      
        var result = await inventory.save();
        return result;
    }

    public async destory(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        var id = ctx.params.id;
        var inventory = await Inventory.findOrFail(id);
        await inventory.delete();
        return { message: "The inventory has been deleted!" };
    }
}
