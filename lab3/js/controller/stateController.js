//stateController Object constructor
var StateController = function(model) {
	this.showPage1 = function() {
		$("#view1").show();
	}

	this.showPage2 = function() {
		$("#view2").show();
		$("#view3").show();		
	}

	this.showPage3 = function() {
		$("#view2").show();
		$("#view4").show();
	}

	this.showPage4 = function() {
		console.log("Nu körs show :)");
		$("#view6").show();
		$("#view5").show();
	}

	this.showPage5 = function() {
		$("#view6").show();
		$("#view7").show();
	}

	this.hideViews = function() {
		console.log("Nu körs hide :)");
		for (var i = 0; i < 7; i++) {
			$("#view" + i).hide();
		}
		console.log("Nu slutar hide köras :)");
	}
}