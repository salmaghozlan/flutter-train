import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo,HasMany,hasMany, column } from '@ioc:Adonis/Lucid/Orm'
import Product from './Product'
import Order from './Order'
export default class Orderdetail extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: "order_id", })
  public order_id: number

  @column({ serializeAs: "quantity", })
  public quantity: number

  @column({ serializeAs: "price", })
  public price: number

  @column({ serializeAs: "order_line_number", })
  public orderLineNumber: number

  @column({ serializeAs: "product_id", })
  public productId: number


  @belongsTo(() => Product, {
    foreignKey: 'productId',
  })
  public product: BelongsTo<typeof Product>

  @belongsTo(() => Order, {
    foreignKey: 'orderId',
  })
  public order: BelongsTo<typeof Order>

  

}
