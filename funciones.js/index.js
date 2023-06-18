//Contador
const btn_plus = document.getElementById('btn-count-mas');
const btn_minus = document.getElementById('btn-count-menos');
const p = document.getElementById('contador');



let counter = 0;
let temporizador = false;
let timer =30;
let mostrarTiempo = document.getElementById("tempo" );

p.textContent = counter;

btn_minus.addEventListener('click', async () => {
    await setTimeout(() =>{
        counter--;
        p.textContent = counter;
    }, 1000);
})

btn_plus.addEventListener('click', async () => {
    await setTimeout(() => {
        counter++;
        p.textContent = counter;
    }, 1000);
});



