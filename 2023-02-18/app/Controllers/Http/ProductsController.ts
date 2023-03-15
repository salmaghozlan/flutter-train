 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProductsController {

     public async index({response , request, params}: HttpContextContract) {
        return{message : "index page"};
      }
      public async byId({response , request, params}: HttpContextContract) {
        return {id:params.id};
      }
      public async create({response , request, params}: HttpContextContract) {
        return {params: request.all()};
      }
      public async update({response , request, params}: HttpContextContract) {
        return {id:params.id};
      }
      public async destroy({response , request, params}: HttpContextContract) {
        return {id:params.id};
      }
      public async const({response , request, params}: HttpContextContract) {
        return {message:"init"};
      }
      public async type({response , request, params}: HttpContextContract) {
        return {type:[]};
      }



}
