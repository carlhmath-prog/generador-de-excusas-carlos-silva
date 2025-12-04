

function generateExcuse() {
    let who = ['El perro', 'Mi abuela', 'El cartero', 'Mi pájaro'];
    let action = ['comió', 'orino', 'rompió', 'perdió'];
    let what = ['mi tarea', 'mi celular', 'las llaves'];
    let when = ['antes de la clase', 'cuando dormía', 'mientras hacía ejercicio', 'durante mi almuerzo'];
    let maxexcuse = ["y me duele la panza..","y no tengo internet..","y me fui de viaje.."];
    
    let whoIndex = Math.floor(Math.random() * who.length);
    let actionIndex = Math.floor(Math.random() * action.length);
    let whatIndex = Math.floor(Math.random() * what.length);
    let whenIndex = Math.floor(Math.random() * when.length);
     let maxexcuseIndex = Math.floor(Math.random() * maxexcuse.length);
   
     let excuse = `${who[whoIndex]} ${action[actionIndex]} ${what[whatIndex]} ${when[whenIndex]} ${maxexcuse[maxexcuseIndex]}   `;
    return excuse;
}


window.onload = function() {
    document.getElementById('excuse').innerHTML = generateExcuse();
};



