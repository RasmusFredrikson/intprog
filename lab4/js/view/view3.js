//View3 Object constructor
var View3 = function(container,model) {
	
	this.createFullMenu = function(){
		var menu = [];

		for (var i = 0; i < this.allDishes.results.length; i++) {
			menu += ('<div class="col-sm-4 col-md-2 col-lg-2 col-xl-1">'
				+ '<a href="#" class="thumbnail" id="' + this.allDishes.results[i].id + '">'
				+ '<img class="img100" src="https://spoonacular.com/recipeImages/' + this.allDishes.results[i].image + '" alt="' + this.allDishes.results[i].title + '">'
				+ '<strong class="blackColor">' + this.allDishes.results[i].title + '</strong></a></div>');
		}
		this.fullMenu.html(menu);	
	}

	this.showWaitingWidget = function() {
		this.fullMenu.html("<h2>Searching...</h2>");
	}
	
	this.update = function(){
		this.createFullMenu();
	}

	this.viewContainer = container;

	this.searchButton = container.find("#searchButton");
	this.searchText = container.find("#searchText");
	
	this.selectDishType = container.find("#selectDishType");
	

	this.fullMenu = container.find("#fullMenu");

	model.getAllDishes("starter", "", dishes => {
		this.allDishes = dishes;
		this.createFullMenu();
	})


}