//View3Controller Object constructor
var View3Controller = function(view, model, stateController) {
	view.dishes.click(function(event) {
		model.setChosenDish(this.id);
		stateController.hideViews();
		stateController.showPage3();
	});

}