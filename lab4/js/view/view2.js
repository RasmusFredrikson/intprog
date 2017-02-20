//View2 Object constructor
var View2 = function (container, model) {
/*Creates the sideMenu with dish names and prices */
	this.createMenu = function() {
		var menu = model.getFullMenu();
		var menuTable = "";
		for (var i = 0; i < menu.length; i++) {
			menuTable += ('<div class="row"><div class="col-sm-1">' 
				+ '<a class="btn btn-danger btn-xs deleteButton" href="#" role="button" id="' + menu[i].type + '">X</a>'
				 + '</div><div class="col-sm-5">' + menu[i].name + '</div><div class="col-sm-4">' 
				+ model.getDishPrice(menu[i].id) + '&nbsp;SEK </div></div>');
		}
		menuTable += ('<div class="row"><div class="col-sm-7 topline">' 
				+ "Pending" + '</div><div class="col-sm-5 topline" id="pendingPrice">' 
				+ model.getPendingPrice() + '&nbsp;SEK</div></div>');
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

	this.numberOfGuests.val(model.getNumberOfGuests());
	this.createMenu();
	this.calcMenuPrice();

	this.update = function () {
		this.numberOfGuests.val(model.getNumberOfGuests());
		this.createMenu();
		this.calcMenuPrice();
	}
}
 
