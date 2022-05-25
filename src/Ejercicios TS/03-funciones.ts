
// console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number {
    return (a + b);
}

const sumaFlecha = (a: number, b: number): number => {
    return a + b
}

function multiplicar(num: number, num2?: number, base: number = 2): number {
    return num * base
}


const resultado = multiplicar(5, 10)
// console.log(resultado)


// ////////////////////////////////////////////////

interface personajeLOR{
    nombre: string;
    hp: number;
    mostrarHP: ()=> void;
}

function curar(personaje: personajeLOR, curarX:number): void{
    personaje.hp += curarX

    // console.log(personaje)
}

const nuevoPersonaje: personajeLOR = {
    nombre: 'giot',
    hp: 30,
    mostrarHP(){
        console.log('puntos de vida', this.hp)
    }
}
// console.log(nuevoPersonaje)

curar(nuevoPersonaje, 23);

// console.log(nuevoPersonaje)