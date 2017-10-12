var appCuemby = angular.module('cuembyTest', [])

function mainController($scope, $http) {
	$scope.formData = {};

	// Cuando se cargue la página, pide del API todos los TODOs
	$http.post('/api/students')
		.success(function(data) {
            //just active students
			$scope.students = data.students.filter(function(student){
                return (student.active);
            })
            //calculating your mean
            .map( function(student) {
                student.mean = student.grades.reduce((prev, cur) => prev + cur, 0)/3;
                return student;
            })
			console.log($scope.students);
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
}

appCuemby.directive('note', function(){
    return{
        restrict: 'E',
        template:'<div> Hola Mundo <div>'
    }
})
