const userName = prompt(" what is your name ?");
const userGender = prompt(" what is your Gender ?");
if(userGender === 'male'){
    alert("Welcome Mr." + userName);
    
}else if(userGender === 'female'){
    alert("Welcome Ms." + userName);
    
}else{
    alert("Welcome")
}
const userOrder = prompt("What do you want hot or cold drink ?");
const userDrinkName = prompt("Plz write the name of your drink ?");
alert("Your drink is getting prepared ");

    
console.log('Name : ' + userName , ', Drink : ' + userDrinkName); 

