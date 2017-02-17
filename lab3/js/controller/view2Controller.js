//View2Controller Object constructor
var View2Controller = function(view, model, stateController) {

	view.numberOfGuests.change(function(){
		model.setNumberOfGuests(numberOfGuests.value);
	});

	view.confirmDinner.click(function(){
		stateController.hideViews();
		stateController.showPage4();
	});

	view.viewContainer.on("click", ".deleteButton", function(event) {
		console.log("deleteButton clicked!");
		model.removeDishFromMenu(model.getSelectedDish(this.id).id);
	});
}
