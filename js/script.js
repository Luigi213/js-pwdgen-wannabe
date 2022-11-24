// -1-2-3 inserimento dei prompt: nome, cognome e colore preferito 
let nome = prompt("Inserisci il nome")
let cognome = prompt("Inserisci il cognome")
let colore_preferito = prompt("Inserisci il colore preferito")
// -4-5 concatenizzazione dei valori delle variabili con in fine il numero 21
let number = 21
document.getElementById("date").innerHTML = `${nome}${cognome}${colore_preferito}${number}`