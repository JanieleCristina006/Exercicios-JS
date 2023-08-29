//01 - crie uma condição composta com uma variável dia e a condição verifica se está de dia mostre 'claro' senão mostre está 'de noite'
    let dia = "claro";

if(dia == "claro"){
      console.log("O dia está claro!");
    }
    else{
        console.log("Está de noite!");
    }

//02 - Crie um loop for() que exiba apenas números pares até o 20 no console.log()
for (let contador = 2; contador <= 20; contador++) {
    if (contador % 2 === 0) {
        console.log("Número par: " + contador);
    }
    else{
        console.log("Número impar: " + contador);
    }
}

//03 - crie uma função que exiba uma mensagem no console

function mensagem(){
    console.log("Olá mundo");
}
mensagem();


//04 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function nome(meuNome){
    console.log(meuNome);
}
nome("Jnaiele");

//05 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

function sobreMim(nome,idade,estiloMusica){
    console.log(nome,idade,estiloMusica);
}
sobreMim("Janiele,",20,"Sertanejo");

//06 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function categoria(filme,musica){
    console.log(filme,musica)
}
categoria("Barbie ","Dandelions");

//07 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function triplo(numero){
    console.log(numero * 3);
}
triplo(5)

//08 - crie uma função que  verifique se uma  variável é true ou false

let possuiCNH = true;

if(possuiCNH){
    console.log("A variável é true!")
}
else{
    console.log("A variável é false");
}

//09 - Crie um array que receba 5 itens e exiba no console.

let itens=["Maça","Pera","Uva","Laranja","Banana"];

for(cont=0;cont<itens.length;cont++){

    console.log("Fruta:"+itens[cont]);
}

//10 - Utilize um método para adicionar um nome ao inicio do array.

let nomes=["Laura","Bianca","Silvia","Luana","Marcia"];

nomes.unshift("Patricia");

console.log(nomes);

//11 - Utilize um método para remover o último nome do array.
nomes.pop();
console.log(nomes)

//12 - Utilize um método para adicionar dois nomes ao fim do array.
nomes.push("Adriana","Vera");
console.log(nomes)

//13 - Utilize um método para remover o primeiro nome do array.
nomes.shift();
console.log(nomes);

//14 - Utilize um método para organizar em ordem crescente o seguinte array: let numbers = [7,5,6,3,8,9,2,1,4]

let numbers = [7,5,6,3,8,9,2,1,4];
numbers.sort()
console.log(numbers);

//14 - Crie um objeto que receba ao menos três propriedades sobre você.

let sobre ={
    nome:"Janiele",
    idade:20,
    altura:1.60
};
console.log(sobre);

//15 - Adicione uma nova propriedade sem alterar seu objeto inicial.
sobre.cordocabelo = "Preto"
console.log(sobre);

//16 - Remova uma propriedade desse objeto.
delete sobre.altura;
console.log(sobre);

//17 - Mostre no console todas as propriedades desse objeto.
console.log(sobre.nome,sobre.idade,sobre.cordocabelo)

//18 - Crie um array  chamado "cadastro" contendo ao menos 5 objetos.Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos.Na propriedade amigos, adicione ao menos 4 amigos.


var cadastro = [
    {
      nome: "Janiele",
      idade: 20,
      telefone: "998515929",
      amigos: ["Maria", "Pedro", "Ana", "Carlos"]
    },
    {
      nome: "Maria",
      idade: 15,
      telefone: "997554926",
      amigos: ["João", "Pedro", "Luiza", "Paula"]
    },
    {
      nome: "Karen",
      idade: 18,
      telefone: "997007432",
      amigos: ["João", "Maria", "Lucas", "Isabela"]
    },
    {
      nome: "Joana",
      idade: 20,
      telefone: "997283970",
      amigos: ["João", "Mariana", "Luis", "Rafael"]
    },
    {
      nome: "Carlos",
      idade: 24,
      telefone: "998696287",
      amigos: ["Pedro", "Isabela", "Ricardo", "Fernanda"]
    }
  ];
  
  console.log(cadastro);
  

//19 - Mostre no console o nome de um amigo de cada lista.

for (var i = 0; i < cadastro.length; i++) {
    console.log(`Amigo de ${cadastro[i].nome}: ${cadastro[i].amigos[3]}`);
  }
