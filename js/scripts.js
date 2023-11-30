const fname = prompt('Inserisci il tuo nome:');
const sname = prompt('Inserisci il tuo cognome:');
const pcolor = prompt('Inserisci il tuo colore preferito:');
const pnumber = prompt('Inserisci il tuo numero preferito:');


document.getElementById("message").innerHTML =
"Hello" + fname + sname + pcolor + pnumber;

