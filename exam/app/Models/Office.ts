import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo,HasMany,hasMany, column } from '@ioc:Adonis/Lucid/Orm'
import Employee from './Employee'

export default class Office extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: "city", })
  public city: string

  @column({ serializeAs: "phone", })
  public phone: string


  @column({ serializeAs: "address_line1", })
  public addressLine1: string

  @column({ serializeAs: "address_line2", })
  public addressLine2: string

  
  @column({ serializeAs: "state", })
  public state: string

  
  @column({ serializeAs: "country", })
  public country: string


  @column({ serializeAs: "postal_code", })
  public postalCode: string

  
  @column({ serializeAs: "territory", })
  public territory: string
  
  @hasMany(()=> Employee)
  public employess: HasMany<typeof Employee>

 
}
