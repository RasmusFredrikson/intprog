//view1 Object constructor
var View1 = function (container, model) {

	model.addObserver(this);

	this.createNewDinner = container.find("#createNewDinner");
	
	// Get all the relevant elements of the view (ones that show data and/or ones that responed to interaction)

	this.update = function () {
	}
}