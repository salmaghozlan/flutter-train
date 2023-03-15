import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Productline from 'App/Models/Productline';
import { schema, rules } from '@ioc:Adonis/Core/Validator'
export default class ProductlinesController {
    
    public async getById(ctx: HttpContextContract) {
    
        const productline = await Productline.query()
        .where('id', ctx.params.id)
        .preload('productLineId')
  
      return productline
    }

    public async getAll(ctx: HttpContextContract) {

        var result = await Productline.query().preload("productLineId");
        return result;
        
    }
    public async create(ctx: HttpContextContract) {

        const newSchema = schema.create({
            product_line: schema.string(),
            text_description: schema.string(),
            html_description: schema.string(),
            image: schema.string(),

        });

        const fields = await ctx.request.validate({ schema: newSchema })

        var productline = new Productline();
        productline.productLine = fields.product_line;
        productline.textDescription = fields.text_description;
        productline.htmlDescription = fields.html_description;
        productline.image = fields.image;
        var result = await productline.save();
        return result;
    }

    public async update(ctx: HttpContextContract) {
        var fields = ctx.request.all();
        var id = fields.id;
        var productline = await Productline.findOrFail(id);
        productline.productLine = fields.product_line;
        productline.textDescription = fields.text_description;
        productline.htmlDescription = fields.html_description;
        productline.image = fields.image;
        var result = await productline.save();
        return result;
    }

    public async destroy({ params, response }: HttpContextContract) {
        const productLine = await Productline.findOrFail(params.id)

        if (productLine.related('productLineId')) {
            return response.status(400).send({
                message: 'product line cannot be deleted because it is related to a product line id'
            })
        }

        

        // Delete the customer record
        await productLine.delete()

        return response.status(200).send({
            message: 'Product line deleted successfully'
        })
    }

}
