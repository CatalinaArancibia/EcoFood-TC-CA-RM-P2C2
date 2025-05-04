//array productos
const productos = [
    {
      nombre: "Pack de 3 mermeladas artesanales",
      precio: "$5.500",
      descripcion: "Hechas con frutas rescatadas (frutilla, ciruela, damasco)."
    },
    {
      nombre: "Harina de cáscara de plátano (250g)",
      precio: "$3.200",
      descripcion: "	Harina alternativa rica en fibra, ideal para repostería."
    },
    {
      nombre: "Caja semanal de vegetales orgánicos (5 kg)",
      precio: "$11.000",
      descripcion: "Verduras cultivadas sin agroquímicos, provenientes de pequeños agricultores."
    },
    {
      nombre:"Pack de legumbres a granel (3 variedades, 500g c/u)",
      precio: "$5.900",
      descripcion:"Lentejas, garbanzos y porotos de cultivo agroecológico."
    }
  
  ];
  
  // guarda en la variable el elemento de html que tenga la clase en el ()
  const plantilla = document.querySelector(".tarjeta");
  const contenedor = document.getElementById("contenedorProductos");
  
  // recorre el array de productos y clona los hijos
  productos.forEach((producto, index) => {
    let nueva = index === 0 ? plantilla : plantilla.cloneNode(true);
    nueva.querySelector(".nombre").textContent = producto.nombre;
    nueva.querySelector(".precio").textContent = `Precio: ${producto.precio}`;
    nueva.querySelector(".descripcion").textContent = producto.descripcion; 
    if (index !== 0) contenedor.appendChild(nueva);
  });