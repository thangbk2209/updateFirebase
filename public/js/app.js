var app = angular.module("myapp", ["firebase"]);
var link1 = "https://devpro-firebase-c5b6a.firebaseio.com/SuKien/";
var ref1 = new Firebase(link1);
// function removeItem(ref) {
//   // Now we can get back to that item we just pushed via .child().
//   ref.remove(function(error) {
//     alert(error ? "Uh oh!" : "Success!");
//   });
// }
function MyController($scope, $firebase) {
	 $scope.sukien1s = $firebase(ref1); 
	  $scope.chonNha =  function(){
	  		  var nha = $scope.nha;
	          console.log(nha);
	          var link = "https://devpro-firebase-c5b6a.firebaseio.com/SuKien/"+nha;
			  console.log(link)
			  var ref = new Firebase(link);
			  // console.log(ref);
			  $scope.sukiens = $firebase(ref);
			  // console.log($firebase(ref).key);
			  console.log($scope.sukiens);
	  }
	  $scope.xoa = function(){
	  	 		var nha = $scope.nha;
	          console.log(nha);
	          var link = "https://devpro-firebase-c5b6a.firebaseio.com/SuKien/"+nha ;
			  console.log(link)
			  var ref = new Firebase(link);
	  		  ref.remove(function(error) {
			    alert(error ? "Uh oh!" : "Success!");
			  });
	  }
	  $scope.addSukien = function() {
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