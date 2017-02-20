//View3 Object constructor
var View3 = function(container,model) {
	
	this.createFullMenu = function(){
		var menu = [];
		//this.allDishes.results.forEach()
		//console.log(this.allDishes);
		//console.log(this.allDishes.results);
		//console.log(this.allDishes.results.length);

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

	this.viewContainer = container;

	this.searchButton = container.find("#searchButton");
	this.searchText = container.find("#searchText");
	
	this.selectDishType = container.find("#selectDishType");
	

	this.fullMenu = container.find("#fullMenu");
	//this.createFullMenu();

	this.update = function(){
		this.createFullMenu();
	}

	/*model.getAllDishes("starter", "pizza", function(dishes){
		console.log("dishes");
		console.log(dishes);
		this.allDishes = dishes;
		console.log(this.allDishes);
	}.then(this.update));
	*/
}