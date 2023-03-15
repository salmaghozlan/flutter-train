import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo,HasMany,hasMany,ManyToMany,manyToMany, column } from '@ioc:Adonis/Lucid/Orm'
import Orderdetail from './Orderdetail'
import Productline from './Productline'
import Order from './Order'
export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: "product_dode", })
  public productDode: string

  @column({ serializeAs: "product_name", })
  public productName: string

  @column({ serializeAs: "product_line_id", })
  public productLineId: number

  @column({ serializeAs: "product_scale", })
  public productScale: string

  @column({ serializeAs: "product_vendor", })
  public productVendor: string


  @column({ serializeAs: "product_description", })
  public productDescription: string

  @column({ serializeAs: "quantity_in_stock", })
  public quantityInStock: number

  @column({ serializeAs: "price", })
  public price: number

  @column({ serializeAs: "msrp", })
  public msrp: number

  @belongsTo(() => Productline, {
    foreignKey: 'productLineId',
  })
  public productline: BelongsTo<typeof Productline>  


  @hasMany(()=> Orderdetail)
  public orderdetail: HasMany<typeof Orderdetail>

  @manyToMany(() => Order, {
    pivotTable: 'Orderdetails',
  })
  public order: ManyToMany<typeof Order>

  


  }
