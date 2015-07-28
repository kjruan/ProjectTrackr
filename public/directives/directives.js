angular.module('MyApp')
	.directive('createOrder', function() {
		return {
			restrict: 'E', 
			templateUrl: '../views/create-order.html'
		}
	})
	.directive('currentOrders', function() {
		return {
			restrict: 'E',
			templateUrl: '../views/current-orders.html'
		}
	})