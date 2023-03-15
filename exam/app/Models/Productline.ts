import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo,HasMany,hasMany, column } from '@ioc:Adonis/Lucid/Orm'
import Product from './Product'

export default class Productline extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column({ serializeAs: "product_line", })
  public productLine: string

  @column({ serializeAs: "text_description", })
  public textDescription: string
  
  @column({ serializeAs: "html_description", })
  public htmlDescription: string

  @column({ serializeAs: "image", })
  public image: string


  @hasMany(()=> Product)
  public productLineId: HasMany<typeof Product>
}
