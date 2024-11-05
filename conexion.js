function registrou() {
    document.getElementById("contenido").innerHTML = '<div class="container">'
+'<h2 class="text-center mb-4">Registro de Usuario</h2>'
+'<form id="registrationForm">'
+'<div class="form-group">'
+'<label for="role">Tipo de rol:</label>'
+'<select class="form-control" id="role" required>'
+'<option value="aprendiz">Aprendiz</option>'
+'<option value="instructor">Instructor</option>'
+'</select>'
+'</div>'
+'<div class="form-group">'
+'<label for="name">Nombres y Apellidos:</label>'
+'<input type="text" class="form-control" id="" placeholder="Ingrese sus nombres y apellidos" required>'
+'</div>'
+'<div class="form-group">'
+'<label for="name">Correo electronico:</label>'
+'<input type="email" class="form-control" id="" placeholder="Ingrese su correo electronico" required>'
+'</div>'
+'<div class="form-group">' 
+'<label for="name">Contraseña:</label>'
+'<input type="pasword" class="form-control" id="" placeholder="Ingrese su contraseña" required>'
+'</div>'
+' <button onclick="mensaje()" type="submit" "class="btn btn-primary">Guardar</button>'
+'<br>'
+'<br>'
+'<br>'
+'<br>'
+'<br>'
+'<br>'
+'<br>'
+'<br>'
+'<footer>'
+'<div class="container text-center">'
+'<p>&copy; 2024 Juan Goyeneche. Todos los derechos reservados.</p>'
+'<p>Siguenos en' 
    +'<a href="#"><i class="fab fa-facebook"></i></a>' 
    +'<a href="#"><i class="fab fa-twitter"></i></a>' 
    +'<a href="#"><i class="fab fa-instagram"></i></a>'
  +'</p>'
+'</div>'
+'</footer>';
}

function reporteu() {
    document.getElementById("contenido").innerHTML = '  <table class=" display table" id="tablar">'
    +'<thead>    <tr>'
    +'  <th scope="col">#</th>'
    +'   <th scope="col">nombre</th>'
    +'  <th scope="col">apellido</th>'
    +' <th scope="col">correo</th>'
    +' </tr>  </thead>'
    +' <tbody>   <tr>'
    +' <th scope="row">1</th>'
    +'  <td>Juan</td>'
     +' <td>Perez</td>'
    +'  <td>juan.perez@example.com</td>'
    +'</tr>    <tr>'
    +' <th scope="row">2</th>'
    +'  <td>Maria</td>'
     +' <td>Gomez</td>'
    +'  <td>maria.gomez@example.com</td>'
    +'</tr>    <tr>'
    +' <th scope="row">3</th>'
    +'  <td>Carlos</td>'
     +' <td>Lopez</td>'
    +'  <td>carlos.lopez@example.com</td>'
    +'</tr>    <tr>'
    +' <th scope="row">4</th>'
    +'  <td>Ana</td>'
     +' <td>Rodriguez</td>'
    +'  <td>ana.rodriguez@example.com</td>'
    +'</tr>    <tr>'
    +' <th scope="row">5</th>'
    +'  <td>Pedro</td>'
     +' <td>Martinez</td>'
    +'  <td>pedro.martinez@example.com</td>'
    +'</tr>       <tr>'
    +' <th scope="row">6</th>'
    +'  <td>Juan</td>'
     +' <td>Perez</td>'
    +'  <td>juan.perez@example.com</td>'
    +'</tr>    <tr>'
    +' <th scope="row">7</th>'
    +'  <td>Maria</td>'
     +' <td>Gomez</td>'
    +'  <td>maria.gomez@example.com</td>'
    +'</tr>    <tr>'
    +' <th scope="row">8</th>'
    +'  <td>Carlos</td>'
     +' <td>Lopez</td>'
    +'  <td>carlos.lopez@example.com</td>'
    +'</tr>    <tr>'
    +' <th scope="row">9</th>'
    +'  <td>Ana</td>'
     +' <td>Rodriguez</td>'
    +'  <td>ana.rodriguez@example.com</td>'
    +'</tr>    <tr>'
    +' <th scope="row">10</th>'
    +'  <td>Pedro</td>'
     +' <td>Martinez</td>'
    +'  <td>pedro.martinez@example.com</td>'
    +'</tr>      <tr>'
    +' <th scope="row">11</th>'
    +'  <td>Juan</td>'
     +' <td>Perez</td>'
    +'  <td>juan.perez@example.com</td>'
    +'</tr>    <tr>'
    +' <th scope="row">12</th>'
    +'  <td>Maria</td>'
     +' <td>Gomez</td>'
    +'  <td>maria.gomez@example.com</td>'
    +'</tr>    <tr>'
    +' <th scope="row">13</th>'
    +'  <td>Carlos</td>'
     +' <td>Lopez</td>'
    +'  <td>carlos.lopez@example.com</td>'
    +'</tr>    <tr>'
    +' <th scope="row">14</th>'
    +'  <td>Ana</td>'
     +' <td>Rodriguez</td>'
    +'  <td>ana.rodriguez@example.com</td>'
    +'</tr>    <tr>'
    +' <th scope="row">15</th>'
    +'  <td>Pedro</td>'
     +' <td>Martinez</td>'
    +'  <td>pedro.martinez@example.com</td>'
    +'</tr>       <tr>'
    +' <th scope="row">16</th>'
    +'  <td>Juan</td>'
     +' <td>Perez</td>'
    +'  <td>juan.perez@example.com</td>'
    +'</tr>    <tr>'
    +' <th scope="row">17</th>'
    +'  <td>Maria</td>'
     +' <td>Gomez</td>'
    +'  <td>maria.gomez@example.com</td>'
    +'</tr>    <tr>'
    +' <th scope="row">18</th>'
    +'  <td>Carlos</td>'
     +' <td>Lopez</td>'
    +'  <td>carlos.lopez@example.com</td>'
    +'</tr>    <tr>'
    +' <th scope="row">19</th>'
    +'  <td>Ana</td>'
     +' <td>Rodriguez</td>'
    +'  <td>ana.rodriguez@example.com</td>'
    +'</tr>    <tr>'
    +' <th scope="row">20</th>'
    +'  <td>Pedro</td>'
     +' <td>Martinez</td>'
    +'  <td>pedro.martinez@example.com</td>'
    +'</tr>       </tbody> </table>'
    +'<br>'
    +'<br>'
    +'<br>'
    +'<br>'
    +'<br>'
    +'<br>'
    +'<br>'
    +'<br>'
    +'<footer>'
    +'<div class="container text-center">'
    +'<p>&copy; 2024 Juan Goyeneche. Todos los derechos reservados.</p>'
    +'<p>Siguenos en' 
    +'<a href="#"><i class="fab fa-facebook"></i></a>' 
    +'<a href="#"><i class="fab fa-twitter"></i></a>' 
    +'<a href="#"><i class="fab fa-instagram"></i></a>'
    +'</p>'
    +'</div>'
    +'</footer>';
    }

    
function mensaje() {
  Swal.fire({
    title: "¿Estas seguro?",
    text: "Registrar usuario",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, guardar usuario"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Perfecto",
        text: "Usuario Registrado",
        icon: "success"
      });
    }
  });
    }
    
    const users = [
        { id: 1, nombre: 'Juan', apellido: 'Pérez', correo: 'juan.perez@example.com' },
        { id: 2, nombre: 'María', apellido: 'Gómez', correo: 'maria.gomez@example.com' },
        { id: 3, nombre: 'Carlos', apellido: 'López', correo: 'carlos.lopez@example.com' },
        { id: 4, nombre: 'Ana', apellido: 'Rodríguez', correo: 'ana.rodriguez@example.com' },
        { id: 5, nombre: 'Pedro', apellido: 'Martínez', correo: 'pedro.martinez@example.com' }
      ];
      
      // Obtenemos el elemento tbody de la tabla
      const tbody = document.getElementById('user-table-body');
      
      // Creamos un bucle para agregar cada usuario a la tabla
      users.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <th scope="row">${index + 1}</th>
          <td>${user.nombre}</td>
          <td>${user.apellido}</td>
          <td>${user.correo}</td>
        `;
        tbody.appendChild(row);
      });

    //Función productos
      function productos() { document.getElementById('contenido').innerHTML = ` <h1> Productos </h1>
        <div class="container" id="productos"></div>
  
    
        `;
       
    
          // Datos de los productos
          const productosData = [
              { nombre: "Café Premium 100% Colombiano", precio: 25000, iva: 0.16, imagen: "dist/img/cafe.jpg"  },
              { nombre: "Auriculares Bluetooth Inalámbricos", precio: 95000, iva: 0.19, imagen: "dist/img/auriculares.jpg" },
              { nombre: "Botella Deportiva de Acero Inoxidable", precio: 45000, iva: 0.5, imagen: "dist/img/botella.jpg" },
              { nombre: "Cuaderno de Notas con Diseño Personalizado", precio: 15000, iva: 0, imagen: "dist/img/cuaderno.jpg" },
              { nombre: "Set de Herramientas para el Hogar (25 piezas)", precio: 120000, iva: 0.16, imagen: "dist/img/herramientas.jpg" },
          ];

          // Contenedor de productos
          const productsContainer = document.getElementById("productos");
          productsContainer.innerHTML = ""; // Limpiar contenedor

          // Generar productos dinámicamente
          productosData.forEach((producto) => {
              const productElement = document.createElement("div");
              productElement.classList.add("productos");

              // Calcular IVA y precio total
              const ivaCalculado = calcularIVA(producto.precio, producto.iva);
              const precioTotal = producto.precio + ivaCalculado;

              // Crear estructura del producto
              productElement.innerHTML = `
                  <img src="${producto.imagen}" alt="${producto.nombre}">
                  <div class="product-info">
                      <h2>${producto.nombre}</h2>
                      <p>Precio: $${producto.precio.toFixed(2)}</p>
                      <p>IVA (${producto.iva}%): $${ivaCalculado.toFixed(2)}</p>
                      <p>Precio con IVA: $${precioTotal.toFixed(2)}</p>
                  </div>
              `;

              productsContainer.appendChild(productElement);
          });
      }

      // Función para calcular el IVA
      function calcularIVA(precio, porcentajeIVA) {
          return precio * (porcentajeIVA / 100);
      }
      

     