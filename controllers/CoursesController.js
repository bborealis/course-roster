courseRoster.controller('CoursesCtrl', function CoursesCtrl($scope, CoursesFactory) {
  $scope.courses = CoursesFactory.courses;
  $scope.CoursesFactory = CoursesFactory;
  // $scope.ctrlCourse = "Math";
  $scope.submit = function() {
    alert("You added a class!")
  };
});
