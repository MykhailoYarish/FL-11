function Fighter({ name, damage, health, agility }) {
  const maxHealth = 100;
  let wins = 0;
  let loses = 0;

  this.getName = function() {
    return name;
  };
  this.getDamage = function() {
    return damage;
  };
  this.getHealth = function() {
    return health;
  };
  this.getAgility = function() {
    return agility;
  };
  this.attack = function(defender) {
    const maxChanceToHit = 101;
    const defAgility = defender.getAgility();
    const attackChance = Math.floor(Math.random() * maxChanceToHit);
    if (attackChance > defAgility) {
      defender.dealDamage(damage);
      console.log(`${name} make ${damage} damage to ${defender.getName()}`);
    } else {
      console.log(`${defender.getName()} attack missed`);
    }
  };
  this.logCombatHistory = function() {
    console.log(`Name: ${name}, Wins: ${wins}, Losses: ${loses}`);
  };
  this.heal = function(healPoints) {
    health = healPoints + health > maxHealth ? maxHealth : health + healPoints;
  };
  this.dealDamage = function(damagePoints) {
    health = health - damagePoints < 0 ? 0 : health - damagePoints;
  };
  this.addWin = function() {
    wins += 1;
  };
  this.addLoss = function() {
    loses += 1;
  };
}

const fighter1 = new Fighter({
  name: 'Scorpion',
  damage: 20,
  agility: 25,
  health: 100
});
const fighter2 = new Fighter({
  name: 'Sub zero',
  damage: 10,
  agility: 40,
  health: 120
});

function battle(subZero, scorpion) {
  if (subZero.getHealth() <= 0) {
    console.log(`${subZero.getName()} is dead and can't fight`);
    return;
  }
  if (scorpion.getHealth() <= 0) {
    console.log(`${scorpion.getName()} is dead and can't fight`);
    return;
  }
  while (subZero.getHealth() > 0 && scorpion.getHealth() > 0) {
    subZero.attack(scorpion);
    scorpion.attack(subZero);
  }

  console.log(subZero.getHealth(), scorpion.getHealth());

  if (subZero.getHealth() <= 0) {
    subZero.addLoss();
    scorpion.addWin();
  }

  if (scorpion.getHealth() <= 0) {
    subZero.addWin();
    scorpion.addLoss();
  }
}

battle(fighter1, fighter2);

fighter1.logCombatHistory();
fighter2.logCombatHistory();

battle(fighter1, fighter2);
