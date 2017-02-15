//View6Controller Object constructor
var View6Controller = function(view, model, stateController) {
	view.editDinner.click(function(){
		stateController.hideViews();
		stateController.showPage2();
	});
}