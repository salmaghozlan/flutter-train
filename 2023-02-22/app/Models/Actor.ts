import { DateTime } from 'luxon'
import { BaseModel,manyToMany, ManyToMany, column } from '@ioc:Adonis/Lucid/Orm'
import Film from './Film'
export default class Actor extends BaseModel {
  public static table = 'actors'

  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: "first_name", })
  public firstName: string;

  @column({ serializeAs: "last_name", })
  public lastName: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
  
  @manyToMany(() => Film, {
    pivotTable: 'film_actors',
  })
  public films: ManyToMany<typeof Film>
}
