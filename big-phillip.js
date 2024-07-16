// variaveis 
let playerName = "Daniel Paladino"
let playerExperience = 7054
let experienceTier = undefined;

// for
for (let experienceGained = 0; experienceGained <= playerExperience; experienceGained++){
    console.log("The player " + playerName + " received " + experienceGained + " Experience points.")
}

// estruturas de decisões
if (playerExperience <= 1000) {
    experienceTier = "Ferro";
}else if (playerExperience <= 2001) {
    experienceTier = "Bronze";
}else if (playerExperience <= 3001) {
    experienceTier = "Silver"
}else if (playerExperience <= 6001) {
    experienceTier = "Gold"
}else if (playerExperience <= 7001) {
    experienceTier = "Platinum"
}else if (playerExperience <= 8001) {
    experienceTier = "Ascendent"
}else if (playerExperience <= 9001) {
    experienceTier = "Immortal"
}else if (playerExperience <= 10001) {
    experienceTier = "Radiant"
}

console.log("Has a total of " + playerExperience + " experience points.");
console.log("The player " + playerName + " is classified as Tier: " + experienceTier);