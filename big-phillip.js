// variaveis 
let playerName = "Daniel Paladino"
let playerExperience = 8002
let experienceTier = undefined;

// for
for (let experienceGained = 0; experienceGained <= playerExperience; experienceGained++){
    console.log("The player " + playerName + " received " + experienceGained + " Experience points.")
}

// estruturas de decisões
switch(playerExperience > 0){
    case (playerExperience <= 1000) :
        experienceTier = "Iron" ;
        break;
    case (playerExperience >= 1001 && playerExperience <= 2000) :
        experienceTier = "Bronze" ;
        break;
    case (playerExperience >= 2001 && playerExperience <= 3000) :
        experienceTier = "Silver" ;
        break;
    case (playerExperience >= 3001 && playerExperience <= 4000) :
        experienceTier = "Gold" ;
        break;
    case (playerExperience >= 4001 && playerExperience <= 5000) :
        experienceTier = "Platinum" ;
        break;
    case (playerExperience >= 5001 && playerExperience <= 6000) :
        experienceTier = "Ascendent" ;
        break;
    case (playerExperience >= 6001 && playerExperience <= 7000) :
        experienceTier = "Immortal" ;
        break;
    case (playerExperience >= 7001) :
        experienceTier = "Radiant" ;
        break;
    default: 
        experienceTier = "Unranked";
        break;
}

console.log("Has a total of " + playerExperience + " experience points.");
console.log("The player " + playerName + " is classified as Tier: " + experienceTier);