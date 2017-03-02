// Dinner controller that we use whenever we have view that needs to 
// display or modify the dinner menu
dinnerPlannerApp.controller('DinnerCtrl', function ($scope,Dinner) {

	$scope.numberOfGuests = Dinner.getNumberOfGuests();

	var val = Dinner.Dish.get({id:583901});
	var i = 0;

	$scope.getChosenDish = function() {
		i++;
		console.log(i);
		console.log(val);
		console.log("Heeej");

		return val;
	}

	$scope.setNumberOfGuest = function(number){
		Dinner.setNumberOfGuests(number);
	}

	$scope.getNumberOfGuests = function() {
		console.log("getNumberOfGuests");
		return Dinner.getNumberOfGuests();
	}

	/* Calculates the total sum of the menu */
	$scope.calcMenuPrice = function() {
		var sum = (Dinner.getTotalMenuPrice() + Dinner.getPendingPrice());
		return sum;
	}

	$scope.getDishPrice = function(dish) {
		return Dinner.getDishPrice(dish);
	}
	$scope.getPendingPrice = function() {
		return Dinner.getPendingPrice();
	}

	$scope.menu = Dinner.getFullMenu();


  // TODO in Lab 5: Implement the methods to get the dinner menu
  // add dish to menu and get total menu price

});