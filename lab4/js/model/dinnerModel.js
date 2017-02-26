//DinnerModel Object constructor
var DinnerModel = function() {

	//Lab 2 implement the data structure that will hold number of guest
	// and selected dinner options for dinner menu
	var numberOfGuests = 2;
	var selectedDishes = [];
	var observers = [];
	var chosenDish = 1;
	var pendingPrice = 0;

	/* Call the update method on each of the observers in the array */
	var notifyObservers = function(id) {
		if (id == 2)
			observers[1].update()
		else {
			for (var i = 0; i < observers.length; i++) {
				observers[i].update();
			}
		}
	}


	this.getPendingPrice = function(){
		return pendingPrice;
	}

	this.setPendingPrice = function(num) {
		pendingPrice = num;
		notifyObservers(2);
	}

	this.getChosenDish = function(){
		return chosenDish;
	}

	this.setChosenDish = function(id){
		chosenDish = id;
		notifyObservers();
	}

	/* Add new observer to the array" */
	this.addObserver = function(observer) {
		observers.push(observer);
	}

	this.setNumberOfGuests = function(num) {
		if (num > 99) {
			numberOfGuests = 99;
		} else if (num < 0) {
			numberOfGuests = 0;
		} else {
			numberOfGuests = num;
		}
		notifyObservers();
	}

	// should return 
	this.getNumberOfGuests = function() {
		return numberOfGuests;
	}

	//Returns the dish that is on the menu for selected type
	this.getSelectedDish = function(type) {
		for (var i = 0; i < selectedDishes.length; i++) {
			var dishTypes = selectedDishes[i].dishTypes;
			for (var j = 0; j < dishTypes.length; j++) {
				if(dishTypes[j] == type) {
					return selectedDishes[i];
				}
			}
		}

		return null;
	}

	//Returns all the dishes on the menu.
	this.getFullMenu = function() {
		return selectedDishes.sort();
	}

	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
		var sum = 0;
		for (var i = 0; i < selectedDishes.length; i++) {
			sum += this.getDishPrice(selectedDishes[i]);
		}
		return sum;
	}

	this.getDishPrice = function(dish) {
		var sum = 0;
		dish.extendedIngredients.forEach(function(ingredient) {sum += ingredient.amount});
		var totalPrice = Math.round((sum * this.getNumberOfGuests())*100)/100;
		return totalPrice;
	}

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(id) {
		console.log("running addDishToMenu");
		this.getDish(id, dish => {
			for (var i = 0; i < dish.dishTypes.length; i++) {
				//if (dish.dishTypes[i] == "main dish" || dish.dishTypes[i] == "starter" || dish.dishTypes[i] == "dessert"){
					if (this.getSelectedDish(dish.dishTypes[i]) != null){
						this.removeDishFromMenu(this.getSelectedDish(dish.dishTypes[i]).id);
						break;
					}					
				//}
			}
			console.log(dish);
			selectedDishes.push(dish);
			notifyObservers();
		});		
	}

	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
		this.getDish(id, dish => {
			for (var i = 0; i < selectedDishes.length; i++) {
				if (selectedDishes[i].id == id){
					selectedDishes.splice(i, 1);
					notifyObservers();
					return true;
				}
			}
			return false;
		});
	}

	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
	this.getAllDishes = function (type,filter,cb) {
		$.ajax( {
			url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?query=' + filter + '&type=' + type,
			headers: {
				'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB',
				'Accept': 'application/json'
			},
			success: function(data) {
				console.log(data);
				cb(data);
			},
			error: function(data) {
				console.log("Error!")
				console.log(data);
			}
		});
	}

	//function that returns a dish of specific ID
	this.getDish = function (id, cb) {
		$.ajax( {
			url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/' + id + '/information',
			headers: {
				'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB',
				'Accept': 'application/json'
			},
			success: function(data) {
				cb(data);
			},
			error: function(data) {
				console.log("Error!")
				console.log(data);

			}
		});
	}
}
