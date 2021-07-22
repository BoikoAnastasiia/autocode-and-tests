const random = () => (Math.random() * 100).toFixed();

class Fighter {
  #name;
  #damage;
  #strength;
  #agility;
  #hp;

  constructor({ name, damage, strength, agility, hp }) {
    this.#name = name;
    this.#damage = damage;
    this.#strength = strength;
    this.#agility = agility;
    this.#hp = hp;
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

    defender.getHealth() - attacker.getDamage();

    console.log(
      `${defender.getName()} makes ${defender.getDamage()} damage to ${attacker.getName()} `
    );
  }

  heal(amount) {
    return this.#hp + amount;
  }

  dealDamage(amount) {
    return this.#hp - amount;
  }

  addWin() {}

  logCombatHistory() {
    console.log(`Name:${this.#name},Wins:${win},Losses:${lose}`);
  }
}

const fighter1 = new Fighter({
  name: 'John',
  damage: 25,
  hp: 105,
  strength: 30,
  agility: 40,
});
const fighter2 = new Fighter({
  name: 'Sasha',
  damage: 45,
  hp: 100,
  strength: 30,
  agility: 25,
});

fighter2.attack(fighter1); //'Sasha attack missed'
fighter1.attack(fighter2); //'John makes 25 damage to Sasha'
fighter1.dealDamage(20);
const battle = function (fighter1, fighter2) {
  // add an implementation here
};
