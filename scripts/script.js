// Define all variables
let name;
let health;
let waterAmount = 4;
let foodAmount = 4;
let sunshineAmount = 4;
let setInterval = 3000;
let lowestLevel = 4; //lowest level for plant to talk

hideImages();
// waterLow();
// foodLow();
// sunshineLow();
// changePlantImages();
// gameOver();



health = waterAmount + foodAmount + sunshineAmount;

// Event listners for clicking of resource buttons

document.getElementById("drink").addEventListener("click", addWater);
document.getElementById("eat").addEventListener("click", addFood);
document.getElementById("sun").addEventListener("click", addSun);

document.getElementById("input-button").addEventListener("click", startGame);




function startGame(){
   name = document.getElementById("input-name").value;

}
// Write a function to hide all images

function hideImages() {
    document.getElementById("thirsty").style.visibility = "hidden";
    document.getElementById("hungry").style.visibility = "hidden";
    document.getElementById("sunlight").style.visibility = "hidden";
    document.getElementById("waterDropsImage").style.visibility = "hidden";
    document.getElementById("flyImage").style.visibility = "hidden";
    document.getElementById("sunImage").style.visibility = "hidden";

 }


//   Write a function to reduce value
  function reduceValue(){

    waterAmount = waterAmount - Math.floor(Math.random()*2 +1);

    foodAmount = foodAmount - Math.floor(Math.random()*2 +1);

    sunshineAmount = sunshineAmount - Math.floor(Math.random()*2 +1);
  }

//   Write a function for Low level of waterAmount, foodAmount, sunshineAmount
function waterLow(){
      if(waterAmount <= lowestLevel){
        document.getElementById("thirsty").style.visibility = "visible";  
      }
  }

function foodLow(){
    if(foodAmount <= lowestLevel){
        document.getElementById("hungry").style.visibility = "visible"; 
    }
}
function sunshineLow(){
    if(sunshineAmount <= lowestLevel){
      document.getElementById("sunlight").style.visibility = "visible";  
    }
}



// Write a function to change Plant images based on health value

function changePlantImages(){

    if (health == 0){
        document.getElementById("flyPlant").src = "images/flytrap_0.jpg";
    } else if(health <=9 && health >=1){
        document.getElementById("flyPlant").src = "images/flytrap_1.jpg";
    } else if(health <=16 && health >=10){
        document.getElementById("flyPlant").src = "images/flytrap_2.jpg";
    }else if(health <=23 && health >=17){
        document.getElementById("flyPlant").src = "images/flytrap_3.jpg";
    }else if(health <=30 && health >=18){
        document.getElementById("flyPlant").src = "images/flytrap_4.jpg";
    }
}






//Make water drops visible and increases water value by a random
function addWater (){
    document.getElementById("waterDropsImage").style.visibility = "visible"; 
    waterAmount = waterAmount + Math.floor(Math.random()* 4 +1);
}

//Make fly visible and increases food value by a random
function addFood (){
    document.getElementById("flyImage").style.visibility = "visible"; 
    foodAmount = foodAmount + Math.floor(Math.random()* 4 +1);
}

//Make sun visible and increases sun value by a random
function addSun (){
    document.getElementById("sunImage").style.visibility = "visible"; 
    sunshineAmount = sunshineAmount + Math.floor(Math.random()* 4 +1);  
}

// To show dead plant and hide Div 

function gameOver(){
    document.getElementById("gameOver").style.visibility = "visible";
    document.getElementById("flyPlant").src = "images/flytrap_0.jpg";

}








