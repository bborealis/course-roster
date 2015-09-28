courseRoster.controller('CoursesCtrl', function CoursesCtrl($scope, CoursesFactory) {
  $scope.courses = CoursesFactory.courses;
  $scope.CoursesFactory = CoursesFactory;
  $scope.ctrlCourse = "Math";
  $scope.alarm = function() {
    alert("alert alert!")
  };
});
