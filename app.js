var myApp = angular.module('myApp', ['ngMessages','ngRoute']);

console.log('hele');
myApp.controller('mainController', ['$scope', '$log','$timeout',"$http", function($scope,$log,$timeout,$http) {


  $scope.states=['delhi','goa','kerala'];




}]);  


myApp.service("myService",function(){

    var self=this;
    this.name='John Doe';
    this.namelength=function(){

        return self.name.length;
    }

});

myApp.directive("fdField",['myService',function(myService){
    // /console.log('directives');
    function link(scope, element, attr) {
       console.log('element'+element);
       console.log('attr'+attr);
       console.log('scope'+scope);
    //    $scope.$watch('selectedName',function(){
    //     myService.name=$scope.name;//in angular js we have to do manually watch.
    //     console.log(myService.name);
    // });

      }
    return{
        
        restrict:'AEC',//Attribute,Elements,Class and M for comments 
        //templateUrl:'directive/searchDirectives.html',//'<a href="#/second" class="list-group-item"><h4 class="list-group-item-heading">{{ personObject.name }}</h4><p class="list-group-item-text">{{ personObject.address }}</p></a>',
        
        link: link
    }

}]);
