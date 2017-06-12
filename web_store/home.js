var mainApp = angular.module("mainApp", []);

//book Controller 
mainApp.controller("bookController", function($scope) {
   $scope.book = {
      name: "",
      category: "",
      price:"",
      author: "",
      
      bookDetails: function() {
         var bookObject;
         bookObject = $scope.book;
         return "Book Name: " + bookObject.name + " " + "Book category: " + bookObject.category + 
         " " + "Book price: " + bookObject.price + " " + "Book Author: "+ bookObject.author;
      },

      addBook: function() {
         console.log("addBook Function");
      $scope.div = document.createElement("div");
      $scope.div.id = "book1";
      $scope.div.class = "book_product";
      
      //<div id="book1_name" class="name"> </div>
      $scope.name = document.createElement("div");
      $scope.name.id = "book1_name";
      $scope.name.class= "name";
      $scope.name.data="twilight";
      $scope.div.append($scope.name);
      //<div id="book1_category" class="name"> </div>
      $scope.category = document.createElement("div");
      $scope.category.id = "book1_category";
      $scope.category.class= "category";
      $scope.category.data="Movies";
      $scope.div.append($scope.category);
      //<div id="book1_price" class="price"> </div>
      $scope.price = document.createElement("div");
      $scope.price.id = "book1_price";
      $scope.price.class= "price";
      $scope.price.data=38;
      $scope.div.append($scope.price);
      //<div id="book1_author" class="author"> </div>
      $scope.author = document.createElement("div");
      $scope.author.id = "book1_author";
      $scope.author.class= "author";
      $scope.author.data="mr.book1 author";
      $scope.div.append($scope.author);      
      //adding the most outer Div to document body.
      angular.element(document.getElementsByTagName('body')).append($scope.div);
      },
      deleteBook: function(){
      var book = angular.element(document.querySelector('book1'));
      book.remove();
      },
      getBook: function(){
      var book = angular.element(document.querySelector('book1'));
      }
   };
});
//Album Controller will be here ..