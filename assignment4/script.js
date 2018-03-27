$(document).ready(function(){

	var glazeOptions = $(".glaze");
	var glazeLen = glazeOptions.length;

	var quantOptions = $(".quantity");
	var quantLen = quantOptions.length;

	var item = [null,null,"."]
	var cart = 0

	// to clear the glazing selections
	function clearGlaze(){
		for (i=0; i<glazeLen; i++){
			glazeOptions[i].style.backgroundColor = "white";
	}};

	// to clear the quantity selections
	function clearQuant(){
		for (i=0; i<quantLen; i++){
			quantOptions[i].style.backgroundColor = "white";
	}};

	if (localStorage.cart != null){
		$("#cart")[0].innerHTML = "Cart: " + localStorage.cart;
	}

	// selecting one of the options, will change change the background color of that option

	$("#glazeNone").click(function() { // bind handler for click event
		clearGlaze();
		this.style.backgroundColor = "orange";
		item[0] = "None";
	});
	
	$("#glazeSugar").click(function() { // bind handler for click event
		var options = $(".glaze");
		clearGlaze();
		this.style.backgroundColor = "orange";
		item[0] = "Sugar Milk";
	});

	$("#glazeVanilla").click(function() { // bind handler for click event
		var options = $(".glaze");
		clearGlaze();
		this.style.backgroundColor = "orange";
		item[0] = "Vanilla Milk";
	});

	$("#glazeChocolate").click(function() { // bind handler for click event
		var options = $(".glaze");
		clearGlaze();
		this.style.backgroundColor = "orange";
		item[0] = "Double Chocolate";
	});

	// changing quantities 
	$("#quant1").click(function() { // bind handler for click event
		clearQuant();
		this.style.backgroundColor = "orange";
		item[1] = "1";
		$("#price")[0].innerHTML = "$3.00";
	});

	$("#quant3").click(function() { // bind handler for click event
		clearQuant();
		this.style.backgroundColor = "orange";
		item[1] = "3";
		$("#price")[0].innerHTML = "$9.00";
	});

	$("#quant6").click(function() { // bind handler for click event
		clearQuant();
		this.style.backgroundColor = "orange";
		item[1] = "6";
		$("#price")[0].innerHTML = "$18.00";
	});

	$("#quant9").click(function() { // bind handler for click event
		clearQuant();
		this.style.backgroundColor = "orange";
		item[1] = "9";
		$("#price")[0].innerHTML = "$27.00";
	});

	// clicking add to cart
	$("#add").click(function() { // bind handler for click event
		// check if carty is empty
		if (localStorage.cart == null){
			console.log("first")
			localStorage.cart = 1;
			localStorage.items = [item];
		}
		// cart is not empty
		else {
			localStorage.cart = Number(localStorage.cart) + 1;
			localStorage.items += [item];
		}
		console.log(localStorage.cart)
		console.log(localStorage.items);
		// confirmation message
		var confirm = item[1] + " " + item[0] + " cinnamon rolls has been added to your cart!";
		$("#cart")[0].innerHTML = "Cart: " + localStorage.cart;
		alert(confirm)
		// var lst = localStorage.items.split(",");
		// console.log(lst[0])
	});

});
