angular.module('website', ['ngAnimate'])
    .controller('MainCtrl', function ($scope) {
        $scope.slides = [
            {image: "http://beijingcream.com/wp-content/uploads/2012/07/Learning-Chinese.jpeg"},
            {image: 'http://dissertationreviews.org/wp-content/uploads/2014/09/DiasporaMigrationStudies_PeidongYang-550x300.jpg'},
            {image: 'http://www.wudaokou.com/images/local/tour2.png'},
            {image: 'http://www.mbs.ac.uk/news/wp-content/uploads/Chinese-dragon-MBA-or-Mandarin.jpg'},
            {image: 'http://58-12.org/blog/wp-content/uploads/2011/09/Migrant-Children-School-Shut-Down.jpg'}
        ];
        $scope.time = "yeshter day";
        $scope.currentIndex = 0;

        $scope.setCurrentSlideIndex = function (index) {
            $scope.currentIndex = index;
        };

        $scope.isCurrentSlideIndex = function (index) {
            return $scope.currentIndex === index;
        };

        $scope.prevSlide = function () {
            $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
        };

        $scope.nextSlide = function () {
            $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
        };
    });
    