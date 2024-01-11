/*
Luiz Otávio Miranda tem 30 anos, pesa 84kg 
tem 1.8 de altura e seu IMC é de ***
Luiz otávio nasceu em ***
*/

const nome ='Iuri Souza';
const sobrenome ='Santos';
const idade = 25;
const peso = 79;
const alturaEmMetros = 1.79;
let imc = peso / (alturaEmMetros *alturaEmMetros );
let anoNascimento = 2023 - idade;


console.log(nome, sobrenome, 'tem', idade,', pesa', peso,'Kg', 'tem', alturaEmMetros, 'de altura e seu IMC é de', imc );
console.log(nome, 'nasceu em', anoNascimento);

//template strings com craze 

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}Kg, tem ${alturaEmMetros} de altura e seu IMC é de, ${imc}. `);
console.log(`${nome} nasceu em ${anoNascimento}.`);