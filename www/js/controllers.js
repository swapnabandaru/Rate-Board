angular.module('starter.controllers', [])





.controller('datCtrl', function($scope) {
    $scope.today = new Date();
})

.controller('BranchCtrl', function($scope,$http,$location) {
  $http.get("js/mock-employeeintro.json")
  .then(function(response){

    if ($scope.name=="hamdan") {

  $scope.employeeDetails1 = response.data.items[0].employeeDetails[0];
    $scope.employeeDetails2 = response.data.items[0].employeeDetails[1];
    $scope.employeeDetails3= response.data.items[0].employeeDetails[2];
    $scope.employeeId= response.data.items[0].employeeId;
    $scope.picture=response.data.items[0].profileImage.path;
}

});
      $scope.branch = "Hamdan";
      $scope.showMe = false;
      $scope.hamdanList = function() {
        $scope.branch = "Hamdan"
        $scope.items = { text: ['dash','employeeintro', 'mobileappad', 'news', 'video' , 'socialmedia'] };
        $scope.showMe = !$scope.showMe;

      }


       $scope.showMe1 = false;
      $scope.wahdaList = function() {
        $scope.items1 = { text: ['dash','employeeintro', 'mobileappad', 'news', 'video' , 'socialmedia'] };
        $scope.showMe1 = !$scope.showMe1;
        $scope.showMe = !$scope.showMe;

      }

})


.controller('DashCtrl', function($scope, $http) {

   $http.get("js/mock-newuser.json")
  .then(function(response){

    $scope.closingStatement = response.data.items[0].closingStatement;
    $scope.registrationStep1 = response.data.items[0].registrationStep[0];    
    $scope.registrationStep2 = response.data.items[0].registrationStep[1];
    $scope.registrationStep3 = response.data.items[0].registrationStep[2];
    $scope.caption = response.data.items[0].caption;
    $scope.openingStatement = response.data.items[0].openingStatement;

  });
})

.controller('IRateCtrl', function($scope, $http) {

   $http.get("js/mock-rates.json")
  .then(function(response){

    $scope.ncBuyRate= response.data.items[0].ncBuyRate;
    $scope.ncSellRate = response.data.items[0].ncSellRate;    
    $scope.ntSellRate = response.data.items[0].ntSellRate;
    });
})


.controller('NewsCtrl',function($scope, $http) {
  $http.get("js/mock-news.json")
  .then(function(response){

    $scope.myWelcome = response.data.items[0].newsDescription[0];
    

  });

})

.controller('VideoCtrl',function($scope, $http) {
  $http.get("js/mock-video.json")
  .then(function(response){

    $scope.customerTest = response.data.items[0].customerTestimonials[0];
    

  });

})

.controller('EmpCtrl',function($scope, $http) {
  //document.getElementById('line1') = "blabla";
  $http.get("js/mock-emp.json")
  .then(function(response){
    $scope.caption = response.data.items[0].caption;
    $scope.customerServiceQuote = response.data.items[0].customerServiceQuote;
    $scope.greetingMessage = response.data.items[0].greetingMessage;
    
  });

})
 
 .controller('MobileAppAdCtrl',function($scope, $http) {
  $http.get("js/mock-mobileappad.json")
  .then(function(response){
    $scope.caption = response.data.items[0].caption;
    $scope.openingStatement = response.data.items[0].openingStatement;
    $scope.appFeatures1 = response.data.items[0].appFeatures[0];
    $scope.appFeatures2 = response.data.items[0].appFeatures[1];
    $scope.appFeatures3 = response.data.items[0].appFeatures[2];


    
  });

})

 .controller('SocialMediaCtrl',function($scope, $http) {
  $http.get("js/mock-socialmedia.json")
  .then(function(response){
    $scope.caption = response.data.items[0].caption;
    
    $scope.socialMediaText = response.data.items[0].socialMediaText[0];
    $scope.icon0 = response.data.items[0].socialMediaImage[0].name;
    $scope.icon1 = response.data.items[0].socialMediaImage[1].name;
    $scope.icon2 = response.data.items[0].socialMediaImage[2].name;
   
  });

})


 .controller('RatesCtrl', function($scope, $http) { 

   $http.get("js/mock-rates.json")
   
  .then(function(response){
      
    $scope.ncSellRate13 = response.data.payload[13].ncSellRate;
    $scope.ncBuyRate13 = response.data.payload[13].ncBuyRate;
    $scope.ntSellRate13 = response.data.payload[13].ntSellRate;
    $scope.curCode13 = response.data.payload[13].curCode;
    $scope.ncSellRate45 = response.data.payload[45].ncSellRate;
    $scope.ncBuyRate45 = response.data.payload[45].ncBuyRate;
    $scope.ntSellRate45 = response.data.payload[45].ntSellRate;
    $scope.ncSellRate2 = response.data.payload[2].ncSellRate;
    $scope.ncBuyRate2 = response.data.payload[2].ncBuyRate;
    $scope.ntSellRate2 = response.data.payload[2].ntSellRate;
    $scope.ncSellRate47 = response.data.payload[47].ncSellRate;
    $scope.ncBuyRate47 = response.data.payload[47].ncBuyRate;
    $scope.ntSellRate47 = response.data.payload[47].ntSellRate;
     $scope.ncSellRate30 = response.data.payload[30].ncSellRate;
    $scope.ncBuyRate30 = response.data.payload[30].ncBuyRate;
    $scope.ntSellRate30 = response.data.payload[30].ntSellRate;
     $scope.ncSellRate10 = response.data.payload[10].ncSellRate;
    $scope.ncBuyRate10 = response.data.payload[10].ncBuyRate;
    $scope.ntSellRate10 = response.data.payload[10].ntSellRate;
    $scope.ncSellRate41= response.data.payload[41].ncSellRate;
    $scope.ncBuyRate41 = response.data.payload[41].ncBuyRate;
    $scope.ntSellRate41 = response.data.payload[41].ntSellRate;
     $scope.ncSellRate19= response.data.payload[19].ncSellRate;
    $scope.ncBuyRate19 = response.data.payload[19].ncBuyRate;
    $scope.ntSellRate19 = response.data.payload[19].ntSellRate;
     $scope.ncSellRate38= response.data.payload[38].ncSellRate;
    $scope.ncBuyRate38 = response.data.payload[38].ncBuyRate;
    $scope.ntSellRate38 = response.data.payload[38].ntSellRate;
     $scope.ncSellRate25= response.data.payload[25].ncSellRate;
    $scope.ncBuyRate25 = response.data.payload[25].ncBuyRate;
    $scope.ntSellRate25 = response.data.payload[25].ntSellRate;
     $scope.ncSellRate31= response.data.payload[31].ncSellRate;
    $scope.ncBuyRate31 = response.data.payload[31].ncBuyRate;
    $scope.ntSellRate31 = response.data.payload[31].ntSellRate;
    $scope.ncSellRate7= response.data.payload[7].ncSellRate;
    $scope.ncBuyRate7 = response.data.payload[7].ncBuyRate;
    $scope.ntSellRate7 = response.data.payload[7].ntSellRate;
     $scope.ncSellRate26= response.data.payload[26].ncSellRate;
    $scope.ncBuyRate26 = response.data.payload[26].ncBuyRate;
    $scope.ntSellRate26 = response.data.payload[26].ntSellRate;
    $scope.ncSellRate21= response.data.payload[21].ncSellRate;
    $scope.ncBuyRate21 = response.data.payload[21].ncBuyRate;
    $scope.ntSellRate21 = response.data.payload[21].ntSellRate;
    $scope.ncSellRate1= response.data.payload[1].ncSellRate;
    $scope.ncBuyRate1 = response.data.payload[1].ncBuyRate;
    $scope.ntSellRate1 = response.data.payload[1].ntSellRate;
    $scope.ncSellRate29= response.data.payload[29].ncSellRate;
    $scope.ncBuyRate29 = response.data.payload[29].ncBuyRate;
    $scope.ntSellRate29 = response.data.payload[29].ntSellRate;
    $scope.ncSellRate14= response.data.payload[14].ncSellRate;
    $scope.ncBuyRate14 = response.data.payload[14].ncBuyRate;
    $scope.ntSellRate14 = response.data.payload[14].ntSellRate;
    $scope.ncSellRate32= response.data.payload[32].ncSellRate;
    $scope.ncBuyRate32 = response.data.payload[32].ncBuyRate;
    $scope.ntSellRate32 = response.data.payload[32].ntSellRate;
     $scope.ncSellRate23= response.data.payload[23].ncSellRate;
    $scope.ncBuyRate23 = response.data.payload[23].ncBuyRate;
    $scope.ntSellRate23 = response.data.payload[23].ntSellRate;
    $scope.ncSellRate34= response.data.payload[34].ncSellRate;
    $scope.ncBuyRate34 = response.data.payload[34].ncBuyRate;
    $scope.ntSellRate34 = response.data.payload[34].ntSellRate;

});

})



 .controller('EmployeeCtrl',function($scope, $http, $location) {
  
  console.log(name);
  $http.get("js/mock-employeeintro.json")
  .then(function(response){

    $scope.employeeDetails1 = response.data.items[1].employeeDetails[0];
    $scope.employeeDetails2 = response.data.items[1].employeeDetails[1];
    $scope.employeeDetails3= response.data.items[1].employeeDetails[2];
    $scope.employeeId= response.data.items[1].employeeId;
    $scope.picture=response.data.items[1].profileImage.path;      
  
  });

})
 
 




