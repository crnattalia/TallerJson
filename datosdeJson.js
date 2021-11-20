class Busqueda {
    constructor() {
        this.personaje =
            [{ "name": "Root", "parent": [] }, { "name": "Lisa", "age": 10, "parent": ["Homer", "Marge"], "hair": "blond", "checked": true, "icon": "simpsonsIcons lisa" }, { "name": "Bart", "age": 9, "parent": ["Homer", "Marge"], "hair": "blond", "checked": false, "icon": "simpsonsIcons bart" }, { "name": "Maggie", "age": 2, "parent": ["Homer", "Marge"], "hair": "black", "checked": true }, { "name": "Patty", "age": 37, "parent": ["Jacqueline"], "hair": "blond", "checked": true }, { "name": "Selma", "age": 38, "parent": ["Jacqueline"], "hair": "blond", "checked": false }, { "name": "Rod", "age": 9, "parent": ["Ned"], "hair": "blond", "checked": true }, { "name": "Todd", "age": 8, "parent": ["Ned"], "hair": "blond", "checked": true }, { "name": "Abe", "age": 65, "parent": ["Root"], "hair": "none", "checked": true }, { "name": "Mona", "age": 65, "parent": ["Root"], "hair": "none", "checked": false }, { "name": "Jacqueline", "age": 63, "parent": ["Root"], "hair": "none", "checked": true }, { "name": "Homer", "age": 42, "parent": ["Abe", "Mona"], "hair": "none", "checked": false, "icon": "simpsonsIcons homer", "enabled": false }, { "name": "Marge", "age": 35, "parent": ["Jacqueline"], "hair": "blond", "checked": true, "icon": "simpsonsIcons marge" }, { "name": "Ned", "age": 40, "parent": ["Root"], "hair": "none", "checked": true }, { "name": "Apu", "age": 40, "parent": ["Root"], "hair": "black", "checked": true }, { "name": "Manjula", "age": 40, "parent": ["Apu"], "hair": "brown", "checked": false }];

        this.personajesSP = this.personaje;
        this.onInit();
        this.onInitC();
        this.onInitF();
        console.log(this.personaje);

    }
    onInit() {
        let cuerpo = document.getElementById("cuerpo");
        while (cuerpo.rows.length > 0) {
            cuerpo.deleteRow(0);
        }
        this.personaje.forEach(personajes => {
            let fila = cuerpo.insertRow(cuerpo.rows.length);
            fila.insertCell(0).innerHTML = personajes.nombre;
            fila.insertCell(1).innerHTML = personajes.edad;
            fila.insertCell(2).innerHTML = personajes.cabello;
            fila.insertCell(3).innerHTML = personajes.comprobado;
        });
    }

    onInitC() {
        let cuerpo = document.getElementById("cuerpo2");
        while (cuerpo.rows.length > 0) {
            cuerpo.deleteRow(0);
        }
        this.personaje.forEach(personajes => {
            let fila = cuerpo.insertRow(cuerpo.rows.length);
            fila.insertCell(0).innerHTML = personajes.cabello;
            fila.insertCell(1).innerHTML = personajes.nombre;
        });
    }

    onInitF() {
        let cuerpo = document.getElementById("cuerpo3");
        while (cuerpo.rows.length > 0) {
            cuerpo.deleteRow(0);
        }
        this.personaje.forEach(personajes => {
            let fila = cuerpo.insertRow(cuerpo.rows.length);
            fila.insertCell(0).innerHTML = personajes.nombre;
            fila.insertCell(1).innerHTML = personajes.familiar.length;
        });
    }

    buscar(id) {
        let busqueda = document.getElementById(id).value;
        this.personaje = this.personajesSP;
        this.personaje = this.personaje.filter(personajes => {
            return personajes.nombre.toLowerCase().indexOf(busqueda) > -1;
        });
        this.onInit();
    }
    buscarCabello(id) {
        let busqueda = document.getElementById(id).value;
        this.personaje = this.personajesSP;
        this.personaje = this.personaje.filter(personajes => {
            return personajes.cabello.toLowerCase().indexOf(busqueda) > -1;
        });
        this.onInitC();
    }
}
let busqueda = new Busqueda();
let busquedaCabello = new Busqueda();

let form = document.getElementById('busquedaForm');
form.addEventListener('submit', () => {
    busqueda.buscar('valor');
});

let forma = document.getElementById('busquedaForm2');
forma.addEventListener('submit', () => {
    busquedaCabello.buscarCabello('valor2');
});