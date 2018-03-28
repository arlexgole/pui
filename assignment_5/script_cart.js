// js for the cart page

$(document).ready(function(){

	console.log(localStorage.items)

	if (localStorage.cart != null){
		console.log('got here')

		// getting the number of items
		$("#cart")[0].innerHTML = "Cart: " + localStorage.cart;

		// splitting the list into the different items
		var products = localStorage.items.split("split");
		var list = $("#items");

		// creating the html for the list of tiems
		for (i=0; i<products.length-1; i++){
			flavor = products[i].split(",")[1]

			// finding the flavor and upating the right image
			if (flavor == "None"){
				console.log("none");
				img = "assets/images/original.png";
			} else if (flavor == "Sugar Milk"){
				console.log("sugar");
				img = "assets/images/o_sugar.png";
			} else if (flavor == "Vanilla Milk"){
				console.log("vanilla");
				img = "assets/images/o_vanilla.png";
			}
			else {
				img = "assets/images/o_chocolate.png";
			}

			// adding to the html
			list.append("<li>" + "<button class='delete-item'>X</button>" + "<img src=" + img + " class='cart-image'> " + products[i] + "</li>");
		}

		// deleting item
		$(".delete-item").click(function() {
    		$(this).parent().remove();
		});

	};
});