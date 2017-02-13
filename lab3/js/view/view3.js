//View3 Object constructor
var View3 = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	
	/*Creates the sideMenu with dish names and prices */
	this.createIngredientMenu = function() {
		var menu = model.getFullMenu();
		var menuTable = "";
		for (var i = 0; i < menu.length; i++) {
			menuTable += ('<div class="row"><div class="col-sm-8">' 
				+ menu[i].name + '</div><div class="col-sm-4 text-right">' 
				+ model.getDishPrice(menu[i].id) + '</div></div>');
		}
	this.menuPanel.html(menuTable);

	}


	model.addObserver(this);

	this.numberOfGuests = container.find("#numberOfGuests");
	this.numberOfGuests.val(model.getNumberOfGuests());

	this.menuPanel = container.find("#menuPanel");
	this.createIngredientMenu();

	this.update = function () {
		this.numberOfGuests.val(model.getNumberOfGuests());
		this.createMenu();
	}
}
 
