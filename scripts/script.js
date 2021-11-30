// Define all variables
let plantName;
let health;
let waterAmount = 4;
let foodAmount = 4;
let sunshineAmount = 4;
let intervalTime = 3000;
let lowestLevel = 4; //lowest level for plant to talk

// hideImages();
// waterLow();
// foodLow();
// sunshineLow();
// changePlantImages();
// gameOver();


document.getElementById("input-name").innerHTML = 



health = waterAmount + foodAmount + sunshineAmount;

// Event listners for clicking of resource buttons

document.getElementById("drink").addEventListener("click", addWater);
document.getElementById("eat").addEventListener("click", addFood);
document.getElementById("sun").addEventListener("click", addSun);

document.getElementById("input-button").addEventListener("click", startGame);




function startGame(){
    plantName = document.getElementById("input-name").value;
    document.getElementById("span-name").innerHTML = plantName;

    let myVar = setInterval(loop, intervalTime);
}


// Setup loop function
    
function loop(){
    hideImages();
    reduceValue();
    changePlantImages();

    health = waterAmount + foodAmount + sunshineAmount;

    document.getElementById("waterText").innerHTML = "Water level: " + waterAmount;
    document.getElementById("foodText").innerHTML = "Food level: " + foodAmount;
    document.getElementById("sunText").innerHTML = "Sun level: " + sunshineAmount;
    document.getElementById("span-health").innerHTML = Math.round(health/30 * 100) + "%";


    if (waterAmount <= 4){
        waterLow();
    }
    if (foodAmount <= 4){
        foodLow();
    }
    if (sunshineAmount <= 4){
        sunshineLow();
    }
    if (waterAmount == 0 || foodAmount == 0 || sunshineAmount == 0){
        gameOver();
        clearInterval();

    }   
}


// function to hide all images

function hideImages() {
    document.getElementById("thirsty").style.visibility = "hidden";
    document.getElementById("hungry").style.visibility = "hidden";
    document.getElementById("sunlight").style.visibility = "hidden";
    document.getElementById("waterDropsImage").style.visibility = "hidden";
    document.getElementById("flyImage").style.visibility = "hidden";
    document.getElementById("sunImage").style.visibility = "hidden";

 }


// function to reduce value
  function reduceValue(){

    if (waterAmount >= 2){
        waterAmount = waterAmount - Math.floor(Math.random()*3);
    }else if (waterAmount == 1){
        waterAmount = 0;
    }
    if (foodAmount >= 2){
        foodAmount = foodAmount - Math.floor(Math.random()*3);
    }else if (foodAmount == 1){
        foodAmount = 0;
    }
    if (sunshineAmount >= 2){
        sunshineAmount = sunshineAmount - Math.floor(Math.random()*3);
    }else if (sunshineAmount == 1){
        sunshineAmount = 0;
    }
  }
    

//   function for Low level of waterAmount, foodAmount, sunshineAmount
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



// function to change Plant images based on health value

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
    if (waterAmount <= 7){
        waterAmount = waterAmount + Math.floor(Math.random()* 3 +1);
    }else if (waterAmount > 7){
        waterAmount = 10;
    }
}

//Make fly visible and increases food value by a random
function addFood (){
    document.getElementById("flyImage").style.visibility = "visible"; 
    if (foodAmount <= 7){
        foodAmount = foodAmount + Math.floor(Math.random()* 3 +1);
    }else if (foodAmount > 7){
        foodAmount = 10;
    }
}

//Make sun visible and increases sun value by a random
function addSun (){
    document.getElementById("sunImage").style.visibility = "visible"; 
    if (sunshineAmount <= 7){
        sunshineAmount = sunshineAmount + Math.floor(Math.random()* 3 +1);
    }else if (sunshineAmount > 7){
        sunshineAmount = 10;
    }
}

// To show dead plant and hide Div 

function gameOver(){
    document.getElementById("gameOver").style.visibility = "visible";
    document.getElementById("flyPlant").src = "images/flytrap_0.jpg";

}




// function fun(){  
//     document.getElementById("myForm").reset();  
//   } 



