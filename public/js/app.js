
var app = angular.module("myapp", ["firebase"]);
var link1 = "https://devpro-firebase-c5b6a.firebaseio.com/SuKien/";
var ref1 = new Firebase(link1);


function MyController($scope, $firebase) {
		$scope.sukien1s = $firebase(ref1);
	  
	  $scope.addSukien = function() {
	          // if (e.keyCode != 13) return;
	          var nha = $scope.nha;
	          console.log(nha);
	          var link = "https://devpro-firebase-c5b6a.firebaseio.com/SuKien/"+nha;
			  console.log(link)
			  var ref = new Firebase(link);
			  
			  $scope.sukiens = $firebase(ref);
	          $scope.sukiens.$add({diaDiem: $scope.diaDiem, hinhAnh: $scope.hinhAnh, link: $scope.link, time: $scope.time, title: $scope.title});
	          $scope.nha = "";
	          $scope.diaDiem = "";
	          $scope.hinhAnh = "";
	          $scope.link = "";
	          $scope.time = "";
	          $scope.title = "";
	   }
}