//View4Controller Object constructor
var View4Controller = function(view, model, stateController) {

	view.backToSelectDish.click(function(){
		stateController.hideViews();
		stateController.showPage2();
	});

	view.addDish.click(function() {
		model.addDishToMenu(model.getChosenDish());
		stateController.hideViews();
		stateController.showPage2();
	});
}