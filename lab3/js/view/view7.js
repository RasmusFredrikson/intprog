//View7 Object constructor
var View7 = function(container,model) {
	
	this.createMenuRecipe = function(){
		var fullMenu = model.getFullMenu();
		var recipes = [];
		for (var i = 0; i < fullMenu.length; i++) {
			recipes += '<div class="row underline">'
			+ '<div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 ">'
			+ '<h3 class="">' + fullMenu[i].name + '</h3>'
			+ '<div class="row">'
			+ '<div class="col-sm-6 col-md-6 col-lg-6 col-xl-6">'
			+ '<img class="img100" src="images/' + fullMenu[i].image + '" alt=' + fullMenu[i].name + '>'
		    + '<p>This is the bestest dish. The hugest dish....</p></div>'
			+ '<div class="col-sm-6 col-md-6 col-lg-6 col-xl-6">'
			+ '<h4>Preparation</h4>'
			+ '<p>' + fullMenu[i].description + '</p></div></div></div></div>'
		}
		this.menuRecipe.html(recipes);
	}

	this.menuRecipe = container.find("#menuRecipe");
	this.createMenuRecipe();

	this.update = function(){
		this.createMenuRecipe();
	}
}