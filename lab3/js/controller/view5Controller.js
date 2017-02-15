//View5Controller Object constructor
var View5Controller = function(view, model, stateController) {
	
	view.printRecipe.click(function(){
		stateController.hideViews();
		stateController.showPage5();
	});
}