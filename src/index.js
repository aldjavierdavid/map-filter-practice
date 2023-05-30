/**
 * Queremos implementar una función que dado un array de objetos, y un texto a buscar, nos devuelve solamente aquellos objetos que en el campo descripción contienen la palabra clave 'palabraClave'
 */

function buscarObjetos(listaObjetos, palabraClave) {
  let objetosFiltrados = [];

  // TU CODIGO AQUÍ
  objetosFiltrados = listaObjetos.filter((p) =>
    p.descripcion.includes(palabraClave)
  );

  // NO MODIFICAR A PARTIR DE AQUÍ

  return objetosFiltrados;
}

const objetosDonacion = [
  {
    nombre: "Bicicleta",
    marca: "XYZ",
    color: "Rojo",
    tamaño: "Mediano",
    estado: "Usado",
    edad: 2,
    descripcion: "Bicicleta de montaña en buen estado",
    imagen: "ruta/a/la/imagen-bicicleta.jpg",
    categoria: "Deportes",
    ciudad: "Nueva York"
  },

  {
    nombre: "Televisor",
    marca: "ABC",
    color: "Negro",
    tamaño: "42 pulgadas",
    estado: "Funcionando",
    edad: 4,
    descripcion: "Televisor de pantalla plana en perfecto estado",
    imagen: "ruta/a/la/imagen-televisor.jpg",
    categoria: "Electrónica",
    ciudad: "Londres"
  },
  {
    nombre: "Libro",
    autor: "John Doe",
    género: "Ficción",
    estado: "Nuevo",
    idioma: "Inglés",
    descripcion: "Libro de ciencia ficción emocionante",
    ciudad: "Tokio"
  },
  {
    nombre: "Mesa",
    material: "Madera",
    color: "Café",
    tamaño: "Grande",
    estado: "Usado",
    descripcion: "Mesa de comedor en buen estado",
    ciudad: "París"
  },
  {
    nombre: "Silla",
    material: "Metal",
    color: "Negro",
    tamaño: "Mediano",
    estado: "Usado",
    descripcion: "Silla de escritorio en buen estado",
    ciudad: "Roma"
  },
  {
    nombre: "Teléfono",
    marca: "XYZ",
    color: "Plata",
    estado: "Funcionando",
    descripcion: "Teléfono inteligente en buen estado",
    ciudad: "Sídney"
  },
  {
    nombre: "Ordenador portátil",
    marca: "ABC",
    color: "Gris",
    estado: "Funcionando",
    descripcion: "Ordenador portátil en buen estado",
    ciudad: "Toronto"
  },
  {
    nombre: "Cámara",
    marca: "XYZ",
    color: "Negro",
    estado: "Usado",
    descripcion: "Cámara digital en buen estado",
    ciudad: "Moscú"
  },
  {
    nombre: "Guitarra",
    marca: "ABC",
    color: "Negro",
    estado: "Usado",
    descripcion: "Guitarra acústica en buen estado",
    ciudad: "Sao Paulo"
  },
  {
    nombre: "Mesa de centro",
    material: "Madera",
    color: "Blanco",
    tamaño: "Pequeño",
    estado: "Nuevo",
    descripcion: "Mesa de centro moderna",
    ciudad: "Estambul"
  }
];

console.log(buscarObjetos(objetosDonacion, "buen estado"));

/**objetosFiltrados = listaObjetos.map((p) => {
  let nuevoTamano = p.tamaño;

  if (p.tamaño === "Grande") {
    nuevoTamano = "L"
  } else if (p.tamaño === "Mediano") {
    nuevoTamano = "M"
  } else if (p.tamaño === "Pequeño") {
    nuevoTamano = "S"
  }

  return {
    ...p,
    tamaño: nuevoTamano
  }
}) */
