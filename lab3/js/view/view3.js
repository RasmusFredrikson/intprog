//View3 Object constructor
var View3 = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
	// and/or ones that responed to interaction)

	/* Creates the sideMenu with dish names and prices */
	this.createIngredientMenuBody = function(type) {
		var ingredients = model.getSelectedDish(type).ingredients;
		var ingredientsTable = "";
		for (var i = 0; i < ingredients.length; i++) {
			ingredientsTable += ('<div class="row"> <div class="col-sm-3">' + Math.round(ingredients[i].quantity*model.getNumberOfGuests()*100)/100 + " " + ingredients[i].unit 
				+ '</div><div class="col-sm-5">' + ingredients[i].name
				+ '</div><div class="col-sm-2">' + "SEK" 
				+ '</div><div class="col-sm-2">' + ingredients[i].price*model.getNumberOfGuests() + '</div></div>');
		}
		this.ingredientsPanelBody.html(ingredientsTable);

	}

	this.calcMenuPrice = function(type) {
		var sum = '<div class="row">'
		+ '<div class="col-sm-8"><p><a class="btn btn-success btn-sm" href="page2.html" role="button">Confirm Dish</a></p></div>'
		+ '<div class="col-sm-2">SEK</div>'
		+ '<div class="col-sm-2"> ' + model.getDishPrice(model.getSelectedDish(type).id) + '</div>';
		this.ingredientsPanelFooter.html(sum);
	}

	this.createDishDescription = function(type) {
		var description = ('<img class="img100" src="images/' + model.getSelectedDish(type).image + '" alt="' + model.getSelectedDish(type).name + '">'
			+ '<p>' + model.getSelectedDish(type).description + '</p>'
			+ '<p><a class="btn btn-success btn-md" href="page2.html" role="button">back to Select Dish</a></p>');
		
		this.dishDescription.html(description);
	}

	model.addObserver(this);

	var type = "main dish";
	/* Finds the id:s in the html file */
	this.ingredientsPanelHeader = container.find("#ingredientsPanelHeader");
	this.ingredientsPanelBody = container.find("#ingredientsPanelBody");
	this.ingredientsPanelFooter = container.find("#ingredientsPanelFooter");
	this.dishName = container.find("#dishName");
	this.dishDescription = container.find("#dishDescription");

	/* Updates the html file accordingly */
	this.dishName.html(model.getSelectedDish(type).name);
	this.createDishDescription(type);

	this.ingredientsPanelHeader.html("<h4>Ingredients for " + model.getNumberOfGuests() + " people</h4>");
	this.createIngredientMenuBody(type);
	this.calcMenuPrice(type);

	this.update = function () {
		this.ingredientsPanelHeader.html("<h4>Ingredients for " + model.getNumberOfGuests() + " people</h4>");
		this.createIngredientMenuBody(type);
		this.calcMenuPrice(type);
	}
  }

