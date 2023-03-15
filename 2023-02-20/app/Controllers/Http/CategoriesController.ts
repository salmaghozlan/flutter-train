import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Category from 'App/Models/Category';
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import Film from 'App/Models/Film';
export default class CategoriesController {

    public async getById(ctx: HttpContextContract) {

        const category = await Category.query()
        .where('id', ctx.params.id)
        .preload('films', (query: ModelQueryBuilderContract<typeof Film>) => {
            query.select('id', 'title')
        })
        .first()
  
      return category
    }

    public async getAll() {
        const category = await Category.query()
        .preload('films', (query: ModelQueryBuilderContract<typeof Film>) => {
            query.select('id', 'title')
        })
        .first()
  
      return category
    }

    public async create(ctx: HttpContextContract) {

        const newSchema = schema.create({
            name: schema.string(),
            
        });
        const fields = await ctx.request.validate({ schema: newSchema})

        
        var category = new Category();
        category.name = fields.name;
        var result = await category.save();
        return result;
    }

    public async update(ctx: HttpContextContract) {

        var fields = ctx.request.all();
        var id = fields.id;
        var category = await Category.findOrFail(id);
        category.name = fields.name;
        var result = await category.save();
        return result;
    }

    public async destory(ctx: HttpContextContract) {
        var id = ctx.params.id;
        var category   = await Category.findOrFail(id);
        await category.delete();
        return { message: "The category has been deleted!" };

    }
}