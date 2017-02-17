//View3Controller Object constructor
var View3Controller = function(view, model, stateController) {

	view.viewContainer.on("click", ".thumbnail", function(event) {
		event.preventDefault();
		model.setChosenDish(this.id);
		console.log(this.id);
		
		model.setPendingPrice(model.getDishPrice(this.id));
		console.log(model.getPendingPrice());
		stateController.hideViews();
		stateController.showPage3();
	});

	view.searchButton.click(function(event) {
		var dishType = view.selectDishType.find(":selected").get(0).id;
		var searchText = view.searchText.get(0).value;
		view.allDishes = model.getAllDishes(dishType, searchText);
		view.update();
		//dishes = view.viewContainer.find(".thumbnail");
	});
}