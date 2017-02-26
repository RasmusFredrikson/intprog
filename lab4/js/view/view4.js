//View4 Object constructor
var View4 = function (container, model) {

	this.chosenDish;

	// Get all the relevant elements of the view (ones that show data
	// and/or ones that responed to interaction)

	/* Creates the sideMenu with dish names and prices */
	this.createIngredientMenuBody = function() {
		var ingredients = this.chosenDish.extendedIngredients;
		var ingredientsTable = "";
		for (var i = 0; i < ingredients.length; i++) {
			ingredientsTable += ('<div class="row"> <div class="col-sm-3">' + Math.round(ingredients[i].amount*model.getNumberOfGuests()*100)/100 + " " + ingredients[i].unit 
				+ '</div><div class="col-sm-5">' + ingredients[i].name
				+ '</div><div class="col-sm-2">' + "SEK" 
				+ '</div><div class="col-sm-2">' + Math.round(ingredients[i].amount*model.getNumberOfGuests()*100)/100 + '</div></div>');
		}
		this.ingredientsPanelBody.html(ingredientsTable);
	}

	this.calcMenuPrice = function() {
		sum = model.getDishPrice(this.chosenDish);
		this.ingredientsPanelFooter.html(Math.round(sum*100)/100);
	}

	this.createDishDescription = function() {
		var description = '<img class="img100" src="' + this.chosenDish.image + '" alt="' + this.chosenDish.title + '">'
		+ '<p>' + this.chosenDish.instructions + '</p>';
		
		this.dishDescription.html(description);
	}

	model.addObserver(this);

	/* Finds the id:s in the html file */
	this.ingredientsPanelHeader = container.find("#ingredientsPanelHeader");
	this.ingredientsPanelBody = container.find("#ingredientsPanelBody");
	this.ingredientsPanelFooter = container.find("#ingredientsPanelFooter");
	this.dishName = container.find("#dishName");
	this.dishDescription = container.find("#dishDescription");
	this.backToSelectDish = container.find("#backToSelectDish");
	this.addDish = container.find("#addDish");


	this.update = function () {
		if (model.getChosenDish() != null) {
			model.getDish(model.getChosenDish(), dish => {this.chosenDish = dish;
				model.setPendingPrice(model.getDishPrice(dish));
				this.dishName.html(this.chosenDish.title);
				this.createDishDescription();
				this.ingredientsPanelHeader.html("<h4>Ingredients for " + model.getNumberOfGuests() + " people</h4>");
				this.createIngredientMenuBody();
				this.calcMenuPrice();
			});	
		}
	}
}

