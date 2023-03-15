import { DateTime } from 'luxon'
import { BaseModel,manyToMany, ManyToMany, column } from '@ioc:Adonis/Lucid/Orm'

import Film from './Film'
export default class Category extends BaseModel {
  public static table = 'categories'

  @column({ isPrimary: true })
  public id: number
  
  @column({ serializeAs: "name", })
  public name: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => Film, {
    pivotTable: 'film_categories',
  })
  public films: ManyToMany<typeof Film>

}
