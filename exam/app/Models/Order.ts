import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo,HasMany,hasMany,manyToMany ,ManyToMany, column } from '@ioc:Adonis/Lucid/Orm'
import Customer from './Customer'
import Orderdetail from './Orderdetail'
import Product from './Product'
export default class Order extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: "order_date", })
  public orderDate: DateTime

  
  @column({ serializeAs: "required_date", })
  public requiredDate: DateTime

  
  @column({ serializeAs: "shipped_date", })
  public shippedDate: DateTime

  
  @column({ serializeAs: "status", })
  public status: string

  
  @column({ serializeAs: "comments", })
  public comments: string

  
  @column({ serializeAs: "customer_id", })
  public customerId: number

  @belongsTo(() => Customer, {
    foreignKey: 'customerId',
  })
  public customer: BelongsTo<typeof Customer>

  @hasMany(()=> Orderdetail)
  public orderdetail: HasMany<typeof Orderdetail>
  
  @manyToMany(() => Product, {
    pivotTable: 'Orderdetails',
  })
  public product: ManyToMany<typeof Product>
  
  }
