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

    public async getAll() {

        var result = await Inventory.query().preload("film").preload('store').preload('rental');
        return result;
    }

    public async create(ctx: HttpContextContract) {
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
        var fields = ctx.request.all();
        var id = fields.id;
        var inventory = await Inventory.findOrFail(id);
        inventory.filmId = fields.film_id;
        inventory.storeId = fields.store_id;
      
        var result = await inventory.save();
        return result;
    }

    public async destory(ctx: HttpContextContract) {

        var id = ctx.params.id;
        var inventory = await Inventory.findOrFail(id);
        await inventory.delete();
        return { message: "The inventory has been deleted!" };
    }
}
