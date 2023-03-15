import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Language from 'App/Models/Language'
import { schema} from '@ioc:Adonis/Core/Validator'

export default class LanguagesController {

    public async getAll(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        const page = ctx.request.input('page', 1)
        var name = ctx.request.input("name");
        const limit = 10
        
        const query =  Language.query()

        if (name) {
            query.where("name", 'LIKE',  `%${name}%`);
        }
       
        var result = await query.paginate(page, limit);
        return result;

    }
    // public async getAll(ctx: HttpContextContract) {

    //     var object = await ctx.auth.authenticate();
    //     console.log(object);
    //     var result = await Language.all();
    //     return result;
    // }
   
    public async getById(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        var id = ctx.params.id;
        var result = await Language.findOrFail(id);
        return result;
    }


    public async create(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        const newSchema = schema.create({
            name: schema.string(),
         
        });
        const fields = await ctx.request.validate({ schema: newSchema })

        var language = new Language();
        language.name = fields.name;
     
        var result = await language.save();
        return result;
    }

    public async update(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        var fields = ctx.request.all();
        var id = fields.id;
        var language = await Language.findOrFail(id);
        language.name = fields.name;
      
        var result = await language.save();
        return result;
    }

    public async destory(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        var id = ctx.params.id;
        var languange = await Language.findOrFail(id);
        await languange.delete();
        return { message: "The language has been deleted!" };
    }
}
