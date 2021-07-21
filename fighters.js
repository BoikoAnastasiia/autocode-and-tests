const random = () => (Math.random() * 100).toFixed();
console.log(random());

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
    if (fighter.#agility + fighter.#strength > isSuccessful) {
      console.log(`${fighter} attack missed`);
    }
  }
}

const myFighter = new Fighter({
  name: 'Maximus',
  damage: 20,
  hp: 100,
  strength: 30,
  agility: 25,
});
console.log(myFighter.getAgility());

let name = myFighter.name;
console.log(name);

const battle = function (fighter1, fighter2) {
  // add an implementation here
};
