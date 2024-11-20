//desafio 1
let diaSemana = prompt('Qual o dia da semana ?');
if(diaSemana == 'Sabado'){
    alert('Bom fim de semana');
}else if (diaSemana == 'Domingo'){
    alert('Bom fim de semana')
} else {
    alert('Boa semana')
}

// desafio 2
let numero = prompt('Informe um numero negativo ou positivo');
if (numero > 0 ){
    alert('O numero é positivo')
} else {
    alert('O numero é negativo')
}

// desafio 3 
let pontos = 0;
if(pontos >= 100){
    alert('Parabens vc venceu')
} else {
    alert('Tente novamento para ganhar')
}

//desafio 4
let saldoConta = 2000;
alert(`Seu saldo é R$${saldoConta}`);

//desafio 5
let nome = prompt('Informe o seu nome');
alert(`Boas Vindas ${nome}`);
