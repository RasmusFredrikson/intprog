//View2 Object constructor
var View2 = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	
	/*Creates the sideMenu with dish names and prices */
	this.createMenu = function() {
		var menu = model.getFullMenu();
		var menuTable = "";
		for (var i = 0; i < menu.length; i++) {
			menuTable += ('<div class="row"><div class="col-sm-8">' 
				+ menu[i].name + '</div><div class="col-sm-4 text-right">' 
				+ model.getDishPrice(menu[i].id) + '&nbsp; SEK</div></div>');
		}
	this.menuPanelBody.html(menuTable);
	}

	/* Calculates the total sum of  */
	this.calcMenuPrice = function() {
		var sum = '<strong>' + model.getTotalMenuPrice() + '&nbsp; SEK </strong>';
		this.menuPanelFooter.html(sum);
	}

	model.addObserver(this);

	this.numberOfGuests = container.find("#numberOfGuests");
	this.numberOfGuests.val(model.getNumberOfGuests());

	this.menuPanelBody = container.find("#menuPanelBody");
	this.createMenu();

	this.menuPanelFooter = container.find("#menuPanelFooter");
	this.calcMenuPrice();

	this.update = function () {
		this.numberOfGuests.val(model.getNumberOfGuests());
		this.createMenu();
		this.calcMenuPrice();
	}
}
 
