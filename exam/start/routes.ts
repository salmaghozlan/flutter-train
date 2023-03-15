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

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(() => {

  Route.group(() => {
    Route.get("/filterCustomer", "CustomersController.filterCustomer");
    
    Route.get("/:id", "CustomersController.getById");
    Route.get("/", "CustomersController.getAll");
    Route.post("/", "CustomersController.create");
    Route.put("/", "CustomersController.update");
    Route.delete("/:id", "CustomersController.destroy");
  }).prefix("/customers");

  Route.group(() => {
    Route.get("/:id", "EmployeesController.getById");
    Route.get("/", "EmployeesController.getAll");
    Route.post("/", "EmployeesController.create");
    Route.put("/", "EmployeesController.update");
    Route.delete("/:id", "EmployeesController.destroy");
  }).prefix("/employes");

  Route.group(() => {
    Route.get("/:id", "OfficesController.getById");
    Route.get("/", "OfficesController.getAll");
    Route.post("/", "OfficesController.create");
    Route.put("/", "OfficesController.update");
    Route.delete("/:id", "OfficesController.destroy");
  }).prefix("/offices");

  Route.group(() => {
    Route.get("/:id", "OrdersController.getById");
    Route.get("/", "OrdersController.getAll");
    Route.post("/", "OrdersController.create");
    Route.put("/", "OrdersController.update");
    Route.delete("/:id", "OrdersController.destroy");
  }).prefix("/orders");

  Route.group(() => {
    Route.get("/:id", "OrderdetailsController.getById");
    Route.get("/", "OrderdetailsController.getAll");
    Route.post("/", "OrderdetailsController.create");
    Route.put("/", "OrderdetailsController.update");
    Route.delete("/:id", "OrderdetailsController.destroy");
  }).prefix("/orderdetails");

  Route.group(() => {
    Route.get("/:id", "PaymentsController.getById");
    Route.get("/", "PaymentsController.getAll");
    Route.post("/", "PaymentsController.create");
    Route.put("/", "PaymentsController.update");
    Route.delete("/:id", "PaymentsController.destroy");
  }).prefix("/payments");

  Route.group(() => {
    Route.get("/filterProduct", "ProductsController.filterProduct");

    Route.get('/most', 'ProductsController.mostRequested')
    Route.get("/:id", "ProductsController.getById");
    Route.get("/", "ProductsController.getAll");
    Route.post("/", "ProductsController.create");
    Route.put("/", "ProductsController.update");
    Route.delete("/:id", "ProductsController.destroy");
  }).prefix("/products");

  
  Route.group(() => {
    Route.get("/:id", "ProductlinesController.getById");
    Route.get("/", "ProductlinesController.getAll");
    Route.post("/", "ProductlinesController.create");
    Route.put("/", "ProductlinesController.update");
    Route.delete("/:id", "ProductlinesController.destroy");
  }).prefix("/productlines");


  

}).prefix('api');