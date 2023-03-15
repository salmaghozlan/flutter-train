/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import Database from '@ioc:Adonis/Lucid/Database'

Route.get('/', async () => {
  return { hello: 'world' }
})


Route.group(() => {
Route.group(() => {
  Route.get("/:id", "ActorsController.getById");
  Route.get("/", "ActorsController.getAll");
  Route.post("/", "ActorsController.create");
  Route.put("/", "ActorsController.update");
  Route.delete("/:id", "ActorsController.destory");
}).prefix("/actors");
}).prefix("api");

Route.group(() => {
  Route.get("/:id", "ActorsController.getById");
  Route.get("/", "ActorsController.getAll");
  Route.post("/", "ActorsController.create");
  Route.put("/", "ActorsController.update");
  Route.delete("/:id", "ActorsController.destory");
}).prefix("/actors"); 


Route.group(() => {
  Route.group(() => {
    Route.get("/:id", "CategoriesController.getById");
    Route.get("/", "CategoriesController.getAll");
    Route.post("/", "CategoriesController.create");
    Route.put("/", "CategoriesController.update");
    Route.delete("/:id", "CategoriesController.destory");
  }).prefix("/categories");
  }).prefix("api");

  Route.group(() => {
    Route.get("/:id", "CategoriesController.getById");
    Route.get("/", "CategoriesController.getAll");
    Route.post("/", "CategoriesController.create");
    Route.put("/", "CategoriesController.update");
    Route.delete("/:id", "CategoriesController.destory");
  }).prefix("/categories"); 


  Route.group(() => {
    Route.group(() => {
      Route.get("/:id", "CountriesController.getById");
      Route.get("/", "CountriesController.getAll");
      Route.post("/", "CountriesController.create");
      Route.put("/", "CountriesController.update");
      Route.delete("/:id", "CountriesController.destory");
    }).prefix("/countries");
    }).prefix("api");

    Route.group(() => {
      Route.get("/:id", "CountriesController.getById");
      Route.get("/", "CountriesController.getAll");
      Route.post("/", "CountriesController.create");
      Route.put("/", "CountriesController.update");
      Route.delete("/:id", "CountriesController.destory");
    }).prefix("/countries");

    
    Route.group(() => {
      Route.group(() => {
        Route.get("/:id", "StoresController.getById");
        Route.get("/", "StoresController.getAll");
        Route.post("/", "StoresController.create");
        Route.put("/", "StoresController.update");
        Route.delete("/:id", "StoresController.destory");
      }).prefix("/stores");
      }).prefix("api");

 
