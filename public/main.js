angular
.module('cuembyTest', [])
.controller('mainController', mainController)


function mainController($scope, $http) {
	
	// Cuando se cargue la página, pide del API todos los TODOs
	$http.post('/api/students')
		.then(function(response) {

            //just active students
			$scope.students = response.data.students.filter(function(student){
                return (student.active);
            })
            //calculating your mean
            .map( function(student) {
                student.mean = student.grades.reduce((prev, cur) => prev + cur, 0)/3;
                return student;
            })
            console.log($scope.students);
		})
		.catch(function(data) {
			console.log('Error: ' + data);
        });

    $scope.selected = null;

    $scope.select = function(idStudent){
        $scope.selected = $scope.students.filter(function(student){
            return ( student.id == idStudent );
        })[0]
        console.log($scope.selected);
    }
}

