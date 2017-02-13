$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	//var exampleView = new ExampleView($("#exampleView"), model);
	var view2 = new View2($("#view2"),model);
	var view2Controller = new View2Controller(view2, model);
	var view3 = new View3($("#view3"),model);
	var view3Controller = new View3Controller(view3, model);

	var view4 = new View4($("#view4"),model);
	var view4Controller = new View4Controller(view4, model);
	/*var page3View = new Page3View($("#page3View"),model);
	var page4View = new Page4View($("#page4View"),model);*/
	//var view5 = new View5($("#view5"),model);
});