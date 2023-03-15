import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, hasMany,
  HasMany ,column,} from '@ioc:Adonis/Lucid/Orm'
import Film from './Film'
import Store from './Store'
import Rental from './Rental'
export default class Inventory extends BaseModel {
  public static table = 'inventories'

  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs:"film_id" })
  public   filmId : number
  
  @column({ serializeAs:"store_id" })
  public   storeId : number



  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Film, {
    foreignKey: 'filmId',
  })
  public film: BelongsTo<typeof Film>

  @belongsTo(() => Store, {
    foreignKey: 'storeId',
  })
  public store: BelongsTo<typeof Store>

  @hasMany(() => Rental)
  public rental: HasMany<typeof Rental>
}
