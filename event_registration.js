

// Set the minimum and maximum number of tickets able to be purchased
var minTickets = 1;
var maxTickets = 3;
// Set variables for the ticket cost
var costPerTicket = 5.00;
var ticketSurcharge = 0.50;
var totalCost;


function addMinutes(numOfMinutes, date = new Date()) {
	date.setMinutes(date.getMinutes() + numOfMinutes);
  
	return date;
  }
// Set the date we're counting down to
var countDownDate = addMinutes(1);

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("timer").innerHTML = minutes + ":" + seconds + "";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    alert("Sorry your time to complete the form has expired!\nPlease try again if you still wish to purchase tickets.");	
	location.href = "https://CMST388-brobinson128.azurewebsites.net/project3/event_registration.html";
  }
}, 1000);  



function calculateTotal()
{
	var tickets = document.getElementById("numTickets").value;
	if(tickets >= 1 && tickets <= 3)
	{
		document.getElementById("msgTickets").innerHTML = " ";
		document.getElementById("numTickets").style.backgroundColor = "#efefef";
		totalCost = (costPerTicket * tickets) + (ticketSurcharge * tickets);
		totalCost = totalCost.toFixed(2);
		document.getElementById("totalCost").value = '$' + totalCost;
		document.getElementById("contactInformation").style.display = "initial";


	}
	else
	{
		document.getElementById("msgTickets").innerHTML = "You can only buy between 1 and 3 tickets";
		document.getElementById("numTickets").style.backgroundColor = "yellow";
		document.getElementById("contactInformation").style.display = "none";
		document.getElementById("totalCost").value = '$0.00';
	}
}

function helper()
{
	var name = document.getElementById("name").value;
	var email =  document.getElementById("email").value;
	if(!name)
	{
	     document.getElementById("msgname").innerHTML = "Please enter the name first.";
		 document.getElementById("name").style.backgroundColor = "yellow";
	}
	else
	{
		document.getElementById("msgname").innerHTML = " ";
		document.getElementById("name").style.backgroundColor = "#efefef";
    }

	if(!email)
	{
		document.getElementById("msgemail").innerHTML = "Please enter the email first.";
		document.getElementById("email").style.backgroundColor = "yellow";
    }
	else
	{
		document.getElementById("msgemail").innerHTML = " ";
		document.getElementById("email").style.backgroundColor = "#efefef";
    }
}

function completePurchase()
{
	var name = document.getElementById("name").value;
	var email =  document.getElementById("email").value;
	if(!document.getElementById("numTickets").value)
		 calculateTotal();
	
	if(!email || !name)
	{
		helper();
	}
	else
	{
		alert("Thank you for your purchase.\n Your total cost is $" + totalCost + "\nPlease allow 24 hours for electronic delivery.");	
        clearInterval(x);
	}
	


}

