
var app = angular.module("myapp", ["firebase"]);
var link1 = "https://devpro-firebase-c5b6a.firebaseio.com/TinTuc/";
var ref1 = new Firebase(link1);


function MyController($scope, $firebase) {
		$scope.tintuc1s = $firebase(ref1);
	  
	  $scope.addTintuc = function() {
	          // if (e.keyCode != 13) return;
	          var vien = $scope.vien;
	          console.log(vien);
	          var link = "https://devpro-firebase-c5b6a.firebaseio.com/TinTuc/"+vien;
			  console.log(link)
			  var ref = new Firebase(link);
			  
			  $scope.tintucs = $firebase(ref);
	          $scope.tintucs.$add({diaDiem: $scope.diaDiem, hinhAnh: $scope.hinhAnh, link: $scope.link, time: $scope.time, title: $scope.title});
	          $scope.vien = "";
	          $scope.diaDiem = "";
	          $scope.hinhAnh = "";
	          $scope.link = "";
	          $scope.time = "";
	          $scope.title = "";
	   }
}