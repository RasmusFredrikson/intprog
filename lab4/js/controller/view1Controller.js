//View1Controller Object constructor
var View1Controller = function(view, model, stateController) {
	view.createNewDinner.click(function() {
		stateController.hideViews();
		stateController.showPage2();
		$('body').removeClass('backgroundImg');
		model.getFullMenu();
	});
	
}	