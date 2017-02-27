// Here we create an Angular service that we will use for our 
// model. In your controllers (or other services) you can include the
// dependency on any service you need. Angular will insure that the
// service is created first time it is needed and then just reuse it
// the next time.
dinnerPlannerApp.factory('Dinner',function ($resource) {

    var numberOfGuest = 2;
    var selectedDishes = [];
    var observers = [];
    var chosenDish = 1;
    var pendingPrice = 0;


    // TODO in Lab 5: Add your model code from previous labs
    // feel free to remove above example code
    // you will need to modify the model (getDish and getAllDishes) 
    // a bit to take the advantage of Angular resource service
    // check lab 5 instructions for details


    this.getPendingPrice = function(){
        return pendingPrice;
    }

    this.setPendingPrice = function(num) {
        pendingPrice = num;
    }

    this.getChosenDish = function(){
        return chosenDish;
    }

    this.setChosenDish = function(id){
        chosenDish = id;
    }



    this.setNumberOfGuests = function(num) {
        if (num > 99) {
            numberOfGuests = 99;
        } else if (num < 0) {
            numberOfGuests = 0;
        } else {
            numberOfGuests = num;
        }
    }

    // should return 
    this.getNumberOfGuests = function() {
        return numberOfGuests;
    }

    //Returns the dish that is on the menu for selected type
    this.getSelectedDish = function(type) {
        for (var i = 0; i < selectedDishes.length; i++) {
            var dishTypes = selectedDishes[i].dishTypes;
            for (var j = 0; j < dishTypes.length; j++) {
                if(dishTypes[j] == type) {
                    return selectedDishes[i];
                }
            }
        }

        return null;
    }

    //Returns all the dishes on the menu.
    this.getFullMenu = function() {
        return selectedDishes.sort();
    }

    //Returns the total price of the menu (all the ingredients multiplied by number of guests).
    this.getTotalMenuPrice = function() {
        var sum = 0;
        for (var i = 0; i < selectedDishes.length; i++) {
            sum += this.getDishPrice(selectedDishes[i]);
        }
        return sum;
    }

    this.getDishPrice = function(dish) {
        var sum = 0;
        dish.extendedIngredients.forEach(function(ingredient) {sum += ingredient.amount});
        var totalPrice = Math.round((sum * this.getNumberOfGuests())*100)/100;
        return totalPrice;
    }

    //Adds the passed dish to the menu. If the dish of that type already exists on the menu
    //it is removed from the menu and the new one added.
    this.addDishToMenu = function(id) {
        this.getDish(id, dish => {
            for (var i = 0; i < dish.dishTypes.length; i++) {
                //if (dish.dishTypes[i] == "main dish" || dish.dishTypes[i] == "starter" || dish.dishTypes[i] == "dessert"){
                    if (this.getSelectedDish(dish.dishTypes[i]) != null){
                        this.removeDishFromMenu(this.getSelectedDish(dish.dishTypes[i]).id);
                        break;
                    }                   
                //}
            }
            selectedDishes.push(dish);
        });     
    }

    //Removes dish from menu
    this.removeDishFromMenu = function(id) {
        this.getDish(id, dish => {
            for (var i = 0; i < selectedDishes.length; i++) {
                if (selectedDishes[i].id == id){
                    selectedDishes.splice(i, 1);
                    return true;
                }
            }
            return false;
        });
    }

    //function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
    //you can use the filter argument to filter out the dish by name or ingredient (use for search)
    //if you don't pass any filter all the dishes will be returned
    this.getAllDishes = function (type,filter,cb) {
        $.ajax( {
            url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?query=' + filter + '&type=' + type,
            headers: {
                'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB',
                'Accept': 'application/json'
            },
            success: function(data) {
                cb(data);
            },
            error: function (jqXHR, exception) {
                var msg = '';
                if (jqXHR.status === 0) {
                    msg = 'Not connected.\n Verify Network.';
                } else if (jqXHR.status == 404) {
                    msg = 'Requested page not found. [404]';
                } else if (jqXHR.status == 500) {
                    msg = 'Internal Server Error [500].';
                } else if (exception === 'parsererror') {
                    msg = 'Requested JSON parse failed.';
                } else if (exception === 'timeout') {
                    msg = 'Time out error.';
                } else if (exception === 'abort') {
                    msg = 'Ajax request aborted.';
                } else {
                    msg = 'Uncaught Error.\n' + jqXHR.responseText;
                }
                alert(msg);
            }
        });
    }

    //function that returns a dish of specific ID
    this.getDish = function (id, cb) {
        $.ajax( {
            url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/' + id + '/information',
            headers: {
                'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB',
                'Accept': 'application/json'
            },
            success: function(data) {
                cb(data);
            },
            error: function (jqXHR, exception) {
                var msg = '';
                if (jqXHR.status === 0) {
                    msg = 'Not connected.\n Verify Network.';
                } else if (jqXHR.status == 404) {
                    msg = 'Requested page not found. [404]';
                } else if (jqXHR.status == 500) {
                    msg = 'Internal Server Error [500].';
                } else if (exception === 'parsererror') {
                    msg = 'Requested JSON parse failed.';
                } else if (exception === 'timeout') {
                    msg = 'Time out error.';
                } else if (exception === 'abort') {
                    msg = 'Ajax request aborted.';
                } else {
                    msg = 'Uncaught Error.\n' + jqXHR.responseText;
                }
                alert(msg);
            }
        });
    }


    this.DishSearch = $resource('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search',{},{
        get: {
            headers: {
                'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB'
            }
        }
    });
    this.Dish = $resource('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/:id/information',{},{
        get: {
            headers: {
                'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB'
            }
        }
    });

    // Angular service needs to return an object that has all the
    // methods created in it. You can consider that this is instead
    // of calling var model = new DinnerModel() we did in the previous labs
    // This is because Angular takes care of creating it when needed.
    return this;

});