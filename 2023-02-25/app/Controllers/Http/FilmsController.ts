import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Film from 'App/Models/Film'
import { schema} from '@ioc:Adonis/Core/Validator'

export default class FilmsController {
    public async getById(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        const film = await Film.query()
        .where('id', ctx.params.id)        
        .preload('actor')
        .preload('categories')
        .preload('inventory')
        
      return film
    }

    public async getAll(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        const page = ctx.request.input('page', 1)
        var languageId = ctx.request.input("language_id");
        const limit = 10
        
        const query =  Film.query()

        if (languageId) {
            query.where("language_id", languageId);
        }
       
        var result = await query.paginate(page, limit);
        return result;

    }
        // public async getAll(ctx: HttpContextContract) {
        //     var object = await ctx.auth.authenticate();
        //     console.log(object);
        //     var result = await Film.query().preload("originalangugeId").preload('LangugeId').preload('actor').preload('categories').preload('inventory');
        //     return result;
        // }
    

    public async create(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        const newSchema = schema.create({
            title: schema.string(),
            description:schema.string(),
            release_year:schema.date(),
            language_id:schema.number(),
            original_language_id:schema.number(),
            rental_duration:schema.number(),
            rental_rate:schema.number(),
            length:schema. number(),
            replacement_cost:schema.number(),
            rating:schema.string(),
            special_features:schema.string(),

         
        });
        const fields = await ctx.request.validate({ schema: newSchema })

        var film = new Film();
        film.title = fields.title;
        film.description = fields.description;
        film.releaseYear = fields.release_year;
        film.languageId = fields.language_id;
        film.rentalRate = fields.rental_rate;
        film.originalLangugeId = fields.original_language_id;
        film.rentalDuration = fields.rental_duration;
        film.rentalRate = fields.rental_rate;
        film.length = fields.length;
        film.replacementCost = fields.replacement_cost;
        film.rating = fields.rating;
        film.specialFeatures = fields.special_features;

        var result = await film.save();
        return result;
    }

    public async update(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        var fields = ctx.request.all();
        var id = fields.id;
        var film = await Film.findOrFail(id);
        film.title = fields.title;
        film.description = fields.description;
        film.releaseYear = fields.release_year;
        film.languageId = fields.language_id;
        film.originalLangugeId = fields.original_language_id;
        film.rentalDuration = fields.rental_duration;
        film.rentalRate = fields.rental_rate;
        film.length = fields.length;
        film.replacementCost = fields.replacement_cost;
        film.rating = fields.rating;
        film.specialFeatures = fields.special_features;

        var result = await film.save();
        return result;
    }

    public async destory(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        var id = ctx.params.id;
        var film = await Film.findOrFail(id);
        await film.delete();
        return { message: "The film has been deleted!" };
    }
}
