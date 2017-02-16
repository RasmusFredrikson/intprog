//View3 Object constructor
var View3 = function(container,model) {
	
	this.createFullMenu = function(){
		var menu = [];
		for (var i = 0; i < this.allDishes.length; i++) {
			menu += ('<div class="col-sm-4 col-md-2 col-lg-2 col-xl-1">'
				+ '<a href="#" class="thumbnail" id="' + this.allDishes[i].id + '">'
				+ '<img class="img100" src="images/' + this.allDishes[i].image + '" alt="' + this.allDishes[i].name + '">'
				+ '<strong class="blackColor">' + this.allDishes[i].name + '</strong></a></div>');
		}

		console.log(menu);

		this.fullMenu.html(menu);
	}

	this.searchButton = container.find("#searchButton");
	this.searchText = container.find("#searchText");
	
	this.selectDishType = container.find("#selectDishType");
	this.allDishes = model.getAllDishes("main dish");
	


	this.fullMenu = container.find("#fullMenu");
	this.createFullMenu();

	this.dishes = $(".thumbnail");

	this.update = function(){
		this.createFullMenu();
	}
}