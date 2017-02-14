//view4 Object constructor
var View6 = function (container, model) {

	model.addObserver(this);
	
	// Get all the relevant elements of the view (ones that show data and/or ones that responed to interaction)
	this.view6NumberOfGuests = container.find("#view6NumberOfGuests");
	console.log(this.view6NumberOfGuests);

	console.log(model.getNumberOfGuests());

	this.view6NumberOfGuests.html('My Dinner: ' + model.getNumberOfGuests() + ' people');

	this.update = function () {
		this.view6NumberOfGuests.html('My Dinner: ' + model.getNumberOfGuests() + ' people');
	}
}