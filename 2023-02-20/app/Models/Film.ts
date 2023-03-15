import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo,hasOne,HasOne,hasMany,HasMany,manyToMany, ManyToMany, column } from '@ioc:Adonis/Lucid/Orm'
import Language from './Language'
import Inventory from './Inventory'
import Actor from './Actor'
import Category from './Category'

export default class Film extends BaseModel {

  public static table = 'films'

  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs:"title" })
  public title: string

  
  @column({ serializeAs:"description" })
  public   description : string

  @column({ serializeAs:"release_year" })
  public   releaseYear : DateTime

  @column({ serializeAs:"language_id" })
  public   languageId : number

  @column({ serializeAs: "original_language_id" })
  public originalLangugeId: number| null = null;

  
  @column({ serializeAs:"rental_duration" })
  public   rentalDuration : number  
  
  
  @column({ serializeAs:"rental_rate" })
  public   rentalRate : number  

  @column({ serializeAs:"length" })
  public   length : number  

  @column({ serializeAs:"replacement_cost" })
  public   replacementCost : number  

  @column({ serializeAs:"rating" })
  public   rating : string
  

  
  @column({ serializeAs:"special_features" })
  public   specialFeatures : string
  

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Language, {
    foreignKey: 'languageId',
  })
  public LangugeId: BelongsTo<typeof Language>

  @belongsTo(() => Language, {
    foreignKey: 'originalLangugeId',
  })
  public originalangugeId: BelongsTo<typeof Language>
 

  @hasMany(() => Inventory)
  public inventory: HasMany<typeof Inventory>

  @manyToMany(() => Actor, {
    pivotTable: 'film_actors',
  })
  public actor: ManyToMany<typeof Actor>

  @manyToMany(() => Category, {
    pivotTable: 'film_categories',
  })
  public categories: ManyToMany<typeof Category>
}



