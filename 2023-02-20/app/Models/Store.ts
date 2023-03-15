import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo,hasMany, HasMany, column } from '@ioc:Adonis/Lucid/Orm'
import Staff from './Staff';
import Address from './Address';
import Customer from './Customer';
import Inventory from './Inventory';

export default class Store extends BaseModel {
  public static table = 'stores'

  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: "manager_staff_id" })
  public managerStaffId: number;

  @column({ serializeAs: "address_id" })
  public addressId: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Staff, {
    foreignKey: 'managerStaffId',
  })
  public managerStaff: BelongsTo<typeof Staff>

  @belongsTo(() => Address, {
    foreignKey: 'addressId',
  })
  public address: BelongsTo<typeof Address>

  @hasMany(() => Customer)
  public customer: HasMany<typeof Customer>

  @hasMany(() => Inventory)
  public inventory: HasMany<typeof Inventory>

  @hasMany(() => Staff)
  public staff: HasMany<typeof Staff>


}

