class CorePokemon {
  constructor(name, health, attack, defense) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.defense = defense;
  }
}

const testPokemon = new CorePokemon('김지섭', 1000, 100, 200);
console.log(testPokemon)

class WrapPokemon extends CorePokemon {
  //* 코어 역할의 클래스로부터 'extends' 확장하였다. 라는 뜻으로 class 선언
  constructor(name, health, attack, defense, type) {
    super(name, health, attack, defense);
    //? super()라는 특별한 상속 메서드를 사용하면,
    //? 부모 클래스의 생성자를 호출할 수 있다.
    this.type = type
    //* type key는 해당 클래스인 WrapPokemon 클래스에서만 사용할 수 있는 key이다.
    //* 즉, CorePokemon 클래스에는 사용할 수 없다.
  }
}

const pika = new WrapPokemon('피카츄', 100, 50, 30, '전기')
console.log(pika)