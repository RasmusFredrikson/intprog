//View2 Object constructor
var View2 = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	
	this.numberOfGuests.val(model.getNumberOfGuests());
	
}
 
