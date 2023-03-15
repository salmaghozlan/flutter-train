import { DateTime } from 'luxon'
import { BaseModel,hasOne,HasOne,hasMany,HasMany ,column } from '@ioc:Adonis/Lucid/Orm'
import Film from './Film';

export default class Language extends BaseModel {
  public static table = 'languages'

  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs:"name" })
  public   name : string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Film)
  public film: HasMany<typeof Film>

  @hasMany(() => Film, {
    foreignKey: 'originalLanguageId',
  })
  public originalFilm: HasMany<typeof Film>

}
