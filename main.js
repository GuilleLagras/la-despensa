//----Array----

const secciones =["Fiambres", "Lacteos","Vinos","Carnes","Limpieza"]

for (let index = 0; index < secciones.length; index++) {
    const element = secciones[index];
    console.log(element)
}
//---Contructor---
class Tienda{
    constructor (producto,marca, precio){
        this.producto=producto;
        this.marca=marca;
        this.precio=precio;
    }
}

//---fiambres---
const tienda=[]
tienda.push(new Tienda("salamin","milan", 800))
tienda.push(new Tienda("queso","fontina", 950))
tienda.push(new Tienda ("mortadela", "dela", 680))

const productos = [
    {nombre: "fideos" ,precio:500},
    {nombre: "gaseosa", precio: 600},
    {nombre: "detergente",precio:700},
    {nombre: "shampoo",precio:1100},
    {nombre: "leche",precio:450},
];
let carrito = []

//---Bienvenido a nuestra tienda---

let bienvenida = prompt ("Te damos la bienvenida a nuestra tienda online. Desea ver nuestros productos? \n1 Ingrese 1 para entrar \n2 Ingrese 2 para salir")

while (bienvenida != "1" && bienvenida != "2") {
    alert("Por favor ,ingrese una opcion valida")
    bienvenida=prompt("Desea ingresar a nuestro sitio web? \n1 Ingrese 1 para entrar \n2 Ingrese 2 para salir")
}

if (bienvenida== "1"){
    alert("Bienvenido. A continuacion se mostraran todos nuestros productos")
    let productosAmostar= productos.map((productos) => productos.nombre +" "+ "$ " + productos.precio);
    alert(productosAmostar.join(" |-| "))
} else if (bienvenida== "2"){
    alert("Gracias por visitarnos")
}
//---Lista de productos---
while(bienvenida!="2") {
    let productos= prompt("Aca podras agregar todos tus productos al carrito de compras")
    let precio = 0

    if(productos=="fideos"|| productos== "gaseosa" || productos=="detergente" || productos== "shampoo" || productos== "leche"){
        switch (productos) {
            case "fideos":
                precio=500
                break;
            case "gaseosa":
                precio=600
                break;
            case "detergente":
                precio=700
                break;
            case "shampoo":
                    precio=1100
                    break;
            case "leche":
                precio=450
                break;
            default:
                break;
        }
        let unidades=Number(prompt("Cuantas unidades desea agregar"))
        carrito.push({productos,unidades,precio})
        console.log(carrito)
    }else {
        alert("Lo sentimos, no disponemos de ese producto en este momento")
    }

    bienvenida= prompt("Desea agregar mas productos al carrito? \n1 Ingrese 1 para seguir comprando \n2 Ingrese 2 para pasar a pagar")
    while (bienvenida=="2") {
        alert("Gracias por comprar con nosotros. Sus Total a pagar se mostrara por consola")
        carrito.forEach((saldoApagar)=> {
            console.log(`productos: ${saldoApagar.productos}, unidades:${saldoApagar.unidades},total a pagar ${saldoApagar.unidades*saldoApagar.precio}`)
        })
        break;
    }
}

//---Busqueda---

//const busqueda = productos.find((busca)=>busca.nombre ==="fideos")
//console.log(busqueda)

//---Filtrado---

const filtrado = productos.filter((element)=> element.precio <=600)

let preciosBajos= filtrado.map((productos)=> productos.nombre +" "+ "$ " + productos.precio)

console.log("Estos son nuestros productos de menos de $600 "+preciosBajos)

