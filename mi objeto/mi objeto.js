/*
  Comentario
  de
  varias
  líneas
*/

// Comentario de una línea

//Definición o declaración
function saludo (nombre = 'ICONOS') {
    //Interpolación de variables
    //alert(`Hola, ${nombre}`)
  }
  
  //Invocación o ejecución
  //saludo('Tete')
  //saludo()
  ;
  //Es buena práctica encapsular tu código en una función anónima autoejecutable
  (function (d, w) {
    //alert(d)
    //alert(w)
    //alert('Hola')
    //console.log(d, w, 'Hola')
  })(document, window);
  
  /* Objetos Literales */
  (function (c) {
    c('*****Objetos Literales*****')
  
    /* Para declarar una variable en JS se utilizaba la palabra 'var'. Ahora para declarar una variable usamos 'const' o 'let' */
  
    /* Los objetos en JS son una colección de propiedades con sus respectivos valores. Esas propiedades pueden ser atributos o métodos */
    const lampara = {
      nombre: 'lampara',
      color: 'roja',
      tamaño:'medium',
     
      alumbrar: function () {
        c('no hacer nada')
      },
      encender: function (brillar = 'prender') {
        c(`${this.nombre} encender ${brillar}`)
      },
      aparecer: function (imagen) {
        document.write(`<img src="${imagen}">`)
    }
}

c(
  lampara,
  lampara.nombre,
  lampara.color,
  lampara.tamaño,
  
)

lampara.alumbrar()
lampara.encender()
lampara.encender('avitación')
lampara.aparecer('http://catalogo.decoracionvitoria.com/images/fotosProductos/5790_13050713291379.png')

const lampara2 = {
  nombre: 'lampara 2',
  color: 'amarillo',
  tamaño: 'pequeño',
  
  ladrar: function () {
    c('adorno')
  },
  encender: function (brillar = 'prender'){
    c(`${this.nombre} encender ${brillar}f`)
  },
  aparecer: function (imagen) {
    document.write(`<img src="${imagen}">`)
  }
}

c(
  lampara2,
  lampara2.nombre,
  lampara2.color,
  lampara2.tamaño,
  
)

lampara2.alumbrar()
lampara2.encender()
lampara2.encender('avitación')
lampara2.aparecer('http://casaidea.vteximg.com.br/arquivos/ids/162222-1000-1000/3210109000048.jpg?v=636174247933630000')
})(console.log);


