import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo,HasMany,hasMany, column } from '@ioc:Adonis/Lucid/Orm'
import Customer from './Customer'
export default class Payment extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: "customer_id", })
  public customerId: number

  @column({ serializeAs: "check_number", })
  public checkNumber: string

  @column({ serializeAs: "payment_date", })
  public paymentDate: DateTime

  @column({ serializeAs: "amount", })
  public amount: number

  @belongsTo(() => Customer, {
    foreignKey: 'customerId',
  })
  public customer: BelongsTo<typeof Customer>



  }
