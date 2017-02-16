//View3Controller Object constructor
var View3Controller = function(view, model, stateController) {
	view.dishes.click(function(event) {
		model.setChosenDish(this.id);
		stateController.hideViews();
		stateController.showPage3();
	});

	view.searchButton.click(function(event) {
		console.log("selectDishType");
		var dishType = view.selectDishType.find(":selected").get(0).id;
		var searchText = view.searchText.get(0).value;
		console.log(searchText);
		console.log(dishType);
		view.allDishes = model.getAllDishes(dishType, searchText);
		view.createFullMenu();
	});

}