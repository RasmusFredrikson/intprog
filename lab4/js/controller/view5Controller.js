//View5Controller Object constructor
var View5Controller = function(view, model, stateController) {


	
	view.starterThumbnail.click(function(event) {
		model.setChosenDish(model.getSelectedDish("starter").id);
		stateController.hideViews();
		stateController.showPage3();
	});

	view.mainDishThumbnail.click(function(event) {
		model.setChosenDish(model.getSelectedDish("main dish").id);
		stateController.hideViews();
		stateController.showPage3();
	});

	view.dessertThumbnail.click(function(event) {
		model.setChosenDish(model.getSelectedDish("dessert").id);
		stateController.hideViews();
		stateController.showPage3();
	});

	view.printRecipe.click(function(){
		//stateController.hideViews();
		//stateController.showPage5();
		model.getDish(667917, function(dish) {
			console.log(dish);
			view.starter = dish;
			view.mainDish = dish;
			view.dessert = dish;
			view.update();
		})
	});
}