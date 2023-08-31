let ponerPrecio = parseInt (prompt `Ingrese el precio de su carrera/curso de interes para calcular precio final`)
let salirMenu = false

do{
let opcionIngresada = parseInt(prompt(`Pago en 1 pago no tiene interes, en 3 cuotas tiene un 15% de recargo y en 6 cuotas un 20%
   1 - Abonar en 1 pago
   2 - Abonar en 3 cuotas
   3 - Abonar en 6 cuotas
   0 - Salir del menu`))
   switch(opcionIngresada){
      case 1:
        alert (`El precio final de su carrera/curso es de $ ${ponerPrecio}`) 
        salirMenu = true       
      break
      case 2:
        const recargo3cuo = 1.15
        let precioFinal = ponerPrecio * recargo3cuo
        alert (`El precio final de su carrera/curso es de $ ${precioFinal}`)    
        salirMenu = true
      break
      case 3:
        const recargo6cuo = 1.20
        let precioFinal1 = ponerPrecio * recargo6cuo
        alert (`El precio final de su carrera/curso es de $ ${precioFinal1}`)  
        salirMenu = true        
      break         
      case 0:
         salirMenu = true
      break   
      default:
         console.log("Opción no válida, ingrese alguna presente en el menu")
      break
   }
}while(!salirMenu)
function saludarAlumno(nombre){
  prompt(`¡Hola ${nombre}! Ingrese el nombre de la carrera o curso de su interés`)
}
let nombre = prompt ("Ingrese su nombre y apellido")
saludarAlumno(nombre)

function pedirNumero (numero){
  prompt (`¡Muchas gracias por contactarnos ${nombre}`)
}
let numero = prompt (`${nombre} porfavor índiquenos su número de telefono y un operador se pondra en contacto con usted. ¡Gracias! `)
