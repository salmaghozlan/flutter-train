import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo,HasMany,hasMany, column } from '@ioc:Adonis/Lucid/Orm'
import Order from './Order'
import Employee from './Employee'
import Payment from './Payment'

export default class Customer extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: "customer_name", })
  public customerName: string

  @column({ serializeAs: "contact_first_name", })
  public contactFirstName: string

  @column({ serializeAs: "contact_last_name", })
  public contactLastName: string

  @column({ serializeAs: "phone_number", })
  public phoneNumber: string

  @column({ serializeAs: "address_line1", })
  public addressLine1: string

  @column({ serializeAs: "address_line2", })
  public addressLine2: string

  @column({ serializeAs: "city", })
  public city: string

  @column({ serializeAs: "state", })
  public state: string

  @column({ serializeAs: "postal_code", })
  public postalCode: string

  @column({ serializeAs: "country", })
  public country: string

  @column({ serializeAs: "employee_id", })
  public employeeId: number

  
  @column({ serializeAs: "credit_limit", })
  public creditLimit: number

  @belongsTo(() => Employee, {
    foreignKey: 'employeeId',
  })
  public employee: BelongsTo<typeof Employee>

  @hasMany(()=> Order)
  public order: HasMany<typeof Order>

  @hasMany(()=> Payment)
  public payment: HasMany<typeof Payment>

}
