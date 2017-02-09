$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	//var exampleView = new ExampleView($("#exampleView"), model);
	var page2View = new Page2View($("#page2View"),model);
	/*var page3View = new Page3View($("#page3View"),model);
	var page4View = new Page4View($("#page4View"),model);
	var page5View = new Page5View($("#page5View"),model);*/
});