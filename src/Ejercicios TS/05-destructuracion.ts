
// console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles
}
interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}

const { volumen, segundo, detalles: {autor: autorDetalle}, cancion } = reproductor;

// const {autor} = detalles


console.log('el valor actual de: segundo ' ,segundo)
console.log('el valor actual de: autor ', autorDetalle)
console.log('el valor actual de: cancion ', cancion)
console.log('el valor actual de: volumen ', volumen)


const dbz: string[] = ['uno', 'dos', 'tres'];

const [a,b,c] = dbz;

console.log(a)
console.log(b)
console.log(c)
