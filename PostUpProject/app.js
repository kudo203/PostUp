
var app = angular.module('PostUp',['ui.router']);
app.config([
    '$stateProvider',
    '$urlRouterProvider',
    function ($stateProvider,$urlRouterProvider) {
        $stateProvider
            .state('home',{
                url:'/home',
                templateUrl: '/home.html',
                controller: 'MainCtrl'
                });
        $urlRouterProvider.otherwise('home');
    }]);


app.factory('posts',[function () {
    var set = {
        posts:[]
    };
    return set;
}])
app.controller('MainCtrl',[
    '$scope',
    'posts',
    function($scope,posts){
        $scope.posts = posts.posts;
        $scope.addPost = function () {
            if($scope.title==''){return;}
            $scope.posts.push({
                title:$scope.title,
                link:$scope.link,
                upvotes: 0})
            $scope.title = '';
            $scope.link = '';
        };

        $scope.incrementUpvote = function (post) {
            post.upvotes +=1;
        }
    }
]);