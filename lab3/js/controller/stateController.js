//stateController Object constructor
var StateController = function(view1, view2, view3, view4, view5, view6, view7, model ) {
	this.showPage1 = function() {

	}


	this.showPage2 = function() {
		console.log("haaaai");
		$("#view1").hide();
		$("#view2").show();
		$("#view3").show();
		$("#view1").hide();
	}

	view1.createNewDinner.click(this.showPage2);
}