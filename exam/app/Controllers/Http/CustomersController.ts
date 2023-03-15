import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Customer from 'App/Models/Customer';
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Order from 'App/Models/Order';

export default class CustomersController {
    public async filterCustomer(ctx: HttpContextContract) {
        var query = Customer.query();

        var country = ctx.request.input("country");
        var employeeId = ctx.request.input("employee_id");
        if (country) {
            query.where("country", 'LIKE', `%${country}%`);
        }
        if (employeeId) {
            query.where("employee_id", employeeId);
        }

        var result = await query;
        return result;
    }
    public async getById(ctx: HttpContextContract) {

        const customer = await Customer.query()
            .where('id', ctx.params.id)
            .preload("employee").preload('order').preload('payment')

        return customer
    }

    public async getAll(ctx: HttpContextContract) {

        var result = await Customer.query().preload("employee").preload("order").preload("payment");
        return result;

    }
    public async create(ctx: HttpContextContract) {

        const newSchema = schema.create({
            customer_name: schema.string(),
            contact_first_name: schema.string(),
            contact_last_name: schema.string(),
            phone_number: schema.string(),
            address_line1: schema.string(),
            address_line2: schema.string(),
            city: schema.string(),
            state: schema.string(),
            postal_code: schema.string(),
            country: schema.string(),
            employee_id: schema.number(),
            credit_limit: schema.number(),
        });

        const fields = await ctx.request.validate({ schema: newSchema })

        var customer = new Customer();
        customer.customerName = fields.customer_name;
        customer.contactFirstName = fields.contact_first_name;
        customer.contactLastName = fields.contact_last_name;
        customer.phoneNumber = fields.phone_number;
        customer.addressLine1 = fields.address_line1;
        customer.addressLine2 = fields.address_line2;
        customer.city = fields.city;
        customer.state = fields.state;
        customer.postalCode = fields.postal_code;
        customer.country = fields.country;
        customer.employeeId = fields.employee_id;
        customer.creditLimit = fields.credit_limit;
        var result = await customer.save();
        return result;


    }

    public async update(ctx: HttpContextContract) {
        var fields = ctx.request.all();
        var id = fields.id;
        var customer = await Customer.findOrFail(id);
        customer.customerName = fields.customer_name;
        customer.contactFirstName = fields.contact_first_name;
        customer.contactLastName = fields.contact_last_name;
        customer.phoneNumber = fields.phone_number;
        customer.addressLine1 = fields.address_line1;
        customer.addressLine2 = fields.address_line2;
        customer.city = fields.city;
        customer.state = fields.state;
        customer.postalCode = fields.postal_code;
        customer.country = fields.country;
        customer.employeeId = fields.employee_id;
        customer.creditLimit = fields.credit_limit;

        var result = await customer.save();
        return result;
    }

    public async destroy({ params, response }: HttpContextContract) {
        const customer = await Customer.findOrFail(params.id)

        if (customer.related('order')) {
            return response.status(400).send({
                message: 'Customer cannot be deleted because it is related to an order'
            })
        }

        if (customer.related('employee')) {
            return response.status(400).send({
                message: 'Customer cannot be deleted because it is related to an employee'
            })
        }

        if (customer.related('payment')) {
            return response.status(400).send({
                message: 'Customer cannot be deleted because it is related to a payment'
            })
        }

        // Delete the customer record
        await customer.delete()

        return response.status(200).send({
            message: 'Customer deleted successfully'
        })
    }
}
