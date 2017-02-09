$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	//var exampleView = new ExampleView($("#exampleView"), model);
	var view2 = new View2($("#view2"),model);
	/*var page3View = new Page3View($("#page3View"),model);
	var page4View = new Page4View($("#page4View"),model);*/
	var view5 = new View5($("#view5"),model);
});