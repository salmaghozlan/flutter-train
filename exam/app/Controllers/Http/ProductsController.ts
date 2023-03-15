import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product';
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class ProductsController {

    public async filterProduct(ctx: HttpContextContract){
        var query = Product.query(); 
    
        var product_line_id = ctx.request.input("product_line_id");

        var quantity_in_stock = ctx.request.input("quantity_in_stock");
        if (product_line_id) {
            query.where("product_line_id",   product_line_id );
        }
        if(quantity_in_stock){
            query.where("quantity_in_stock" , '<', quantity_in_stock);
        }
    
        var result = await query;
        return result;
    }


    public async mostRequested({ response }: HttpContextContract) {
        const products = await Product.query()
          .withCount('orderdetail')
          .orderBy('orderdetail_count', 'desc')

        return response.ok(products)
      }

    public async getById(ctx: HttpContextContract) {
    
        const product = await Product.query()
        .where('id', ctx.params.id)
        .preload("orderdetail").preload("productline")  
      return product
    }

    public async getAll(ctx: HttpContextContract) {

        var result = await Product.query().preload("orderdetail").preload("productline");
        return result;
        
    }

    public async create(ctx: HttpContextContract) {

        const newSchema = schema.create({
            product_dode: schema.string(),
            product_name: schema.string(),
            product_line_id: schema.number(),
            product_scale: schema.string(),
            product_vendor: schema.string(),
            product_description: schema.string(),
            quantity_in_stock: schema.number(),
            price: schema.number(),
            msrp: schema.number(),
        });

        const fields = await ctx.request.validate({ schema: newSchema })

        var product = new Product();
        product.productDode = fields.product_dode;
        product.productName = fields.product_name;
        product.productScale = fields.product_scale;
        product.productVendor = fields.product_vendor;
        product.productDescription = fields.product_description;
        product.quantityInStock = fields.quantity_in_stock;
        product.price = fields.price;
        product.msrp = fields.msrp;
        var result = await product.save();
        return result;
    }

    public async update(ctx: HttpContextContract) {
        var fields = ctx.request.all();
        var id = fields.id;
        var product = await Product.findOrFail(id);
        product.productDode = fields.product_dode;
        product.productName = fields.product_name;
        product.productScale = fields.product_scale;
        product.productVendor = fields.product_vendor;
        product.productDescription = fields.product_description;
        product.quantityInStock = fields.quantity_in_stock;
        product.price = fields.price;
        product.msrp = fields.msrp;
        var result = await product.save();
        return result;
    }
    public async destroy({ params, response }: HttpContextContract) {
        const product = await Product.findOrFail(params.id)

        if (product.related('order')) {
            return response.status(400).send({
                message: 'Product cannot be deleted because it is related to an order'
            })
        }

        if (product.related('orderdetail')) {
            return response.status(400).send({
                message: 'product cannot be deleted because it is related to an orderdetail'
            })
        }

        if (product.related('productline')) {
            return response.status(400).send({
                message: 'Product cannot be deleted because it is related to a product line'
            })
        }

        // Delete the customer record
        await product.delete()

        return response.status(200).send({
            message: 'Product deleted successfully'
        })
    }


}
