angular
.module('cuembyTest', [])
.controller('mainController', mainController)


function mainController($scope, $http) {
	
	// Get data by server
	$http.post('/api/students')
		.then(function(response) {

            //just active students
			$scope.students = response.data.students.filter(function(student){
                return (student.active);
            })

            //calculating your mean
            .map( function(student) {

                // Number of grades
                const notes = student.grades.length; 

                student.mean = student.grades.reduce(
                    //Calculate sum
                    (prev, cur) => prev + cur
                    , 0
                ) / notes; //Get Average

                //maximum of two decimal places
                student.mean = student.mean.toFixed(2);
                return student;
            })
            console.log($scope.students);
		})
		.catch(function(data) {
			console.log('Error: ' + data);
        });

    //Student Selected
    $scope.selected = null;

    $scope.select = function(idStudent){
        //Get student selected by his Id
        $scope.selected = $scope.students.filter(function(student){
            return ( student.id == idStudent );
        })[0]
        console.log($scope.selected);
    }

    //color of the record according to received data
    $scope.regColor = function(student){
        return "color:"+student.color;
    }

    //color of the letter according to grade
    $scope.class = function(grade){
        if(grade < 3){
            return "grade-red";
        }else if(grade >= 3 && grade<4){
            return "grade-yellow";
        }else{
            return "grade-green";
        }
    }

    
}

