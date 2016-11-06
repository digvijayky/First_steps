 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCBxmtR7cIhe8Jt2hhhNH7gVKFTTOHBghY",
    authDomain: "firststeps-e5ea4.firebaseapp.com",
    databaseURL: "https://firststeps-e5ea4.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "148101311320"
  };
  firebase.initializeApp(config);


var app = angular.module('myApp', ['ngMaterial', 'ngRoute', 'firebase', 'ngAnimate']);



  app.config(function($routeProvider, $mdThemingProvider) {
  $routeProvider
// Home
  .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
// Pages
  .when("/tips", {templateUrl: "partials/tips.html", controller: "PageCtrl"})
  .when("/timeline", {templateUrl: "partials/timeline.html", controller: "PageCtrl"})
  .when("/profile", {templateUrl: "partials/profile.html", controller: "PageCtrl"})
  .when("/events", {templateUrl: "partials/events.html", controller: "PageCtrl"})
  .when("/login", {templateUrl: "partials/login.html", controller: "LoginController"})
/* etc… routes to other pages… */
.otherwise("/", {templateUrl: "partials/main.html", controller: "PageCtrl"});

// else 404
 $mdThemingProvider.theme('default')
    .primaryPalette('brown')
    .accentPalette('orange');

   

});

  app.controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $log, $routeParams, $rootScope, $location) {
    $scope.toggleLeft = buildDelayedToggler('left');
    $scope.toggleRight = buildToggler('right');
    $scope.isOpenRight = function(){
      return $mdSidenav('right').isOpen();
    };
     $rootScope.pagetitle="Home";

   $scope.user={
    name: "tahjy T",
    profpic: "img/profpic.jpg"
   };
   $scope.isAuth=function(){
   

    if ($location.path() != "/login")
 {

      return true;}
    else{

      return false;}
   }
 
   

    /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */
    function debounce(func, wait, context) {
      var timer;

      return function debounced() {
        var context = $scope,
            args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function() {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }

    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildDelayedToggler(navID) {
      return debounce(function() {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }, 200);
    }

    function buildToggler(navID) {
      return function() {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }
    }
  });



  app.controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log, $location, $rootScope) {
    $scope.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });

    };
    $scope.goTimeline=function(){
      $location.path("/timeline");
      $scope.close();
      $rootScope.pagetitle="Timeline";
    };
       $scope.goTips=function(){
      $location.path("/tips");
       $scope.close();
          $rootScope.pagetitle="Tips";
    };
       $scope.goEvent=function(){
      $location.path("/event");
       $scope.close();
          $rootScope.pagetitle="Event";
    };
       $scope.goProfile=function(){
      $location.path("/profile");
       $scope.close();
          $rootScope.pagetitle="Profile";
    };
    $scope.goMilestones=function(){
      $location.path("/milestones");
       $scope.close();
          $rootScope.pagetitle="Milestones";
    };
     $scope.goHome=function(){
      $location.path("/");
       $scope.close();
          $rootScope.pagetitle="Home";
    };
     $scope.goLogin=function(){
      $location.path("/login");
       $scope.close();
          $rootScope.pagetitle="Login";
    };


  });
  app.controller('PageCtrl', function($scope, $firebase, $rootScope, $location ){
$scope.items=[
              { title: "Baby Sounds? ",
                prompt:" Has your baby started making googoo gaga sounds when it sees you?",
                icon:"img/baby.png"},

              { title: "Got abc Vaccine? ",
                prompt:" At 3 months old your baby should get the dadda da vaccine, have you done that yet?",
                icon:"img/needle.png"},

              { title: "Head movements ",
                prompt:" Has your baby started walking yet? with checkbox?",
                icon:"img/baby.png"}
                ];


  });

  app.controller('DemoCtrl', function($scope) {
    $scope.user = {
      title: 'Developer',
      email: 'ipsum@lorem.com',
      firstName: '',
      lastName: '',
      company: 'Google',
      address: '1600 Amphitheatre Pkwy',
      city: 'Mountain View',
      state: 'CA',
      biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
      postalCode: '94043'
    };

    $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
    'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
    'WY').split(' ').map(function(state) {
        return {abbrev: state};
      });
  })
  .config(function($mdThemingProvider) {

    // Configure a dark theme with primary foreground yellow

    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('yellow')
      .dark();

  });

    app.controller('SelectAsyncController', function($timeout, $scope) {
  $scope.user = null;
  $scope.users = null;

  $scope.loadUsers = function() {

    // Use timeout to simulate a 650ms request.
    return $timeout(function() {

      $scope.profiles =  [
        { id: 1, name: 'Me (mommy)' },
        { id: 2, name: 'Baby#1' },
        { id: 3, name: 'Baby#3' },
        { id: 4, name: 'Baby#4' },
        { id: 5, name: 'Baby#5' }
      ];

    }, 650);
  };
});
    app.controller('LoginController', function($location, $scope){
$scope.loginwithgoogle=function(){
      $location.path("/");
      console.log('authentication successful');

    };

    });
     app.controller('DemoCtrl', function() {
      this.topDirections = ['left', 'up'];
      this.bottomDirections = ['down', 'right'];

      this.isOpen = false;

     
      this.selectedMode = 'md-fling';

      this.selectedDirection = 'up';
    });

