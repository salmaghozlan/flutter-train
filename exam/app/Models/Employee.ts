import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo,HasMany,hasMany, column } from '@ioc:Adonis/Lucid/Orm'
import Customer from './Customer'
import Office from './Office'
export default class Employee extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: "first_name", })
  public firstName: string

  @column({ serializeAs: "last_name", })
  public lastName: string

  @column({ serializeAs: "extension", })
  public extension: string

  @column({ serializeAs: "email", })
  public email: string

  @column({ serializeAs: "office_code", })
  public officeCode: string

  @column({ serializeAs: "reports-to", })
  public reportsTo: number

  @column({ serializeAs: "job_title", })
  public jobTitle: string

  @belongsTo(() => Employee, {
    foreignKey: 'reportsTo',
  })
  public employee: BelongsTo<typeof Employee>

  @belongsTo(() => Office, {
    foreignKey: 'officeCode',
  })
  public office: BelongsTo<typeof Office>


  @hasMany(()=> Customer)
  public customer: HasMany<typeof Customer>

 
}
