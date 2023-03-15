import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Office from "App/Models/Office";

export default class OfficesController {

    public async getById(ctx: HttpContextContract) {
    
        const office = await Office.query()
        .where('id', ctx.params.id)
        .preload("employess")  
      return office
    }
    
    public async getAll(ctx: HttpContextContract) {

        var result = await Office.query().preload("employess");
        return result;
        
    }

    public async create(ctx: HttpContextContract) {

        const newSchema = schema.create({
            city: schema.string(),
            phone: schema.string(),
            address_line1: schema.string(),
            address_line2: schema.string(),
            state: schema.string(),
            country: schema.string(),
            postal_code: schema.string(),
            territory: schema.string(),
        });

        const fields = await ctx.request.validate({ schema: newSchema})
        
        var office = new Office();
        office.city = fields.city;
        office.phone = fields.phone;
        office.addressLine1 = fields.address_line1;
        office.addressLine2 = fields.address_line2;
        office.state = fields.state;
        office.country = fields.country;
        office.postalCode = fields.postal_code;
        office.territory = fields.territory;
       
          
        var result = await office.save();
        return result;
    
        
    }

    public async update(ctx: HttpContextContract) {
        var fields = ctx.request.all();
        var id = fields.id;
        var office = await Office.findOrFail(id);
        office.city = fields.city;
        office.phone = fields.phone;
        office.addressLine1 = fields.address_line1;
        office.addressLine2 = fields.address_line2;
        office.state = fields.state;
        office.country = fields.country;
        office.postalCode = fields.postal_code;
        office.territory = fields.territory;
      
        var result = await office.save();
        return result;
    }
    public async destroy({ params, response }: HttpContextContract) {
        const office = await Office.findOrFail(params.id)

        if (office.related('employess')) {
            return response.status(400).send({
                message: 'office cannot be deleted because it is related to an employee'
            })
        }

    
        // Delete the customer record
        await office.delete()

        return response.status(200).send({
            message: 'Office deleted successfully'
        })
    }


}
