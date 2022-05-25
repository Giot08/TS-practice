

console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/
  
//  let skills = ['Spiral', 'Counter', 'Explore']
// WRONG let skills: (boolean | string | number) = ['Spiral', 'Counter', 'Explore', 100]
let skills: string[] = ['Spiral', 'Counter', 'Explore'];

interface personaje{
    name: string;
    hp: number;
    habilidades: string[];
    town?: string

}

const player: personaje = {
    name: 'Giot',
    hp: 100,
    habilidades: ['Spiral', 'Counter', 'Explore'],
}

