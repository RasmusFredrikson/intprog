//view4 Object constructor
var View4 = function (container, model) {

	this.createMenu = function() {
		var menu = model.getFullMenu();
		var menuTable = "";
		this.starterThumbnail.html('<a href="#" class="thumbnail"><img class="img100" src="images/' + menu[0].image + ' " alt="' + menu[0].image + ' "><strong class="blackColor">' + menu[0].name + '</strong><p class="blackColor">' + model.getDishPrice(menu[0].id) + '&nbsp; SEK</p></a>');
		this.mainDishThumbnail.html('<a href="#" class="thumbnail"><img class="img100" src="images/' + menu[1].image + ' " alt="' + menu[1].image + ' "><strong class="blackColor">' + menu[1].name + '</strong><p class="blackColor">' + model.getDishPrice(menu[1].id) + '&nbsp; SEK</p></a>');
		this.dessertThumbnail.html('<a href="#" class="thumbnail"><img class="img100" src="images/' + menu[2].image + ' " alt="' + menu[2].image + ' "><strong class="blackColor">' + menu[2].name + '</strong><p class="blackColor">' + model.getDishPrice(menu[2].id) + '&nbsp; SEK</p></a>');
	}

	model.addObserver(this);
	
	// Get all the relevant elements of the view (ones that show data and/or ones that responed to interaction)
	this.totalPrice = container.find("#totalPrice");
	this.starterThumbnail = container.find("#starterThumbnail");
	this.mainDishThumbnail = container.find("#mainDishThumbnail");
	this.dessertThumbnail = container.find("#dessertThumbnail");

	this.createMenu();
	this.totalPrice.html("<strong>Total: &nbsp; </strong> " + model.getTotalMenuPrice() + " SEK");

	this.update = function () {
		this.createMenu();
		this.totalPrice.html("<strong>Total: &nbsp; </strong> " + model.getTotalMenuPrice() + " SEK");
	}

	
}
 
