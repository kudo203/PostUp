
var app = angular.module('PostUp',[]);
app.controller('MainCtrl',[
    '$scope',
    function($scope){
        $scope.posts = []
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