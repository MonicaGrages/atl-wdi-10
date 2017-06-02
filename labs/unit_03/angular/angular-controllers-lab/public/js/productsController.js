angular.module('storeApp', [])
  .controller('ProductsController', ProductsController)
  .controller('ReviewsController', ReviewsController);


function ProductsController(){
  this.products = [
    { name: 'Surface Book', price: 1500.43, dateAdded: '1490929458881' },
    { name: 'MacBook Pro 15"', price: 1800.34, dateAdded: '1490929458881' },
    { name: 'Macbook Pro 13"', price: 1600.28, dateAdded: '1490929458881' },
    { name: 'TI-86', price: 100.43, dateAdded: '1490929458881' },
    { name: 'UE Roll Speaker', price: 90.78, dateAdded: '1490929458881' }
  ];

  this.productToAdd = {name: '', price: '', dateAdded: new Date()};

  this.addProduct = function(){
    if (this.productToAdd) {
      this.products.push(this.productToAdd);
    }
    this.productToAdd = null;
  }

}

function ReviewsController(){
  this.productCategories = [
  'Smartphones',
  'Bluetooth Speakers',
  'Video Games'
  ];
}
