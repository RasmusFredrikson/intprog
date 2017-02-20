//View3Controller Object constructor
var View3Controller = function(view, model, stateController) {

	view.viewContainer.on("click", ".thumbnail", function(event) {
		event.preventDefault();
		model.setChosenDish(this.id);
		
		//model.setPendingPrice(model.getDishPrice(this.id));
		stateController.hideViews();
		stateController.showPage3();
	});

	view.searchButton.click(function(event) {
		var dishType = view.selectDishType.find(":selected").get(0).id;
		var searchText = view.searchText.get(0).value;
		view.showWaitingWidget();
		model.getAllDishes(dishType, searchText, function (dishes) {
			view.allDishes = dishes;
			view.update();
		});
		
	});

	view.searchText.keyup(function(event) {
		if(event.keyCode == 13)
			view.searchButton.click();
	});

	view.selectDishType.change(function(event) {
		view.searchButton.click();
	})
}