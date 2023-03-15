import { DateTime } from 'luxon'

import { BaseModel, BelongsTo, belongsTo, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import City from './City';
import Store from './Store';
import Staff from './Staff';
export default class Address extends BaseModel {
  public static table = 'address'

  @column({ isPrimary: true })
  public id: number


  @column({ serializeAs:"address" })
  public address: string

  @column({ serializeAs:"address2" })
  public address2: string

  @column({ serializeAs:"district" })
  public district: number

  @column({ serializeAs:"city_id" })
  public cityId: number

  @column({ serializeAs:"postal_code" })
  public postalCode: number

  @column({ serializeAs:"phone" })
  public phone: string

  @column({ serializeAs:"location" })
  public location: string

 

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => City, {
    foreignKey: 'cityId',
  })
  public city: BelongsTo<typeof City>

  @hasMany(()=> Store)
  public store: HasMany<typeof Store>

  @hasMany(()=> Staff)
  public staff: HasMany<typeof Staff>


}
