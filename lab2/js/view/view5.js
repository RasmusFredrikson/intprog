//view5 Object constructor
var View5 = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.priceOfStarter = container.find("#priceOfStarter");
	this.priceOfMainDish = container.find("#priceOfMainDish");
	this.priceOfDessert = container.find("#priceOfDessert");
	this.totalPrice = container.find("#totalPrice");
	
	this.priceOfStarter.html(model.getDishPrice(model.getSelectedDish("starter").id) + " SEK");
	this.priceOfMainDish.html(model.getDishPrice(model.getSelectedDish("main dish").id) + " SEK");
	this.priceOfDessert.html(model.getDishPrice(model.getSelectedDish("dessert").id) + " SEK");
	this.totalPrice.html("<strong>Total: &nbsp; </strong> " + model.getTotalMenuPrice() + " SEK");
	
}
 
