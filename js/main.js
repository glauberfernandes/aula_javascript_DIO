
function clicou(){
    //alert("Obrigado por clicar");
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    window.open("https://globallabs.academy/");
    //window.location.href = "https://cozinhamagica.ind.br";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*
function soma(n1, n2){
    return n1 + n2;
}

var validar = 0;

function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true;
    } else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade");
validaIdade(idade)
alert(validar);
*/
//alert(soma(5, 10));


//var d = new Date();
//alert(d.getMonth() + 1);
//alert(d.getMinutes());
//alert(d.getHours());


/*
var count;
for(count = 0; count <= 5; count++){
    alert(count);
}
*/
/*
var count = 0;
while(count <= 5){
    console.log(count);
    count++;
}
*/
/*
//var idade = 18;
var idade = prompt("Qual a sua idade? ");
if(idade >= 18){
    alert("Maior de idade");
} else {
    alert("Menor de idade");
}
*/

/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];

console.log(frutas);
console.log(frutas[1].nome);
*/

/*
var fruta = {nome:"maça", cor:"vermelha"};

console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();

//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));


//var nome = "Glauber Fernandes";
//var idade = 37;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos.");
//alert(idade + idade2);

//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.replace("Japão", "Brasil"));
//console.log(frase.toUpperCase());
//console.log(frase.toLowerCase());