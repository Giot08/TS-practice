
// console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/

export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Nokia',
    precio: 2000
}
const tableta: Producto = {
    desc: 'Samsung',
    precio: 4000
}

export function calculaISV(productos: Producto[], ) {
    let total = 0;
    // productos.forEach((producto) =>{
    productos.forEach(({precio}) =>{
        total += precio
        // total += producto.precio
    })
    return [total, total * 0.19]
}

const articulos = [ telefono, tableta ];

const [total, isv] = calculaISV(articulos);

console.log('ISV: ', isv)
console.log('total: ', total)