//View3 Object constructor
var View3 = function(container,model) {
	
	this.createFullMenu = function(){
		var allDishes = model.getAllDishes("starter");
		var menu = [];
		for (var i = 0; i < allDishes.length; i++) {
			menu += ('<div class="col-sm-4 col-md-2 col-lg-2 col-xl-1">'
					+ '<a href="#" class="thumbnail" id="' + allDishes[i].id + '">'
					+ '<img class="img100" src="images/' + allDishes[i].image + '" alt="' + allDishes[i].name + '">'
					+ '<strong class="blackColor">' + allDishes[i].name + '</strong></a></div>');
		}

		this.fullMenu.html(menu);
	}

	this.fullMenu = container.find("#fullMenu");
	this.createFullMenu();

	this.dishes = $(".thumbnail");

	this.update = function(){
		this.createFullMenu();
	}
}