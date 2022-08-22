// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;


//Metodo tabata
// 20s de exercicios e 10s de descando = 1 ciclo -> total 5 ciclos

let count = 0;
for(let count = 1; count <= 20; count++){
  console.log(count);
}
if(count = 20){
  console.log('descanso');
  for(let count = 10; count <= 11; count--){
    console.log(count);
  }
}
