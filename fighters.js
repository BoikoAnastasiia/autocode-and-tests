const random = () => (Math.random() * 100).toFixed();

class Fighter {
  #name;
  #damage;
  #strength;
  #agility;
  #hp;
  #win;
  #lose;

  constructor({ name, damage, strength, agility, hp }) {
    this.#name = name;
    this.#damage = damage;
    this.#strength = strength;
    this.#agility = agility;
    this.#hp = hp;
    this.#win = 0;
    this.#lose = 0;
  }

  getName() {
    return this.#name;
  }
  getDamage() {
    return this.#damage;
  }
  getStrength() {
    return this.#strength;
  }
  getAgility() {
    return this.#agility;
  }
  getHealth() {
    return this.#hp;
  }

  attack(fighter) {
    const isSuccessful = random();
    const attacker = this;
    const defender = fighter;

    if (defender.getAgility() + defender.getStrength() > isSuccessful) {
      console.log(`${attacker.getName()} attack missed`);
    }

    if (defender.getAgility() + defender.getStrength() < isSuccessful) {
      defender.dealDamage(attacker.getDamage());
      console.log(
        `${attacker.getName()} makes ${attacker.getDamage()} damage to ${defender.getName()} `
      );
    }
    return;
  }

  heal(amount) {
    this.#hp += amount;
  }

  dealDamage(amount) {
    if (this.getHealth() - amount < 0) {
      this.#hp = 0;
    } else {
      this.#hp = this.getHealth() - amount;
    }
  }

  addWin() {
    return this.#win++;
  }

  addLoss() {
    return this.#lose++;
  }

  logCombatHistory() {
    console.log(`Name:${this.#name},Wins:${this.#win},Losses:${this.#lose}`);
  }
}

function battle(fighter1, fighter2) {
  while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
    fighter1.attack(fighter2);
    fighter2.attack(fighter1);
  }

  if (fighter1.getHealth() === 0) {
    fighter2.addWin();
    fighter1.addLoss();
    console.log(`${fighter2.getName()} is dead`);
    return 0;
  }
  if (fighter2.getHealth() === 0) {
    fighter1.addWin();
    fighter2.addLoss();
    console.log(`${fighter1.getName()} is dead`);
    return 0;
  }
  if (fighter1.getHealth() === 0 && fighter2.getHealth() === 0) {
    return 0;
  }
}

module.exports = { Fighter, battle };
