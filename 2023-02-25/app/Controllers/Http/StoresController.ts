import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Store from 'App/Models/Store';
export default class StoresController {

    public async getById(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        
        const store = await Store.query()
        .where('id', ctx.params.id)
        .preload('managerStaff')
        .preload('address')
        .preload('customer')
        .preload('inventory')
        .preload('staff')
      return store
  
    }

    public async getAll(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        const page = ctx.request.input('page', 1)
        var addressId = ctx.request.input("address_id");
        const limit = 10
        
        const query =  Store.query()

        if (addressId) {
            query.where("address_id", addressId);
        }
       
        var result = await query.paginate(page, limit);
        return result;

    }
    // public async getAll(ctx: HttpContextContract) {
    //     var object = await ctx.auth.authenticate();
    //     console.log(object);
        
    //     var result = await Store.query().preload("managerStaff").preload('address').preload('customer').preload('inventory').preload('staff');
    //     return result;
    // }


    public async create(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        
        var fields = ctx.request.all();
        const result = await Database
            .table('stores')
            .insert({
                manager_staff_id: fields.manager_staff_id,
                address_id : fields.address_id,
            });
        var id = result[0];

        var newObject = await Database.from("stores").select("*").where("id", id)
        return newObject[0];
    }

    public async update(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        
        var fields = ctx.request.all();
        await Database
            .from('stores')
            .where('id', fields.id)
            .update({ manager_staff_id: fields.manager_staff_id });
        return { message: "The store has been updated!" };
    }

    public async destory(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        
        var id = ctx.params.id;

        await Database
            .from('stores')
            .where('id', id)
            .delete();
        return { message: "The store has been deleted!" };

    }
}