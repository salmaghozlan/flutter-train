import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo,hasMany,HasMany, column } from '@ioc:Adonis/Lucid/Orm'
import Store from './Store';
import Address from './Address';
import Rental from './Rental';
import Payment from './Payment';
export default class Customer extends BaseModel {

  public static table = 'customers'

  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs:"store_id" })
  public storeId: number

  @column({ serializeAs:"first_name" })
  public firstName: string

  @column({ serializeAs:"last_name" })
  public lastName: string
  
  @column({ serializeAs:"email" })
  public email: string

  @column({ serializeAs:"address_id" })
  public addressId: number

  @column({ serializeAs:"active" })
  public active: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Address ,{
    foreignKey: 'addressId',
    
  })
  public address: BelongsTo<typeof Address>
  
  @belongsTo(() => Store, {
    foreignKey: 'storeId',
    
  })
  public store: BelongsTo<typeof Store>

  @hasMany(() => Rental)
  public rental: HasMany<typeof Rental>

  @hasMany(() => Payment)
  public payment: HasMany<typeof Payment>
}
