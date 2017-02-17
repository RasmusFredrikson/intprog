//View2 Object constructor
var View2 = function (container, model) {
/*Creates the sideMenu with dish names and prices */
	this.createMenu = function() {
		var menu = model.getFullMenu();
		var menuTable = "";
		for (var i = 0; i < menu.length; i++) {
			menuTable += ('<div class="row"><div class="col-sm-8">' 
				+ menu[i].name + '</div><div class="col-sm-2 text-right">' 
				+ model.getDishPrice(menu[i].id) + '&nbsp;' + '</div><div class="col-sm-2 text-right">'
				+ '<a class="btn btn-success btn-xs deleteButton" href="#" role="button" id="' + menu[i].type + '">X</a>  </div></div>');
		}
		menuTable += ('<div class="row"><div class="col-sm-8">' 
				+ "Pending" + '</div><div class="col-sm-4 text-right" id="pendingPrice">' 
				+ model.getPendingPrice() + '&nbsp;</div></div>');
		console.log(menuTable);
	this.menuPanelBody.html(menuTable);
	}

	/* Calculates the total sum of  */
	this.calcMenuPrice = function() {
		var sum = '<strong>' + (model.getTotalMenuPrice() + model.getPendingPrice()) + '&nbsp; SEK </strong>';
		this.menuPanelFooter.html(sum);
	}

	model.addObserver(this);

	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)

  	this.viewContainer = container;
	
	
	this.numberOfGuests = container.find("#numberOfGuests");
	this.menuPanelBody = container.find("#menuPanelBody");
	this.menuPanelFooter = container.find("#menuPanelFooter");
	this.confirmDinner = container.find("#confirmDinner");



	//this.deleteStarter = container.find("#deletestarter");
	//this.deleteMainDish = container.find("#deletemain dish");
	//this.deleteDessert = container.find("#deletedessert");


	this.numberOfGuests.val(model.getNumberOfGuests());
	this.createMenu();
	this.calcMenuPrice();

	this.update = function () {
		this.numberOfGuests.val(model.getNumberOfGuests());
		this.createMenu();
		this.calcMenuPrice();
	}
}
 
