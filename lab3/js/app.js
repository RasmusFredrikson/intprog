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

	var view5 = new View5($("#view5"),model);
	var view5Controller = new View5Controller(view5, model);

	var view6 = new View6($("#view6"),model);
	var view6Controller = new View6Controller(view6, model);

	var view7 = new View7($("#view7"),model);
	var view7Controller = new View7Controller(view7, model);
});