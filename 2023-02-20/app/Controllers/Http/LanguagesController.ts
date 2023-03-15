import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Language from 'App/Models/Language'
import { schema} from '@ioc:Adonis/Core/Validator'

export default class LanguagesController {

    public async getAll() {
        var result = await Language.all();
        return result;    }

    public async getById(ctx: HttpContextContract) {
        var id = ctx.params.id;
        var result = await Language.findOrFail(id);
        return result;
    }


    public async create(ctx: HttpContextContract) {
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
        var fields = ctx.request.all();
        var id = fields.id;
        var language = await Language.findOrFail(id);
        language.name = fields.name;
      
        var result = await language.save();
        return result;
    }

    public async destory(ctx: HttpContextContract) {

        var id = ctx.params.id;
        var languange = await Language.findOrFail(id);
        await languange.delete();
        return { message: "The language has been deleted!" };
    }
}
