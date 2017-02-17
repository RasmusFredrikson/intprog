//view5 Object constructor
var View5 = function (container, model) {

	this.createMenu = function() {
		var starter = model.getSelectedDish("starter");
		var mainDish = model.getSelectedDish("main dish");
		var dessert = model.getSelectedDish("dessert");
		if (starter != null) this.starterThumbnail.html('<a href="#" class="thumbnail"><img class="img100" src="images/' + starter.image + ' " alt="' + starter.name + ' "><strong class="blackColor">' + starter.name + '</strong><p class="blackColor">' + model.getDishPrice(starter.id) + '&nbsp; SEK</p></a>');
		if (mainDish != null) this.mainDishThumbnail.html('<a href="#" class="thumbnail"><img class="img100" src="images/' + mainDish.image + ' " alt="' + mainDish.name + ' "><strong class="blackColor">' + mainDish.name + '</strong><p class="blackColor">' + model.getDishPrice(mainDish.id) + '&nbsp; SEK</p></a>');
		if (dessert != null) this.dessertThumbnail.html('<a href="#" class="thumbnail"><img class="img100" src="images/' + dessert.image + ' " alt="' + dessert.name + ' "><strong class="blackColor">' + dessert.name + '</strong><p class="blackColor">' + model.getDishPrice(dessert.id) + '&nbsp; SEK</p></a>');
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
 
