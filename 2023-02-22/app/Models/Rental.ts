import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Inventory from './Inventory'
import Customer from './Customer'
import Staff from './Staff'
import Payment from './Payment'

export default class Rental extends BaseModel {
  public static table = 'rentals'

  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs:"rental_date" })
  public   rentalDate : DateTime

  @column({ serializeAs:"inventory_id" })
  public   inventoryId : number


  @column({ serializeAs:"customer_id" })
  public   customerId : number

  @column({ serializeAs:"return_date" })
  public   returnDate : DateTime

  @column({ serializeAs:"staff_id" })
  public   staffId : number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Staff, {
    foreignKey: 'staffId',
  })
  public staff: BelongsTo<typeof Staff>

  @belongsTo(() => Customer, {
    foreignKey: 'customerId',
  })
  public customer: BelongsTo<typeof Customer>

  @belongsTo(() => Inventory, {
    foreignKey: 'inventoryId',
  })
  public inventory: BelongsTo<typeof Inventory>

  @hasMany(() => Payment)
  public payment: HasMany<typeof Payment>
}
