  angular.module('myApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS 
        .state('home', {
            url: '/home',
            templateUrl: 'app.html'
        })
        
        // sign_in page
        .state('home.sign_in', {
            url: '/sign_in',
            templateUrl: 'sign_in.html',
            
        })
        
        // sign_up page
        .state('home.sign_up', {
            url: '/sign_up',
            templateUrl: 'sign_up.html'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS 
        .state('my_companies', {
            url: '/my_companies',
            templateUrl: "my_companies.html"
            }
        });
});
