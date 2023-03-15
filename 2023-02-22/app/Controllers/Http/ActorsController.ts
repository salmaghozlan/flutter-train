
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Actor from 'App/Models/Actor';
import { schema} from '@ioc:Adonis/Core/Validator'
import { ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import Film from 'App/Models/Film';
export default class ActorsController {


public async getAll(ctx: HttpContextContract) {
    var object = await ctx.auth.authenticate();
    console.log(object);

        const actor = await Actor.query()
        .preload('films', (query: ModelQueryBuilderContract<typeof Film>) => {
            query.select('id', 'title')
        })
        .first()
  
      return actor
    }

    


    public async getById(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);

        const actor = await Actor.query()
        .where('id', ctx.params.id)
        .preload('films', (query: ModelQueryBuilderContract<typeof Film>) => {
            query.select('id', 'title')
        })
        .first()
  
      return actor
    }


    public async create(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);

        const newSchema = schema.create({
            first_name: schema.string(),
            last_name: schema.string(),
        });
        const fields = await ctx.request.validate({ schema: newSchema })

        var actor = new Actor();
        actor.firstName = fields.first_name;
        actor.lastName = fields.last_name;
        var result = await actor.save();
        return result;
    }


    public async update(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();

        console.log(object);

        var fields = ctx.request.all();
        var id = fields.id;
        var actor = await Actor.findOrFail(id);
        actor.firstName = fields.first_name;
        actor.lastName = fields.last_name;
        var result = await actor.save();
        return result;
    }


    public async destory(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);

        var id = ctx.params.id;
        var actor = await Actor.findOrFail(id);
        await actor.delete();
        return { message: "The actor has been deleted!" };
    }

    
}