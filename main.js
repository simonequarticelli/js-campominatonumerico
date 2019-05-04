// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta,
// se il numero è presente nella lista dei numeri generati,
// la partita termina,
// altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o
// raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio,
// cioè il numero di volte che l’utente ha inserito un numero consentito.

// BONUS: all’inizio il software richiede anche una difficoltà all’utente
// che cambia il range di numeri casuali.
// Con difficoltà 0=> da 1 a 100,
// con difficoltà 1 => da 1 a 80
// con difficoltà 2=> da 1 a 50


//creo una funzione che genera numeri casuali da 1 a 100
function numeri_bombe(max) {
  return Math.floor(Math.random()*max)+1; //<-- non creo variabile perchè non dovrò rielaborarla
}
//console.log(numeri_bombe(100));

//creo richiesta e logica difficoltà
var livello = parseInt(prompt('inserisci il livello di difficoltà', '0, 1, 2'));
var numero; //<--- assegno variabile per evitare gen di numeri doppi
var possibilita;

// if (livello == 0) {
//   numero = numeri_bombe(100);
//   possibilita = 84;
// }else if(livello == 1){
//   numero = numeri_bombe(80);
//   possibilita = 64;
// }else if (livello == 2) {
//   numero = numeri_bombe(50);
//   possibilita = 34;
// }

//creo array vuoto per inserire ogni gruppo di numeri casuali

var lista_bombe = [];

//creo ciclo while per generare 16 numeri casuali non doppi

while (lista_bombe.length < 16) {  //<--- gira fino a che la condizione non si verifica più

  //logica con switch
  switch (livello) {
    case 0:
      numero = numeri_bombe(100);
      possibilita = 84;
    break;
    case 1:
      numero = numeri_bombe(80);
      possibilita = 64;
    break;
    case 2:
      numero = numeri_bombe(50);
      possibilita = 34;
    break;
  }

  if (lista_bombe.includes(numero) == false) { //<-- numero casuale non è incluso in lista_numeri
    lista_bombe.push(numero); //<--- push popola array (non incremento con i++)
  }
}

console.log(lista_bombe);
console.log(possibilita);


//creo funzione di controllo
function controllo_bombe(lista, numero){
  var find = false;
  for (var i = 0; i < lista.length; i++) {
    if (lista[i] == numero) {
      find = true;
    }
  }
  return find;
}

//creo array vuoto per inserire numeri_consentiti inseriti dall'utente
var numeri_consentiti = [];

//creo ciclo while per input utente ripetuto con verifica dei numeri inseriti e output

//creo contatore tentativi riusciti
var conteggio = 0;

while (numeri_consentiti.length < possibilita && (controllo_bombe(lista_bombe, utente)) != true) { // <-- 0 è minore di 84? controllo_bombe è diverso da vero? se si continua a ciclare
  var utente = parseInt(prompt('inserisci un numero')); //<-- chiede numero all'utente

  //verifico la presenza del numero nella lista bombe
  if (controllo_bombe(lista_bombe, utente)) { //<-- se questa condizione risulta vera comunico
    alert('hai perso hai provato ' + conteggio + ' volte prima di beccare la bomba');

  }else if (numeri_consentiti.includes(utente) == false){
   numeri_consentiti.push(utente); //<-- se il numero inserito non è presente nella lista allora viene aggiunto
   conteggio = conteggio + 1; //<-- tengo traccia della quantita di tentativi riusciti

  }else if (numeri_consentiti.includes(utente)){ //<-- se il numero è gia presente nella lista allora dico di inserirne un'altro
   alert('numero gia inserito, inseriscine un/altro');


  }else if (numeri_consentiti.length == possibilita){
   alert('hai vinto');
  }
}

console.log(numeri_consentiti);
console.log(conteggio);
