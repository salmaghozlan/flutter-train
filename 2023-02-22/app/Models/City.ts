import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo,HasMany,hasMany, column } from '@ioc:Adonis/Lucid/Orm'
import Country from './Country';
import Address from './Address';


export default class City extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs:"city" })
  public city: string

  @column({ serializeAs:"country_id" })
  public country_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Country, {
    foreignKey: 'country_id',
  })
  public country: BelongsTo<typeof Country>

  @hasMany(()=> Address)
  public address: HasMany<typeof Address>

}
