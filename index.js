alert(`welcome to our shop!`);
const user = prompt(`what you want to buy; t-shirt,pants or dresspants.`);

if (user == "t-shirt") {
    let shirt = prompt(`which color? red , or black`);
    if (shirt == "red") {
        alert(`pay $250 for red color`);
    }
    else if (shirt == "black") {
        alert(`pay $500 for black`);
    }
    else {
        alert(`invalid choice`);
    }
}
else if (user == "pants") {
    let pants = prompt(`which color? lightblue , or gray`);
    if (pants == "lightblue") {
        alert(`pay $600 for lightblue pant`);
    }
    else if (pants == "gray") {
        alert(`pay $700 for gray pant`);
    }
    else {
        alert(`invalid choice`);
    }
}
else if(user == "dresspants"){
    let dresspants = prompt(`which color? aqua , or navyblue`);
    if(dresspants == "aqua"){
        alert(`you should have to pay $1000 for AQUA  dresspant.`);
    }
    else if(dresspants == "navyblue"){
        alert(`you should have to pay $900 for navy blue dresspant.`);
    }
    else{
        alert(`invalid choice`);
    }
}
else{
    alert(`invalid choice`);
}
alert(`THANKS FOR SHOPING!`);



