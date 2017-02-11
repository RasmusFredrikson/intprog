//View2 Object constructor
var View2 = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.numberOfGuests.val(model.getNumberOfGuests());

	this.panelBody = container.find("#panelBody");
	this.panelBody.html('<div class="row"><div class="col-sm-8">' + 'yaaas' + '</div><div class="col-sm-4 text-right">' + 43 + '</div></div>'
						+ '<div class="row"><div class="col-sm-8">' + 'fgsdfg' + '</div><div class="col-sm-4 text-right">' + 54 + '</div></div>');
	
	function createMenu(argument) {
		// body...
	}


	model.addObserver(this);

	this.update = function () {
		this.numberOfGuests.val(model.getNumberOfGuests());
	}
}
 
