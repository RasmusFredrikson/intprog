//View4 Object constructor
var View4 = function (container, model) {

	// Get all the relevant elements of the view (ones that show data
	// and/or ones that responed to interaction)

	/* Creates the sideMenu with dish names and prices */
	this.createIngredientMenuBody = function() {
		var ingredients = model.getDish(model.getChosenDish()).ingredients;
		var ingredientsTable = "";
		for (var i = 0; i < ingredients.length; i++) {
			ingredientsTable += ('<div class="row"> <div class="col-sm-3">' + Math.round(ingredients[i].quantity*model.getNumberOfGuests()*100)/100 + " " + ingredients[i].unit 
				+ '</div><div class="col-sm-5">' + ingredients[i].name
				+ '</div><div class="col-sm-2">' + "SEK" 
				+ '</div><div class="col-sm-2">' + ingredients[i].price*model.getNumberOfGuests() + '</div></div>');
		}
		this.ingredientsPanelBody.html(ingredientsTable);

	}

	this.calcMenuPrice = function() {
		var sum = model.getDishPrice(model.getDish(model.getChosenDish()).id);
		this.ingredientsPanelFooter.html(sum);
	}

	this.createDishDescription = function() {
		var description = '<img class="img100" src="images/' + model.getDish(model.getChosenDish()).image + '" alt="' + model.getDish(model.getChosenDish()).name + '">'
			+ '<p>' + model.getDish(model.getChosenDish()).description + '</p>';
		
		this.dishDescription.html(description);
	}

	model.addObserver(this);

	/* Finds the id:s in the html file */
	this.ingredientsPanelHeader = container.find("#ingredientsPanelHeader");
	this.ingredientsPanelBody = container.find("#ingredientsPanelBody");
	this.ingredientsPanelFooter = container.find("#ingredientsPanelFooter");
	this.dishName = container.find("#dishName");
	this.dishDescription = container.find("#dishDescription");

	/* Updates the html file accordingly */
	this.dishName.html(model.getDish(model.getChosenDish()).name);
	this.createDishDescription();


	this.ingredientsPanelHeader.html("<h4>Ingredients for " + model.getNumberOfGuests() + " people</h4>");
	this.createIngredientMenuBody();
	this.calcMenuPrice();

	this.backToSelectDish = container.find("#backToSelectDish");
	this.addDish = container.find("#addDish");


	this.update = function () {
		this.dishName.html(model.getDish(model.getChosenDish()).name);
		this.createDishDescription();
		this.ingredientsPanelHeader.html("<h4>Ingredients for " + model.getNumberOfGuests() + " people</h4>");
		this.createIngredientMenuBody();
		this.calcMenuPrice();
	}
  }

