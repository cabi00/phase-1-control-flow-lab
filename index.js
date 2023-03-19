function scuberGreetingForFeet(ride){
//let giveCustomerFreeSample, charges20Dollars, Charges30Dollars;

if (ride <= 400) {
  //giveCustomerFreeSample = true;
  return 'This one is on me!';
} 
else if (ride < 2000) {
  return 'That will be twenty bucks.';
} 
else if (ride < 2500) {
  return 'I will gladly take your thirty bucks.';
}
else { 
  return 'No can do.';
}
}

function ternaryCheckCity(city){
  // Write your code here!
  if (city === "NYC"){
    return "Ok, sounds good.";
  }
  else {
    return "No go.";
  }
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let response = "";
  switch(tip){
    case 'generous':
      response = "Thank you so much.";
      break;
    case 'not as generous':
      response = "Thank you.";
      break;
    default :
      response = "Bye."
      break;


  }
  return response;
}
