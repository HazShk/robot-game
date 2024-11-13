var playerName = prompt("what is your robot's name");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    alert("Welcome to the Robot Game!");
    enemyHealth = enemyHealth - playerAttack;
    console.log(playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining.");

    playerHealth = playerHealth - enemyAttack;
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

    if (enemyHealth <= 0) {
        alert(enemyName + " has died! ");
    } else {
        alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    if (playerHealth <= 0) {
        alert(playerName + " has died ");
    } else {
        alert(playerName + " still has " + playerHealth + " health left.");
    }
}

fight();