//View2Controller Object constructor
var View2Controller = function(view, model ) {

	view.numberOfGuests.change(function(){
		model.setNumberOfGuests(numberOfGuests.value);
	});
}