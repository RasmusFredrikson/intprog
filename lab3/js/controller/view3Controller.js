//View3Controller Object constructor
var View3Controller = function(view, model ) {

	view.numberOfGuests.change(function(){
		model.setNumberOfGuests(numberOfGuests.value);
	});
}