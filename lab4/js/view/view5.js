//view5 Object constructor
var View5 = function (container, model) {

	this.starter;
	this.mainDish;
	this.dessert;

	this.createMenu = function() {
		
		this.starter = model.getSelectedDish("starter");
		this.mainDish = model.getSelectedDish("main dish");
		this.dessert = model.getSelectedDish("dessert");

		if (this.starter != null) this.starterThumbnail.html('<a href="#" class="thumbnail"><img class="img100" src="' + this.starter.image + ' " alt="' + this.starter.title + ' "><strong class="blackColor">' + this.starter.title + '</strong><p class="blackColor">' + model.getDishPrice(this.starter) + '&nbsp; SEK</p></a>');
		else this.starterThumbnail.html("No starter added");
		if (this.mainDish != null) this.mainDishThumbnail.html('<a href="#" class="thumbnail"><img class="img100" src="' + this.mainDish.image + ' " alt="' + this.mainDish.title + ' "><strong class="blackColor">' + this.mainDish.title + '</strong><p class="blackColor">' + model.getDishPrice(this.mainDish) + '&nbsp; SEK</p></a>');
		else this.mainDishThumbnail.html("No main dish added");
		if (this.dessert != null) this.dessertThumbnail.html('<a href="#" class="thumbnail"><img class="img100" src="' + this.dessert.image + ' " alt="' + this.dessert.title + ' "><strong class="blackColor">' + this.dessert.title + '</strong><p class="blackColor">' + model.getDishPrice(this.dessert) + '&nbsp; SEK</p></a>');
		else this.dessertThumbnail.html("No dessert added");
	}	

	model.addObserver(this);
	
	// Get all the relevant elements of the view (ones that show data and/or ones that responed to interaction)
	this.totalPrice = container.find("#totalPrice");
	this.starterThumbnail = container.find("#starterThumbnail");
	this.mainDishThumbnail = container.find("#mainDishThumbnail");
	this.dessertThumbnail = container.find("#dessertThumbnail");
	this.printRecipe = container.find("#printRecipe");

	this.createMenu();
	this.totalPrice.html("<strong>Total: &nbsp; </strong> " + model.getTotalMenuPrice() + " SEK");

	this.update = function () {
		this.createMenu();
		this.totalPrice.html("<strong>Total: &nbsp; </strong> " + model.getTotalMenuPrice() + " SEK");
	}
}
 
