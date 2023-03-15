import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Employee from "App/Models/Employee";

export default class EmployeesController {

    public async getById(ctx: HttpContextContract) {
    
        const employee = await Employee.query()
        .where('id', ctx.params.id)
        .preload("customer").preload('employee').preload('office')
  
      return employee
    }
    
    public async getAll(ctx: HttpContextContract) {

        var result = await Employee.query().preload("customer").preload("employee").preload("office");
        return result;
        
    }

    public async create(ctx: HttpContextContract) {

        const newSchema = schema.create({
            first_name: schema.string(),
            last_name: schema.string(),
            extension : schema.string(),
            email : schema.string(),
            office_code :schema.string(),
            reports_to:schema.number(),
            job_title:schema.string(),
        });

        const fields = await ctx.request.validate({ schema: newSchema})
        
        var employee = new Employee();
        employee.firstName = fields.first_name;
        employee.lastName = fields.last_name;
        employee.extension = fields.extension;
        employee.email = fields.email;
        employee.officeCode = fields.office_code;
        employee.reportsTo = fields.reports_to;
        employee.jobTitle = fields.job_title;
          
        var result = await employee.save();
        return result;
    
        
    }

    public async update(ctx: HttpContextContract) {
        var fields = ctx.request.all();
        var id = fields.id;
        var employee = await Employee.findOrFail(id);
        employee.firstName = fields.first_name;
        employee.lastName = fields.last_name;
        employee.extension = fields.extension;
        employee.email = fields.email;
        employee.officeCode = fields.office_code;
        employee.reportsTo = fields.reports_to;
        employee.jobTitle = fields.job_title;  
        var result = await employee.save();
        return result;
    }
    public async destroy({ params, response }: HttpContextContract) {
        const employee = await Employee.findOrFail(params.id)

        if (employee.related('customer')) {
            return response.status(400).send({
                message: 'Employee cannot be deleted because it is related to a customer'
            })
        }

        if (employee.related('employee')) {
            return response.status(400).send({
                message: 'Employee cannot be deleted because it is related to an employee'
            })
        }

        if (employee.related('office')) {
            return response.status(400).send({
                message: 'Employee cannot be deleted because it is related to as office'
            })
        }

        // Delete the customer record
        await employee.delete()

        return response.status(200).send({
            message: 'Employee deleted successfully'
        })
    }

}
