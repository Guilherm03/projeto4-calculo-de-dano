const person1 = prompt("Insira o nome do personagem: ");
const person2 = prompt("Insira o nome do outro personagem: ");
let attackPower = parseInt(prompt(`Insira o poder de ataque do ${person1}: `));
let life = parseInt(prompt(`Insira quantos pontos de vida tem o ${person2}: `));
let defensePower = parseInt(prompt(`Insira o poder de defesa do ${person2}`));
let shield = prompt(`O ${person2} tem escudo? `)
let damage = 0
let difference = 0
let damageLife = life
if (attackPower > defensePower && shield ==="não") {
    difference = attackPower - defensePower
    damage = difference
    damageLife = life - damage
    alert(`${person1} atacou. ${person2} sofreu ${damage} de dano e não possui escudo. Sua vida agora é ${damageLife}.`)
}
else if (attackPower > defensePower && shield ==="sim") {
    difference = attackPower - defensePower
    damage = difference/2
    damageLife = life - damage
    alert(`${person1} atacou. ${person2} sofreu ${damage} de dano por possuir escudo. Sua vida agora é ${damageLife}.`)
}
else {
    alert(`${person1} atacou, mas não afetou ${person2}. Nenhum dano causado!`)
}