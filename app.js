// const userName = prompt(" what is your name ?");
// let userGender = prompt(" what is your Gender ?");
// let userAge = prompt(" what is your Age ?");

// function gender(){
//     while(userGender != 'male' && userGender !="female"){

//         userGender = prompt(" enter the correct gender");
//      }
//      if(userGender === 'male'){
//         alert("Welcome Mr." + userName);

//     }else if(userGender === 'female'){
//         alert("Welcome Ms." + userName);
//     }
// }
// gender();

// const userOrderType = prompt("What do you want hot or cold drink ?");
// const userDrinkName = prompt("Plz write the name of your drink ?");
// alert("Your drink is getting prepared ");

// let info = [userName , userGender , userOrderType , userDrinkName];

// for (let i = 0; i < info.length; i++){
//     console.log(info[i]);
// }

let form = document.getElementById("form");
let userInfo = document.getElementById("userInfo");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let userName = e.target.userName.value;
  let userAge = e.target.userAge.value;
  let drinkName = e.target.drinkName.value;
  let drinkTypeHot = e.target.drinkTypeHot;
  let drinkTypeCold = e.target.drinkTypeCold;
  let drinkType;
  if (drinkTypeHot.checked === true && drinkTypeCold.checked === true) {
    drinkType = drinkTypeHot.value + " " + drinkTypeCold.value;
  } else if (drinkTypeHot.checked === true) {
    drinkType = drinkTypeHot.value;
  } else if (drinkTypeCold.checked === true) {
    drinkType = drinkTypeCold.value;
  } else {
    drinkName = "";
    drinkType = "plz enter your drink type";
  }

  appendInfoToDocument(userName, userAge, drinkName, drinkType);
});

function appendInfoToDocument(name, age, drink, type) {
  let div = document.createElement("div");
  let userP = document.createElement("p");
  let ageP = document.createElement("p");
  let drinkP = document.createElement("p");

  userP.textContent = `Welcom! ${name}`;
  ageP.textContent = `Your Age : ${age}`;
  drinkP.textContent = `Your Order : ${type} ${drink}`;

  div.appendChild(userP);
  div.appendChild(ageP);
  div.appendChild(drinkP);

  userInfo.appendChild(div);
}
